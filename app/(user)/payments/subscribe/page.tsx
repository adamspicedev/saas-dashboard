import { getSubscription } from "@/actions/user-subscriptions";
import ManageSubscription from "@/components/manage-subscription";
import SubscribeButton from "@/components/subscribe-button";
import { monthlyPlanId, yearlyPlanId } from "@/lib/stripe/payments";
import { auth } from "@clerk/nextjs/server";

const SubscriptionPage = async ({
  searchParams,
}: {
  searchParams: {
    plan: string;
  };
}) => {
  const { userId } = auth();
  const { plan } = searchParams;

  const planId = plan === "monthly" ? monthlyPlanId : yearlyPlanId;

  if (!userId) {
    return null;
  }

  const subscribed = await getSubscription({ userId });

  return (
    <div className="flex flex-col rounded-md border p-4">
      {!subscribed ? (
        <>
          <h1 className="text-2xl font-bold">Start your subscription now:</h1>
          <div className="mt-3 w-fit">
            <SubscribeButton price={planId} />
          </div>
        </>
      ) : (
        <ManageSubscription />
      )}
    </div>
  );
};

export default SubscriptionPage;
