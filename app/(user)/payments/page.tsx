import { auth } from "@clerk/nextjs/server";
import { db } from "@/db";
import { subscriptions } from "@/db/schema";
import { eq } from "drizzle-orm";
import ManageSubscription from "@/components/manage-subscription";

const PaymentsPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const subscription = await db.query.subscriptions.findFirst({
    where: eq(subscriptions.userId, userId),
  });

  const plan = subscription && subscription.subscribed ? "premium" : "free";

  return (
    <div className="rounded-md border p-4">
      <h1 className="mb-3 text-4xl">Subscription Details</h1>
      <p className="mb-2 text-lg">Your current plan is: {plan}</p>
      <ManageSubscription />
    </div>
  );
};

export default PaymentsPage;
