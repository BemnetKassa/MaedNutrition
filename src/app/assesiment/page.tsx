// app/page.tsx

import AssessmentCard from "@/components/assessment_card";

import {
  Dumbbell,
  TrendingDown,
  TrendingUp,
  Activity,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] px-6 py-10">
      
      <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-center gap-8">
        
        {/* CARD 1 */}
        <AssessmentCard
          step={1}
          totalSteps={3}
          title={
            <>
              What’s your
              <br />
              current <span className="text-[#2DBE3F]">weight</span>
              <br />
              and <span className="text-[#2DBE3F]">height?</span>
            </>
          }
          description="This helps us create a meal plan that’s right for your body."
          buttonText="Next"
          options={[
            {
              title: "72 KG",
            },
            {
              title: "178 CM",
            },
          ]}
        />

        {/* CARD 2 */}
        <AssessmentCard
          step={2}
          totalSteps={3}
          title={
            <>
              What’s your
              <br />
              <span className="text-[#2DBE3F]">exercise level?</span>
            </>
          }
          description="This helps us understand your activity and create a better plan."
          buttonText="Next"
          showBack
          options={[
            {
              title: "Beginner",
              subtitle: "Light exercise\n1-2 days per week",
              icon: <Activity className="h-8 w-8" />,
            },
            {
              title: "Intermediate",
              subtitle: "Moderate exercise\n2-4 days per week",
              icon: <Dumbbell className="h-8 w-8" />,
              active: true,
            },
            {
              title: "Advanced",
              subtitle: "Intense exercise\n5-7 days per week",
              icon: <Activity className="h-8 w-8" />,
            },
          ]}
        />

        {/* CARD 3 */}
        <AssessmentCard
          step={3}
          totalSteps={3}
          title={
            <>
              What’s your
              <br />
              main <span className="text-[#2DBE3F]">goal?</span>
            </>
          }
          description="This helps us personalize your meal plan for the best results."
          buttonText="Continue"
          showBack
          options={[
            {
              title: "Lose Weight",
              subtitle: "Burn fat and\nfeel lighter",
              icon: <TrendingDown className="h-8 w-8" />,
              active: true,
            },
            {
              title: "Gain Weight",
              subtitle: "Build muscle and\ngain strength",
              icon: <TrendingUp className="h-8 w-8" />,
            },
          ]}
        />
      </div>
    </main>
  );
}