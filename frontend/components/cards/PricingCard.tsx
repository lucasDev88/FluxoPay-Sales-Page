import "@/app/globals.css";

type Props = {
  title: string;
  price: string;
  features: Array<{ name: string; included: boolean }>;
};

export default function PricingCard({ title, price, features }: Props) {
  return (
    <div className="w-[320px] min-h-125 bg-black rounded-3xl border-4 border-zinc-800 p-7 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400">
      <h2 className="text-2xl font-bold text-center mb-7">{title}</h2>

      <div className="text-center mb-8">
        <span className="text-5xl font-black">{price.split("/")[0]}</span>

        {price.includes("/") && (
          <div className="text-lg text-zinc-400 mt-2">/{price.split("/")[1]}</div>
        )}
      </div>

      <div className="h-0.5 bg-zinc-800 mb-8"></div>

      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-lg">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${feature.included ? "bg-cyan-500 text-black" : "bg-red-500 text-white"}`}>
              {feature.included ? "✓" : "✕"}
            </div>

            <span className={feature.included ? "text-white" : "text-zinc-500 line-through"}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      <button className="w-full mt-8 py-3 rounded-2xl bg-cyan-500 text-black text-lg font-bold transition-all duration-300 hover:bg-cyan-400 hover:scale-105">
        Get Started
      </button>
    </div>
  );
}