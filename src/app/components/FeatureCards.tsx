import { ClipboardCheck, Zap } from "lucide-react";
import { Button } from "./Button";

export function FeatureCards() {
  return (
    <section className="relative bg-[#FAFAFA] pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2 lg:gap-8 -mt-8 relative z-10">
          {/* Card 1 */}
          <div className="flex flex-col bg-white rounded-2xl p-8 shadow-md border border-gray-100 transition-transform hover:-translate-y-2 hover:shadow-lg duration-300">
            <div className="h-12 w-12 rounded-xl bg-[#EAF7EC] flex items-center justify-center mb-6">
              <ClipboardCheck className="h-6 w-6 text-[#3FAE49]" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#111111] mb-3">
              A Meal Plan That Works For You
            </h3>
            <p className="text-[#6B7280] mb-8 flex-1 leading-relaxed">
              Answer a few questions and let AI create the perfect plan for your goals, lifestyle, and dietary preferences.
            </p>
            <Button size="lg" className="w-full">
              Start My Assessment
            </Button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col bg-white rounded-2xl p-8 shadow-md border border-gray-100 transition-transform hover:-translate-y-2 hover:shadow-lg duration-300">
            <div className="h-12 w-12 rounded-xl bg-[#FAFAFA] border border-gray-200 flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-[#111111]" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#111111] mb-3">
              Quick Purchase
            </h3>
            <p className="text-[#6B7280] mb-8 flex-1 leading-relaxed">
              Choose your meals, select a plan, and place your order in minutes. Perfect for those who know what they want.
            </p>
            <Button size="lg" variant="outline" className="w-full">
              Browse Meals
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
