import AddProjectButton from "@/components/add-project";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import ProjectList from "./projects-list";
import { getSubscription } from "@/actions/user-subscriptions";
import { maxFreeProjects } from "@/lib/stripe/payments";

const DashboardPage = async () => {
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  const userProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.userId, userId));

  const subscribed = await getSubscription({ userId });

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <h1 className="my-4 text-center text-3xl font-bold">Your Projects</h1>
        {subscribed !== true &&
        userProjects.length >= maxFreeProjects ? null : (
          <AddProjectButton />
        )}
      </div>
      <ProjectList projects={userProjects} subscribed={subscribed} />
    </div>
  );
};

export default DashboardPage;
