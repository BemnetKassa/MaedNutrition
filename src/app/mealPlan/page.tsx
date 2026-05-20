import Link from "next/link";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";
import { Check, Clock3, Truck } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$59/wk",
    desc: "Light plan for busy people. 10 meals/week.",
    perks: ["Chef-prepared", "Calorie aware", "Free delivery"],
  },
  {
    name: "Standard",
    price: "$79/wk",
    desc: "Balanced plan for consistent daily nutrition. 14 meals/week.",
    perks: ["Balanced macros", "Priority prep", "Free delivery"],
  },
  {
    name: "Performance",
    price: "$99/wk",
    desc: "Higher-protein plan to support training. 21 meals/week.",
    perks: ["High protein", "Chef curated", "Free delivery"],
  },
];

export default function MealPlanPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAFAFA] pt-28 text-[#111111]">
        <section className="mx-auto max-w-362.5 px-4 md:px-6 py-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF7EC] px-4 py-2 text-sm font-semibold text-[#3FAE49]">
              <Clock3 className="h-4 w-4" />
              Meal Plans
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
              Simple plans, flexible options.
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#6B7280]">
              Pick the plan that fits your goals and schedule. All plans use
              clean ingredients, chef preparation, and reliable delivery.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-3xl border border-[#ECECEC] bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-xl font-extrabold text-[#3FAE49]">{plan.price}</p>
                </div>

                <p className="mt-3 text-[#6B7280]">{plan.desc}</p>

                <ul className="mt-6 space-y-3">
                  {plan.perks.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-[#111111]">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF7EC]">
                        <Check className="h-4 w-4 text-[#3FAE49]" />
                      </span>
                      <span className="text-[#6B7280]">{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between">
                  <Link href="/assessment" className="inline-flex items-center gap-2 rounded-xl bg-[#3FAE49] px-4 py-2 text-sm font-semibold text-white hover:bg-[#36963f]">
                    Get Started
                  </Link>

                  <span className="inline-flex items-center gap-2 text-sm text-[#6B7280]"><Truck className="h-4 w-4" />Free delivery</span>
                </div>
              </div>
            ))}
          </div>

          <section className="mt-14 rounded-2xl border border-[#ECECEC] bg-white p-6">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-extrabold">How it works</h3>
                <ol className="mt-4 space-y-4 list-decimal pl-5 text-[#6B7280]">
                  <li>Take a short assessment — tell us your goals.</li>
                  <li>Choose the plan that fits your schedule.</li>
                  <li>Meals arrive fresh — heat & enjoy.</li>
                </ol>
              </div>

              <div className="relative h-44 w-full overflow-hidden rounded-xl bg-[#c1dfcc]">
                <Image src="/pictures/Maed_profile.jpg" alt="meals" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
