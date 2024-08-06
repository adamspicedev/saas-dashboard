import SubscribeButton from "@/components/subscribe-button";
import { monthlyPlanId, yearlyPlanId } from "@/lib/stripe/payments";

const SubscriptionPage = ({
  searchParams,
}: {
  searchParams: {
    plan: string;
  };
}) => {
  const { plan } = searchParams;

  const planId = plan === "monthly" ? monthlyPlanId : yearlyPlanId;

  return (
    <div className="flex flex-col rounded-md border p-4">
      <h1 className="text-2xl font-bold">Start your subscription now:</h1>
      <div className="mt-3 w-fit">
        <SubscribeButton price={planId} />
      </div>
    </div>
  );
};

export default SubscriptionPage;
