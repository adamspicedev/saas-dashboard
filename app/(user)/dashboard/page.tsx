import { getSubscription } from "@/actions/user-subscriptions";
import AddProjectButton from "@/components/add-project";
import ConfettiWrapper from "@/components/confetti-wrapper";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { maxFreeProjects } from "@/lib/stripe/payments";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import ProjectList from "./projects-list";

const DashboardPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  console.log("searchParams", searchParams);
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  const newSub = searchParams["new-sub"];

  const userProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.userId, userId));

  const subscribed = await getSubscription({ userId });

  return (
    <div>
      {newSub === "true" ? <ConfettiWrapper /> : null}

      <div className="flex items-center justify-center gap-3">
        <h1 className="my-4 text-center text-3xl font-bold">Your Projects</h1>
        {!subscribed && userProjects.length >= maxFreeProjects ? null : (
          <AddProjectButton />
        )}
      </div>
      <ProjectList projects={userProjects} subscribed={subscribed} />
    </div>
  );
};

export default DashboardPage;
