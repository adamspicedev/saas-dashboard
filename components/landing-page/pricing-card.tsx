"use client";
import { PricingPlan } from "./pricing-section";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import SubscribeButton from "../subscribe-button";
import { Button } from "../ui/button";

const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular,
  url,
  planId,
}: PricingPlan) => {
  const router = useRouter();

  const onClick = () => {
    router.push(url);
  };

  return (
    <div className="relative flex h-full flex-col justify-between rounded-lg border bg-white/20 p-6 text-left hover:shadow-md">
      {isPopular && (
        <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-gray-900 px-2 py-1 text-white">
          Popular
        </div>
      )}
      <div>
        <div className="inline-flex items-end">
          <h1 className="text-3xl font-extrabold">${price}</h1>
        </div>
        <h2 className="my-2 text-xl font-bold">{title}</h2>
        <p>{description}</p>
        <div className="my-3 flex-grow border-t border-gray-400 opacity-25"></div>
        <ul>
          {features.map((feature, index) => (
            <li
              key={index}
              className="my-2 flex flex-row items-center gap-2 text-gray-700"
            >
              <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900">
                <Check className="text-white" width={10} height={10} />
              </div>
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-2">
        {planId ? (
          <SubscribeButton price={planId} />
        ) : (
          <Button className="w-full" onClick={onClick}>
            Select Plan
          </Button>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
