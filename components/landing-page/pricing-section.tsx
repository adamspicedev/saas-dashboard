import { cn } from "@/lib/utils";
import PricingCard from "./pricing-card";
import { monthlyPlanId, yearlyPlanId } from "@/lib/stripe/payments";

export type PricingPlan = {
  id: number;
  title: string;
  price: number;
  description: string;
  isPopular: boolean;
  features: string[];
  url: string;
  planId?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    title: "Free",
    price: 0,
    description: "For small teams just getting started",
    isPopular: false,
    url: "/dashboard",
    features: [
      "3 projects",
      "Unlimited users",
      "2GB storage",
      "Priority support",
    ],
  },
  {
    id: 2,
    title: "Monthly",
    price: 14.99,
    description: "For growing teams",
    isPopular: true,
    url: "/payments/subscribe?plan=monthly",
    features: [
      "Unlimited projects",
      "Unlimited users",
      "5GB storage",
      "Priority support",
    ],
    planId: monthlyPlanId,
  },
  {
    id: 3,
    title: "Yearly",
    price: 149.99,
    description: "Upgrade to save more!",
    isPopular: false,
    url: "/payments/subscribe?plan=yearly",
    features: [
      "Unlimited projects",
      "Unlimited users",
      "50GB storage",
      "24/7 support",
    ],
    planId: yearlyPlanId,
  },
];

type Props = {
  showFree?: boolean;
};

const PricingSection = ({ showFree = true }: Props) => {
  const filteredPlans = showFree
    ? pricingPlans
    : pricingPlans.filter((plan) => plan.id !== 1);
  return (
    <div className="text-center">
      <h1 className="text-3xl capitalize">Pricing</h1>
      <h2 className="mb-8 pt-3 text-3xl font-extrabold">
        Flexible Pricing to Fit Your Needs
      </h2>
      <div
        className={cn(
          "mt-10 grid max-w-screen-xl grid-cols-1 items-center gap-3",
          filteredPlans.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2",
        )}
      >
        {filteredPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
