// app/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import AssessmentCard from "../components/assessmentCard";
import { Navbar } from "../components/Navbar";

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
          <br className="hidden md:block" />
          current <span className="text-[#3FAE49]">weight</span>
          <br className="hidden md:block" />
          and <span className="text-[#3FAE49]">height?</span>
        </>
      ),
      description: "This helps us create a meal plan that’s right for your body.",
      buttonText: "Next",
      children: (
        <div className="flex flex-col gap-6 w-full mt-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Weight (kg)</label>
            <input 
              type="number" 
              placeholder="e.g. 72" 
              className="w-full px-5 py-4 rounded-xl border border-[#ECECEC] focus:outline-none focus:ring-2 focus:ring-[#3FAE49] bg-[#FAFAFA] text-lg transition-all"
              onChange={(e) => {
                 setAnswers((prev) => {
                   const copy = [...prev];
                   const val = copy[0] || {};
                   copy[0] = { ...val, weight: e.target.value };
                   return copy;
                 })
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Height (cm)</label>
            <input 
              type="number" 
              placeholder="e.g. 178" 
              className="w-full px-5 py-4 rounded-xl border border-[#ECECEC] focus:outline-none focus:ring-2 focus:ring-[#3FAE49] bg-[#FAFAFA] text-lg transition-all"
              onChange={(e) => {
                 setAnswers((prev) => {
                   const copy = [...prev];
                   const val = copy[0] || {};
                   copy[0] = { ...val, height: e.target.value };
                   return copy;
                 })
              }}
            />
          </div>
        </div>
      )
    },
    {
      title: (
        <>
          What’s your
          <br className="hidden md:block" />
          <span className="text-[#3FAE49]">exercise level?</span>
        </>
      ),
      description: "This helps us understand your activity and create a better plan.",
      buttonText: "Next",
      options: [
        { title: "Beginner", subtitle: "Light exercise 1-2 days per week", icon: <Activity className="h-6 w-6 md:h-8 md:w-8" /> },
        { title: "Intermediate", subtitle: "Moderate exercise 2-4 days per week", icon: <Dumbbell className="h-6 w-6 md:h-8 md:w-8" />, active: true },
        { title: "Advanced", subtitle: "Intense exercise 5-7 days per week", icon: <Activity className="h-6 w-6 md:h-8 md:w-8" /> },
      ],
    },
    {
      title: (
        <>
          What’s your
          <br />
          main <span className="text-[#3FAE49]">goal?</span>
        </>
      ),
      description: "This helps us personalize your meal plan for the best results.",
      buttonText: "Continue",
      options: [
        { title: "Lose Weight", subtitle: "Burn fat and feel lighter", icon: <TrendingDown className="h-6 w-6 md:h-8 md:w-8" />, active: true },
        { title: "Gain Weight", subtitle: "Build muscle and gain strength", icon: <TrendingUp className="h-6 w-6 md:h-8 md:w-8" /> },
      ],
    },
    {
      title: (
        <>
          Let’s analyze your body
          <br className="hidden md:block" />
          with a {" "}
          <span className="text-[#3FAE49]">well-lit photo</span>
        </>
      ),
      description: "Take a clear front-facing photo of your body. This helps our AI create a personalized plan for you.",
      buttonText: "Continue",
      // use children to render custom upload UI
      children: (
        <div className="w-full">
          {/* IMAGE */}
          <div className="overflow-hidden rounded-[28px] border-2 border-[#3FAE49]">
            <div className="relative h-64 md:h-96 lg:h-110 w-full bg-gray-100 flex items-center justify-center">
              <Camera className="h-16 w-16 text-gray-300" />

              {/* CENTER VERTICAL LINE */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 border-l-2 border-dashed border-[#3FAE49]" />

              {/* HORIZONTAL LINE 1 */}
              <div className="absolute left-1/2 top-[46%] h-0.5 w-[60%] -translate-x-1/2 border-t-2 border-dashed border-[#3FAE49]" />

              {/* HORIZONTAL LINE 2 */}
              <div className="absolute left-1/2 top-[72%] h-0.5 w-[60%] -translate-x-1/2 border-t-2 border-dashed border-[#3FAE49]" />
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
            <button className="flex h-14 md:h-16 flex-1 items-center justify-center gap-3 rounded-2xl bg-[#3FAE49] text-base md:text-[20px] font-semibold text-white transition hover:bg-[#36963f] shadow-sm">
              <Camera className="h-5 w-5 md:h-6 md:w-6" />
              Take a Photo
            </button>

            <button className="flex h-14 md:h-16 flex-1 items-center justify-center gap-3 rounded-2xl border border-[#E5E5E5] bg-white text-base md:text-[20px] font-semibold text-[#3FAE49] transition hover:bg-[#F3FBF4]">
              <Upload className="h-5 w-5 md:h-6 md:w-6" />
              Gallery
            </button>
          </div>
        </div>
      ),
    },
    {
      title: (
        <>
          You’re all set
          <br className="hidden md:block" />
          <span className="text-[#3FAE49]">Ready to get your plan?</span>
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
  const cards = baseCards;

  // determine if current step can proceed: require an answer for options or file steps
  const canProceed = answers[index] != null || index === 0;

  return (

    <main className="min-h-screen bg-[#FAFAFA] pt-28 pb-10 px-4 md:px-6">
        <Navbar />
      <div className="mx-auto flex max-w-7xl items-start md:items-center justify-center pt-8">
        <AssessmentCard
          step={index + 1}
          totalSteps={cards.length}
          title={cards[index].title}
          description={cards[index].description}
          options={cards[index].options?.map((opt: any, i: number) => ({
            ...opt,
            active: answers[index]?.type === "option" && answers[index]?.index === i
          }))}
          buttonText={cards[index].buttonText}
          children={cards[index].children}
          canProceed={canProceed}
          showBack={index > 0}
          onNext={() => {
            if (index === totalSteps - 1) {
              window.location.href = "/result";
            } else {
               handleNext();
            }
          }}
          onBack={handleBack}
          onOptionSelect={(optIndex, opt) => setAnswerAt(index, { type: "option", index: optIndex, value: opt })}
        />
      </div>
    </main>
  );
}