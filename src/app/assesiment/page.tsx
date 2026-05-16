// app/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import AssessmentCard from "@/components/assessment_card";

import {
  Dumbbell,
  TrendingDown,
  TrendingUp,
  Activity,
  Camera,
  Upload,
} from "lucide-react";

export default function HomePage() {
  // base card data (static content)
  const baseCards = [
    {
      title: (
        <>
          What’s your
          <br />
          current <span className="text-[#2DBE3F]">weight</span>
          <br />
          and <span className="text-[#2DBE3F]">height?</span>
        </>
      ),
      description: "This helps us create a meal plan that’s right for your body.",
      buttonText: "Next",
      options: [
        { title: "72 KG" },
        { title: "178 CM" },
      ],
    },
    {
      title: (
        <>
          What’s your
          <br />
          <span className="text-[#2DBE3F]">exercise level?</span>
        </>
      ),
      description: "This helps us understand your activity and create a better plan.",
      buttonText: "Next",
      options: [
        { title: "Beginner", subtitle: "Light exercise\n1-2 days per week", icon: <Activity className="h-8 w-8" /> },
        { title: "Intermediate", subtitle: "Moderate exercise\n2-4 days per week", icon: <Dumbbell className="h-8 w-8" />, active: true },
        { title: "Advanced", subtitle: "Intense exercise\n5-7 days per week", icon: <Activity className="h-8 w-8" /> },
      ],
    },
    {
      title: (
        <>
          What’s your
          <br />
          main <span className="text-[#2DBE3F]">goal?</span>
        </>
      ),
      description: "This helps us personalize your meal plan for the best results.",
      buttonText: "Continue",
      options: [
        { title: "Lose Weight", subtitle: "Burn fat and\nfeel lighter", icon: <TrendingDown className="h-8 w-8" />, active: true },
        { title: "Gain Weight", subtitle: "Build muscle and\ngain strength", icon: <TrendingUp className="h-8 w-8" /> },
      ],
    },
    {
      title: (
        <>
          Let’s analyze your body
          <br />
          with a {" "}
          <span className="text-[#2DBE3F]">well-lit photo</span>
        </>
      ),
      description: "Take a clear front-facing photo of your body. This helps our AI create a personalized plan for you.",
      buttonText: "Continue",
      // use children to render custom upload UI
      children: (
        <>
          {/* IMAGE */}
          <div className="overflow-hidden rounded-[28px] border-2 border-[#2DBE3F]">
            <div className="relative h-130 w-full">
              <Image src="/body-photo.png" alt="Body Analysis" fill className="object-cover" />

              {/* CENTER VERTICAL LINE */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 border-l-2 border-dashed border-[#2DBE3F]" />

              {/* HORIZONTAL LINE 1 */}
              <div className="absolute left-1/2 top-[46%] h-0.5 w-[60%] -translate-x-1/2 border-t-2 border-dashed border-[#2DBE3F]" />

              {/* HORIZONTAL LINE 2 */}
              <div className="absolute left-1/2 top-[72%] h-0.5 w-[60%] -translate-x-1/2 border-t-2 border-dashed border-[#2DBE3F]" />
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex flex-col gap-4">
            <button className="flex h-16 items-center justify-center gap-3 rounded-2xl bg-[#2DBE3F] text-[20px] font-semibold text-white">
              <Camera className="h-6 w-6" />
              Take a Photo
            </button>

            <button className="flex h-16 items-center justify-center gap-3 rounded-2xl border border-[#E5E5E5] bg-white text-[20px] font-semibold text-[#2DBE3F]">
              <Upload className="h-6 w-6" />
              Upload from Gallery
            </button>
          </div>
        </>
      ),
    },
    {
      title: (
        <>
          You’re all set
          <br />
          <span className="text-[#2DBE3F]">Ready to get your plan</span>
        </>
      ),
      description: "We’ll analyze your info and generate a personalized meal plan.",
      buttonText: "Finish",
    },
  ];

  const [index, setIndex] = useState(0);

  // initialize answers from any pre-activated options
  const initialAnswers = baseCards.map((c) => {
    if (c.options) {
      const activeIndex = (c.options as any).findIndex((o: any) => o.active);
      return activeIndex >= 0 ? { type: "option", index: activeIndex, value: c.options[activeIndex] } : null;
    }
    return null;
  });

  const [answers, setAnswers] = useState<any[]>(initialAnswers);

  function setAnswerAt(i: number, val: any) {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[i] = val;
      return copy;
    });
  }

  function handleNext() {
    setIndex((i) => Math.min(totalSteps - 1, i + 1));
  }

  function handleBack() {
    setIndex((i) => Math.max(0, i - 1));
  }

  const totalSteps = 5;

  // file upload handler for card 4
  function handleFileUpload(stepIndex: number, file: File | null) {
    if (!file) return setAnswerAt(stepIndex, null);
    setAnswerAt(stepIndex, { type: "file", file });
  }

  // build final cards array including child UI with handlers
  const cards = [
    ...baseCards,
    {
      title: (
        <>
          Let’s analyze your body
          <br />
          with a {" "}
          <span className="text-[#2DBE3F]">well-lit photo</span>
        </>
      ),
      description: "Take a clear front-facing photo of your body. This helps our AI create a personalized plan for you.",
      buttonText: "Continue",
      children: (
        <>
          {/* IMAGE */}
          <div className="overflow-hidden rounded-[28px] border-2 border-[#2DBE3F]">
            <div className="relative h-130 w-full">
              <Image src="/body-photo.png" alt="Body Analysis" fill className="object-cover" />

              {/* CENTER VERTICAL LINE */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 border-l-2 border-dashed border-[#2DBE3F]" />

              {/* HORIZONTAL LINE 1 */}
              <div className="absolute left-1/2 top-[46%] h-0.5 w-[60%] -translate-x-1/2 border-t-2 border-dashed border-[#2DBE3F]" />

              {/* HORIZONTAL LINE 2 */}
              <div className="absolute left-1/2 top-[72%] h-0.5 w-[60%] -translate-x-1/2 border-t-2 border-dashed border-[#2DBE3F]" />
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex flex-col gap-4">
            <label className="flex h-16 cursor-pointer items-center justify-center gap-3 rounded-2xl bg-[#2DBE3F] text-[20px] font-semibold text-white">
              <Camera className="h-6 w-6" />
              <input
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={(e) => handleFileUpload(3, e.target.files ? e.target.files[0] : null)}
              />
              Take a Photo
            </label>

            <label className="flex h-16 cursor-pointer items-center justify-center gap-3 rounded-2xl border border-[#E5E5E5] bg-white text-[20px] font-semibold text-[#2DBE3F]">
              <Upload className="h-6 w-6" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileUpload(3, e.target.files ? e.target.files[0] : null)}
              />
              Upload from Gallery
            </label>
          </div>
        </>
      ),
    },
    {
      title: (
        <>
          You’re all set
          <br />
          <span className="text-[#2DBE3F]">Ready to get your plan</span>
        </>
      ),
      description: "We’ll analyze your info and generate a personalized meal plan.",
      buttonText: "Finish",
    },
  ];

  // determine if current step can proceed: require an answer for options or file steps
  const canProceed = answers[index] != null;

  return (
    <main className="min-h-screen bg-[#F5F5F5] px-6 py-10">
      <div className="mx-auto flex max-w-375 items-start md:items-center justify-center">
        <AssessmentCard
          step={index + 1}
          totalSteps={cards.length}
          title={cards[index].title}
          description={cards[index].description}
          options={cards[index].options}
          buttonText={cards[index].buttonText}
          children={cards[index].children}
          canProceed={canProceed}
          showBack={index > 0}
          onNext={() => {
            // if last step, you might submit here
            handleNext();
          }}
          onBack={handleBack}
          onOptionSelect={(optIndex, opt) => setAnswerAt(index, { type: "option", index: optIndex, value: opt })}
        />
      </div>
    </main>
  );
}