// app/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
          Let’s start with your
          <br className="hidden md:block" />
          <span className="text-[#3FAE49]">personal info</span>
        </>
      ),
      description: "Tell us who you are so we can personalize your plan.",
      buttonText: "Next",
      children: (
        <div className="flex flex-col gap-6 w-full mt-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full name</label>
            <input
              type="text"
              placeholder="e.g. Hana Tesfaye"
              className="w-full px-5 py-4 rounded-xl border border-[#ECECEC] focus:outline-none focus:ring-2 focus:ring-[#3FAE49] bg-[#FAFAFA] text-lg transition-all"
              onChange={(e) => {
                setAnswers((prev) => {
                  const copy = [...prev];
                  const val = copy[0] || {};
                  copy[0] = { ...val, name: e.target.value };
                  return copy;
                });
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone number</label>
            <input
              type="tel"
              placeholder="e.g. +251 9XX XXX XXX"
              className="w-full px-5 py-4 rounded-xl border border-[#ECECEC] focus:outline-none focus:ring-2 focus:ring-[#3FAE49] bg-[#FAFAFA] text-lg transition-all"
              onChange={(e) => {
                setAnswers((prev) => {
                  const copy = [...prev];
                  const val = copy[0] || {};
                  copy[0] = { ...val, phone: e.target.value };
                  return copy;
                });
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email (optional)</label>
            <input
              type="email"
              placeholder="e.g. hana@gmail.com"
              className="w-full px-5 py-4 rounded-xl border border-[#ECECEC] focus:outline-none focus:ring-2 focus:ring-[#3FAE49] bg-[#FAFAFA] text-lg transition-all"
              onChange={(e) => {
                setAnswers((prev) => {
                  const copy = [...prev];
                  const val = copy[0] || {};
                  copy[0] = { ...val, email: e.target.value };
                  return copy;
                });
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Telegram username (optional)</label>
            <input
              type="text"
              placeholder="e.g. @sofi_user"
              className="w-full px-5 py-4 rounded-xl border border-[#ECECEC] focus:outline-none focus:ring-2 focus:ring-[#3FAE49] bg-[#FAFAFA] text-lg transition-all"
              onChange={(e) => {
                setAnswers((prev) => {
                  const copy = [...prev];
                  const val = copy[0] || {};
                  copy[0] = { ...val, telegram: e.target.value };
                  return copy;
                });
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
                   const val = copy[1] || {};
                   copy[1] = { ...val, weight: e.target.value };
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
                   const val = copy[1] || {};
                   copy[1] = { ...val, height: e.target.value };
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
      description: "Take a clear front-facing photo of your body. This helps our AI analyze your assessment for the nutritionist.",
      buttonText: "Continue",
      // children injected later dynamically
      children: null,
    },
    {
      title: (
        <>
          Payment step
          <br className="hidden md:block" />
          upload your <span className="text-[#3FAE49]">receipt</span>
        </>
      ),
      description: "Transfer the payment, then upload your receipt so we can confirm your plan.",
      buttonText: "Continue",
      // children injected later dynamically
      children: null,
    },
    {
      title: (
        <>
          You’re all set
          <br className="hidden md:block" />
          <span className="text-[#3FAE49]">Ready to get your plan?</span>
        </>
      ),
      description: "We’ll analyze your info for our nutritionist to prepare your plan.",
      buttonText: "Finish",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

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

  const totalSteps = 7;

  async function handleSubmit() {
    setIsSubmitting(true);
    try {
      const name = answers[0]?.name;
      const phone = answers[0]?.phone;
      const email = answers[0]?.email;
      const telegram = answers[0]?.telegram;
      const weight = answers[1]?.weight;
      const height = answers[1]?.height;
      const exerciseLevel = answers[2]?.value?.title || "";
      const goal = answers[3]?.value?.title || "";
      const image = answers[4]?.file;
      const receipt = answers[5]?.receipt;
      const transactionId = answers[5]?.transactionId;

      const buildFormData = () => {
        const fd = new FormData();
        if (name) fd.append("name", name);
        if (phone) fd.append("phone", phone);
        if (email) fd.append("email", email);
        if (telegram) fd.append("telegram", telegram);
        if (weight) fd.append("weight", weight);
        if (height) fd.append("height", height);
        if (exerciseLevel) fd.append("exerciseLevel", exerciseLevel);
        if (goal) fd.append("goal", goal);
        if (image) fd.append("image", image);
        if (receipt) fd.append("receipt", receipt);
        if (transactionId) fd.append("transactionId", transactionId);
        return fd;
      };

      // Send to Telegram, but don't block the AI analysis if it fails.
      try {
        await fetch("/api/telegram", {
          method: "POST",
          body: buildFormData(),
        });
      } catch (telegramError) {
        console.error("Telegram send failed:", telegramError);
      }

      // AI analysis is paused for now; move to the final page after payment upload.
      localStorage.removeItem("assessmentResult");
      router.push("/result");
    } catch (err) {
      console.error(err);
      alert("An error occurred while analyzing the data. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // file upload handler for card 4
  function handleFileUpload(stepIndex: number, file: File | null) {
    if (!file) return setAnswerAt(stepIndex, null);
    setAnswerAt(stepIndex, { type: "file", file });
  }

  // build final cards array including child UI with handlers
  const cards = baseCards.map((card, i) => {
    if (i === 4) {
      return {
        ...card,
        children: (
          <div className="w-full">
            {/* IMAGE */}
            <div className="overflow-hidden rounded-[28px] border-2 border-[#3FAE49]">
              <div className="relative h-64 md:h-96 lg:h-110 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                {answers[4]?.type === "file" && answers[4]?.file ? (
                  <img 
                    src={URL.createObjectURL(answers[4].file)} 
                    alt="Uploaded User Photo" 
                    className="object-cover w-full h-full" 
                  />
                ) : (
                  <>
                    <Camera className="h-16 w-16 text-gray-300" />
                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 border-l-2 border-dashed border-[#3FAE49]" />
                    <div className="absolute left-1/2 top-[46%] h-0.5 w-[60%] -translate-x-1/2 border-t-2 border-dashed border-[#3FAE49]" />
                    <div className="absolute left-1/2 top-[72%] h-0.5 w-[60%] -translate-x-1/2 border-t-2 border-dashed border-[#3FAE49]" />
                  </>
                )}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
              <label className="flex h-14 md:h-16 flex-1 items-center justify-center gap-3 rounded-2xl bg-[#3FAE49] text-base md:text-[20px] font-semibold text-white transition hover:bg-[#36963f] shadow-sm cursor-pointer">
                <Camera className="h-5 w-5 md:h-6 md:w-6" />
                {answers[4]?.type === "file" ? "Retake Photo" : "Take a Photo"}
                <input 
                  type="file" 
                  accept="image/*" 
                  capture="environment" 
                  className="hidden" 
                  onChange={(e) => {
                    if (e.target.files?.[0]) handleFileUpload(4, e.target.files[0]);
                  }} 
                />
              </label>

              <label className="flex h-14 md:h-16 flex-1 items-center justify-center gap-3 rounded-2xl border border-[#E5E5E5] bg-white text-base md:text-[20px] font-semibold text-[#3FAE49] transition hover:bg-[#F3FBF4] cursor-pointer">
                <Upload className="h-5 w-5 md:h-6 md:w-6" />
                {answers[4]?.type === "file" ? "Change Gallery" : "Gallery"}
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={(e) => {
                    if (e.target.files?.[0]) handleFileUpload(4, e.target.files[0]);
                  }} 
                />
              </label>
            </div>
          </div>
        )
      };
    }

    if (i === 5) {
      return {
        ...card,
        children: (
          <div className="w-full">
            <div className="rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] p-5">
              <p className="text-sm font-semibold text-gray-700">CBE Account Number</p>
              <p className="mt-2 text-xl font-black text-[#111111]">1002003004005</p>
              <p className="mt-2 text-sm text-gray-600">Account Name: Sofi Circle Diet</p>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Transaction ID (optional)</label>
              <input
                type="text"
                placeholder="e.g. CBE-7F3A92"
                className="w-full px-5 py-4 rounded-xl border border-[#ECECEC] focus:outline-none focus:ring-2 focus:ring-[#3FAE49] bg-[#FAFAFA] text-lg transition-all"
                onChange={(e) => {
                  setAnswers((prev) => {
                    const copy = [...prev];
                    const val = copy[5] || {};
                    copy[5] = { ...val, transactionId: e.target.value };
                    return copy;
                  });
                }}
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Upload payment receipt</label>
              <label className="flex h-14 md:h-16 w-full items-center justify-center gap-3 rounded-2xl border border-[#E5E5E5] bg-white text-base md:text-[20px] font-semibold text-[#3FAE49] transition hover:bg-[#F3FBF4] cursor-pointer">
                <Upload className="h-5 w-5 md:h-6 md:w-6" />
                {answers[5]?.receipt ? "Receipt uploaded" : "Upload receipt"}
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      setAnswers((prev) => {
                        const copy = [...prev];
                        const val = copy[5] || {};
                        copy[5] = { ...val, receipt: e.target.files?.[0] };
                        return copy;
                      });
                    }
                  }}
                />
              </label>
            </div>
          </div>
        )
      };
    }

    return card;
  });

  // determine if current step can proceed: allow the final submit step
  const canProceed =
    (answers[index] != null || index === 0 || index === totalSteps - 1) &&
    !isSubmitting;

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
          buttonText={isSubmitting && index === totalSteps - 1 ? "Analyzing..." : cards[index].buttonText}
          children={cards[index].children}
          canProceed={canProceed}
          showBack={index > 0 && !isSubmitting}
          onNext={() => {
            if (index === totalSteps - 1) {
              handleSubmit();
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