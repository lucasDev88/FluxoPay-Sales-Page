import "@/app/globals.css";
import PricingCard from "./cards/PricingCard";

const pricingData = [
  {
    title: "Basic Plan",
    price: "$9.99/month",
    features: [
      { name: "Feature 1", included: true },
      { name: "Feature 2", included: true },
      { name: "Feature 3", included: false },
    ],
  },
  {
    title: "Pro Plan",
    price: "$19.99/month",
    features: [
      { name: "Feature 1", included: true },
      { name: "Feature 2", included: true },
      { name: "Feature 3", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      <div className="w-364 h-174 bg-black flex items-center justify-center">
        <div className="w-360 h-170 bg-white flex items-center justify-center">
          <div className="w-357 h-167 bg-black flex items-center justify-center">
            <div className="w-353 h-163 bg-white flex">
              <div className="text mt-6 4xl md:text-5xl w-full text-center font-bold text-black">
                <h1>Pricing</h1>

                <div className="flex flex-col xl:flex-row justify-center items-center gap-8 mt-12">
                  {pricingData.map((plan, index) => (
                    <PricingCard
                      key={index}
                      title={plan.title}
                      price={plan.price}
                      features={plan.features}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
