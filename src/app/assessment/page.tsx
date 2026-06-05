"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import AssessmentCard from "../components/assessmentCard";
import { Navbar } from "../components/Navbar";
import { useLanguage } from "@/i18n/LanguageProvider";
import {
  Dumbbell,
  TrendingDown,
  TrendingUp,
  Activity,
  Camera,
  Upload,
} from "lucide-react";

const EXERCISE_KEYS = ["beginner", "intermediate", "advanced"] as const;
const GOAL_KEYS = ["loseWeight", "gainWeight"] as const;

type ExerciseKey = (typeof EXERCISE_KEYS)[number];
type GoalKey = (typeof GOAL_KEYS)[number];

const EXERCISE_API_EN: Record<ExerciseKey, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const GOAL_API_EN: Record<GoalKey, string> = {
  loseWeight: "Lose Weight",
  gainWeight: "Gain Weight",
};

const TOTAL_STEPS = 7;
const CBE_ACCOUNT = "1002003004005";

type OptionAnswer = {
  type: "option";
  index: number;
  key: ExerciseKey | GoalKey;
};

export default function AssessmentPage() {
  const { messages: m } = useLanguage();
  const a = m.assessment;
  const router = useRouter();

  const [index, setIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [answers, setAnswers] = useState<(Record<string, string> | OptionAnswer | { type: "file"; file: File } | { receipt?: File; transactionId?: string } | null)[]>([
    null,
    null,
    { type: "option", index: 1, key: "intermediate" },
    { type: "option", index: 0, key: "loseWeight" },
    null,
    null,
    null,
  ]);

  function setAnswerAt(i: number, val: (typeof answers)[number]) {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[i] = val;
      return copy;
    });
  }

  function handleNext() {
    setIndex((i) => Math.min(TOTAL_STEPS - 1, i + 1));
  }

  function handleBack() {
    setIndex((i) => Math.max(0, i - 1));
  }

  function handleFileUpload(stepIndex: number, file: File | null) {
    if (!file) return setAnswerAt(stepIndex, null);
    setAnswerAt(stepIndex, { type: "file", file });
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    try {
      const personal = answers[0] as Record<string, string> | null;
      const body = answers[1] as Record<string, string> | null;
      const exercise = answers[2] as OptionAnswer | null;
      const goal = answers[3] as OptionAnswer | null;
      const imageAnswer = answers[4] as { type: "file"; file: File } | null;
      const payment = answers[5] as { receipt?: File; transactionId?: string } | null;

      const buildFormData = () => {
        const fd = new FormData();
        if (personal?.name) fd.append("name", personal.name);
        if (personal?.phone) fd.append("phone", personal.phone);
        if (personal?.email) fd.append("email", personal.email);
        if (personal?.telegram) fd.append("telegram", personal.telegram);
        if (body?.weight) fd.append("weight", body.weight);
        if (body?.height) fd.append("height", body.height);
        if (exercise?.key && exercise.key in EXERCISE_API_EN) {
          fd.append("exerciseLevel", EXERCISE_API_EN[exercise.key as ExerciseKey]);
        }
        if (goal?.key && goal.key in GOAL_API_EN) {
          fd.append("goal", GOAL_API_EN[goal.key as GoalKey]);
        }
        if (imageAnswer?.file) fd.append("image", imageAnswer.file);
        if (payment?.receipt) fd.append("receipt", payment.receipt);
        if (payment?.transactionId) fd.append("transactionId", payment.transactionId);
        return fd;
      };

      try {
        await fetch("/api/telegram", {
          method: "POST",
          body: buildFormData(),
        });
      } catch (telegramError) {
        console.error("Telegram send failed:", telegramError);
      }

      localStorage.removeItem("assessmentResult");
      router.push("/result");
    } catch (err) {
      console.error(err);
      alert(a.errors.submitFailed);
    } finally {
      setIsSubmitting(false);
    }
  }

  const cards = useMemo(() => {
    const s = a.steps;
    const highlight = "text-[#3FAE49]";

    const personalFields = (
      <div className="flex flex-col gap-6 w-full mt-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">{s.personal.fullName}</label>
          <input
            type="text"
            placeholder={s.personal.namePlaceholder}
            className="w-full px-5 py-4 rounded-xl border border-[#ECECEC] focus:outline-none focus:ring-2 focus:ring-[#00A619] bg-[#FAFAFA] text-lg transition-all"
            onChange={(e) => {
              setAnswers((prev) => {
                const copy = [...prev];
                const val = (copy[0] as Record<string, string>) || {};
                copy[0] = { ...val, name: e.target.value };
                return copy;
              });
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">{s.personal.phone}</label>
          <input
            type="tel"
            placeholder={s.personal.phonePlaceholder}
            className="w-full px-5 py-4 rounded-xl border border-[#ECECEC] focus:outline-none focus:ring-2 focus:ring-[#00A619] bg-[#FAFAFA] text-lg transition-all"
            onChange={(e) => {
              setAnswers((prev) => {
                const copy = [...prev];
                const val = (copy[0] as Record<string, string>) || {};
                copy[0] = { ...val, phone: e.target.value };
                return copy;
              });
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">{s.personal.email}</label>
          <input
            type="email"
            placeholder={s.personal.emailPlaceholder}
            className="w-full px-5 py-4 rounded-xl border border-[#ECECEC] focus:outline-none focus:ring-2 focus:ring-[#00A619] bg-[#FAFAFA] text-lg transition-all"
            onChange={(e) => {
              setAnswers((prev) => {
                const copy = [...prev];
                const val = (copy[0] as Record<string, string>) || {};
                copy[0] = { ...val, email: e.target.value };
                return copy;
              });
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">{s.personal.telegram}</label>
          <input
            type="text"
            placeholder={s.personal.telegramPlaceholder}
            className="w-full px-5 py-4 rounded-xl border border-[#ECECEC] focus:outline-none focus:ring-2 focus:ring-[#00A619] bg-[#FAFAFA] text-lg transition-all"
            onChange={(e) => {
              setAnswers((prev) => {
                const copy = [...prev];
                const val = (copy[0] as Record<string, string>) || {};
                copy[0] = { ...val, telegram: e.target.value };
                return copy;
              });
            }}
          />
        </div>
      </div>
    );

    const bodyFields = (
      <div className="flex flex-col gap-6 w-full mt-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">{s.body.weight}</label>
          <input
            type="number"
            placeholder={s.body.weightPlaceholder}
            className="w-full px-5 py-4 rounded-xl border border-[#ECECEC] focus:outline-none focus:ring-2 focus:ring-[#00A619] bg-[#FAFAFA] text-lg transition-all"
            onChange={(e) => {
              setAnswers((prev) => {
                const copy = [...prev];
                const val = (copy[1] as Record<string, string>) || {};
                copy[1] = { ...val, weight: e.target.value };
                return copy;
              });
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">{s.body.height}</label>
          <input
            type="number"
            placeholder={s.body.heightPlaceholder}
            className="w-full px-5 py-4 rounded-xl border border-[#ECECEC] focus:outline-none focus:ring-2 focus:ring-[#00A619] bg-[#FAFAFA] text-lg transition-all"
            onChange={(e) => {
              setAnswers((prev) => {
                const copy = [...prev];
                const val = (copy[1] as Record<string, string>) || {};
                copy[1] = { ...val, height: e.target.value };
                return copy;
              });
            }}
          />
        </div>
      </div>
    );

    const photoAnswer = answers[4] as { type: "file"; file: File } | null;
    const hasPhoto = photoAnswer?.type === "file" && photoAnswer.file;

    const photoStep = (
      <div className="w-full">
        <div className="overflow-hidden rounded-[28px] border-2 border-[#00A619]">
          <div className="relative h-64 md:h-96 lg:h-110 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
            {hasPhoto ? (
              <img
                src={URL.createObjectURL(photoAnswer.file)}
                alt={s.photo.uploadedAlt}
                className="object-cover w-full h-full"
              />
            ) : (
              <>
                <Camera className="h-16 w-16 text-gray-300" />
                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 border-l-2 border-dashed border-[#00A619]" />
                <div className="absolute left-1/2 top-[46%] h-0.5 w-[60%] -translate-x-1/2 border-t-2 border-dashed border-[#00A619]" />
                <div className="absolute left-1/2 top-[72%] h-0.5 w-[60%] -translate-x-1/2 border-t-2 border-dashed border-[#00A619]" />
              </>
            )}
          </div>
        </div>
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
          <label className="flex h-14 md:h-16 flex-1 items-center justify-center gap-3 rounded-2xl bg-[#00A619] text-base md:text-[20px] font-semibold text-white transition hover:bg-[#008c15] shadow-sm cursor-pointer">
            <Camera className="h-5 w-5 md:h-6 md:w-6" />
            {hasPhoto ? s.photo.retakePhoto : s.photo.takePhoto}
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
          <label className="flex h-14 md:h-16 flex-1 items-center justify-center gap-3 rounded-2xl border border-[#E5E5E5] bg-white text-base md:text-[20px] font-semibold text-[#00A619] transition hover:bg-[#F3FBF4] cursor-pointer">
            <Upload className="h-5 w-5 md:h-6 md:w-6" />
            {hasPhoto ? s.photo.changeGallery : s.photo.gallery}
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
    );

    const paymentAnswer = answers[5] as { receipt?: File; transactionId?: string } | null;

    const paymentStep = (
      <div className="w-full">
        <div className="rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] p-5">
          <p className="text-sm font-semibold text-gray-700">{s.payment.cbeAccount}</p>
          <p className="mt-2 text-xl font-black text-[#111111]">{CBE_ACCOUNT}</p>
          <p className="mt-2 text-sm text-gray-600">{s.payment.accountName}</p>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">{s.payment.transactionId}</label>
          <input
            type="text"
            placeholder={s.payment.transactionPlaceholder}
            className="w-full px-5 py-4 rounded-xl border border-[#ECECEC] focus:outline-none focus:ring-2 focus:ring-[#00A619] bg-[#FAFAFA] text-lg transition-all"
            onChange={(e) => {
              setAnswers((prev) => {
                const copy = [...prev];
                const val = (copy[5] as { receipt?: File; transactionId?: string }) || {};
                copy[5] = { ...val, transactionId: e.target.value };
                return copy;
              });
            }}
          />
        </div>
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">{s.payment.uploadReceipt}</label>
          <label className="flex h-14 md:h-16 w-full items-center justify-center gap-3 rounded-2xl border border-[#E5E5E5] bg-white text-base md:text-[20px] font-semibold text-[#00A619] transition hover:bg-[#F3FBF4] cursor-pointer">
            <Upload className="h-5 w-5 md:h-6 md:w-6" />
            {paymentAnswer?.receipt ? s.payment.receiptUploaded : s.payment.uploadReceiptBtn}
            <input
              type="file"
              accept="image/*,application/pdf"
              className="hidden"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setAnswers((prev) => {
                    const copy = [...prev];
                    const val = (copy[5] as { receipt?: File; transactionId?: string }) || {};
                    copy[5] = { ...val, receipt: e.target.files?.[0] };
                    return copy;
                  });
                }
              }}
            />
          </label>
        </div>
      </div>
    );

    const exerciseIcons = [
      <Activity key="b" className="h-6 w-6 md:h-8 md:w-8" />,
      <Dumbbell key="i" className="h-6 w-6 md:h-8 md:w-8" />,
      <Activity key="a" className="h-6 w-6 md:h-8 md:w-8" />,
    ];

    return [
      {
        title: (
          <>
            {s.personal.titleBefore}
            <br className="hidden md:block" />
            <span className={highlight}>{s.personal.titleHighlight}</span>
          </>
        ),
        description: s.personal.description,
        buttonText: a.buttons.next,
        children: personalFields,
      },
      {
        title: (
          <>
            {s.body.titleBefore}
            <br className="hidden md:block" />
            <span className={highlight}>{s.body.weightHighlight}</span>
            <br className="hidden md:block" />
            {s.body.andLabel}{" "}
            <span className={highlight}>{s.body.heightHighlight}</span>
          </>
        ),
        description: s.body.description,
        buttonText: a.buttons.next,
        children: bodyFields,
      },
      {
        title: (
          <>
            {s.exercise.titleBefore}
            <br className="hidden md:block" />
            <span className={highlight}>{s.exercise.titleHighlight}</span>
          </>
        ),
        description: s.exercise.description,
        buttonText: a.buttons.next,
        options: EXERCISE_KEYS.map((key, i) => ({
          title: s.exercise.options[key].title,
          subtitle: s.exercise.options[key].subtitle,
          icon: exerciseIcons[i],
        })),
      },
      {
        title: (
          <>
            {s.goal.titleBefore}
            <br />
            <span className={highlight}>{s.goal.titleHighlight}</span>
          </>
        ),
        description: s.goal.description,
        buttonText: a.buttons.continue,
        options: GOAL_KEYS.map((key, i) => ({
          title: s.goal.options[key].title,
          subtitle: s.goal.options[key].subtitle,
          icon:
            i === 0 ? (
              <TrendingDown className="h-6 w-6 md:h-8 md:w-8" />
            ) : (
              <TrendingUp className="h-6 w-6 md:h-8 md:w-8" />
            ),
        })),
      },
      {
        title: (
          <>
            {s.photo.titleBefore}
            <br className="hidden md:block" />
            {s.photo.titleMid}{" "}
            <span className={highlight}>{s.photo.titleHighlight}</span>
          </>
        ),
        description: s.photo.description,
        buttonText: a.buttons.continue,
        children: photoStep,
      },
      {
        title: (
          <>
            {s.payment.titleBefore}
            <br className="hidden md:block" />
            <span className={highlight}>{s.payment.titleHighlight}</span>
          </>
        ),
        description: s.payment.description,
        buttonText: a.buttons.continue,
        children: paymentStep,
      },
      {
        title: (
          <>
            {s.finish.titleBefore}
            <br className="hidden md:block" />
            <span className={highlight}>{s.finish.titleHighlight}</span>
          </>
        ),
        description: s.finish.description,
        buttonText: a.buttons.finish,
      },
    ];
  }, [a, answers]);

  const current = cards[index];
  const optionAnswer = answers[index] as OptionAnswer | null;

  const mappedOptions = current.options?.map((opt, i) => ({
    ...opt,
    active: optionAnswer?.type === "option" && optionAnswer.index === i,
  }));

  const canProceed =
    (answers[index] != null || index === 0 || index === TOTAL_STEPS - 1) && !isSubmitting;

  const buttonText =
    isSubmitting && index === TOTAL_STEPS - 1 ? a.analyzing : current.buttonText;

  return (
    <main className="min-h-screen bg-[#fff8ee] pt-28 pb-10 px-4 md:px-6">
      <Navbar />
      <div className="mx-auto flex max-w-7xl items-start md:items-center justify-center pt-8">
        <AssessmentCard
          step={index + 1}
          totalSteps={cards.length}
          title={current.title}
          description={current.description}
          options={mappedOptions}
          buttonText={buttonText}
          children={current.children}
          canProceed={canProceed}
          showBack={index > 0 && !isSubmitting}
          onNext={() => {
            if (index === TOTAL_STEPS - 1) {
              handleSubmit();
            } else {
              handleNext();
            }
          }}
          onBack={handleBack}
          onOptionSelect={(optIndex) => {
            const keys = index === 2 ? EXERCISE_KEYS : GOAL_KEYS;
            setAnswerAt(index, {
              type: "option",
              index: optIndex,
              key: keys[optIndex],
            });
          }}
        />
      </div>
    </main>
  );
}
