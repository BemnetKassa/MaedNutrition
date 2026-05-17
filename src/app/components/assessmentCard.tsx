// components/assessment-card.tsx

"use client";

import React, { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Option {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  active?: boolean;
}

interface AssessmentCardProps {
  step: number;
  totalSteps: number;
  title: ReactNode;
  description: string;
  options?: Option[];
  buttonText: string;
  showBack?: boolean;
  onNext?: () => void;
  onBack?: () => void;
  onOptionSelect?: (index: number, option: Option) => void;
  children?: ReactNode;
  canProceed?: boolean;
}

export default function AssessmentCard({
  step,
  totalSteps,
  title,
  description,
  options,
  buttonText,
  showBack,
  onNext,
  onBack,
  onOptionSelect,
  children,
  canProceed,
}: AssessmentCardProps) {
  const [localOptions, setLocalOptions] = useState<Option[] | undefined>(options);

  useEffect(() => {
    setLocalOptions(options);
  }, [options]);

  function handleSelect(index: number) {
    if (!localOptions) return;
    const updated = localOptions.map((o, i) => ({ ...o, active: i === index }));
    setLocalOptions(updated);
    onOptionSelect?.(index, updated[index]);
  }

  return (
    <div className="relative flex min-h-190 w-full max-w-97.5 flex-col overflow-visible rounded-4xl border border-[#ECECEC] bg-white p-8 shadow-sm">
      
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[42px] font-black leading-none tracking-tight text-[#2DBE3F]">
            MÁED
          </h1>

          <p className="-mt-1 text-[10px] font-bold tracking-[0.25em] text-[#111111]">
            NUTRITION
          </p>
        </div>

        <span className="text-[18px] font-semibold text-[#2DBE3F]">
          Step {step} of {totalSteps}
        </span>
      </div>

      {/* Progress */}
      <div className="mt-8 flex gap-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: i < step ? 1 : 0.9 }}
            transition={{ duration: 0.25, delay: i * 0.03 }}
            style={{ transformOrigin: "left" }}
            className={clsx("h-1.5 flex-1 rounded-full", i < step ? "bg-[#2DBE3F]" : "bg-[#E8E8E8]")}
          />
        ))}
      </div>

      {/* Title */}
      <div className="mt-10">
        <h2 className="text-[50px] font-black leading-[1.05] tracking-tight text-[#111111]">
          {title}
        </h2>

        <p className="mt-5 text-[21px] leading-relaxed text-[#6B7280]">
          {description}
        </p>
      </div>

      {/* Options / Custom content */}
      <div className="mt-10 flex flex-1 flex-col gap-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            {children ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                {children}
              </motion.div>
            ) : (
              localOptions?.map((option, index) => (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() => handleSelect(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={clsx(
                    "flex items-center justify-between rounded-3xl border p-5 transition-all text-left",
                    option.active ? "border-[#2DBE3F] bg-[#F5FFF6]" : "border-[#ECECEC] bg-white"
                  )}
                >
                  <div className="flex items-center gap-4">
                    {option.icon && (
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ECFAEE] text-[#2DBE3F]">
                        {option.icon}
                      </div>
                    )}

                    <div>
                      <h3 className="text-[20px] font-bold leading-tight text-[#111111]">
                        {option.title}
                      </h3>

                      {option.subtitle && (
                        <p className="mt-1 whitespace-pre-line text-[16px] text-[#6B7280]">
                          {option.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    className={clsx(
                      "flex h-7 w-7 items-center justify-center rounded-full border-2",
                      option.active ? "border-[#2DBE3F]" : "border-[#D8D8D8]"
                    )}
                  >
                    {option.active && <div className="h-3 w-3 rounded-full bg-[#2DBE3F]" />}
                  </div>
                </motion.button>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center gap-4">
        
        {showBack && (
          <motion.button
            type="button"
            onClick={() => onBack?.()}
            whileTap={{ scale: 0.95 }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ECECEC] bg-white"
          >
            <ArrowLeft className="h-6 w-6 text-[#111111]" />
          </motion.button>
        )}

        <motion.button
          type="button"
          onClick={() => onNext?.()}
          whileTap={{ scale: canProceed ? 0.98 : 1 }}
          disabled={! (canProceed ?? true)}
          className={clsx(
            "flex h-16 flex-1 items-center justify-center gap-3 rounded-2xl text-[22px] font-semibold",
            canProceed ? "bg-[#2DBE3F] text-white" : "bg-[#A7D6A7] text-white/80 pointer-events-none opacity-60"
          )}
        >
          {buttonText}
          <ArrowRight className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Background Shape removed to prevent overlap with footer buttons */}
    </div>
  );
}