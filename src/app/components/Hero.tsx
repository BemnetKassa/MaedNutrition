// hero.tsx

"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./Button";
import {
  ClipboardList,
  Zap,
  Leaf,
  ChefHat,
  Truck,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] pt-24 md:pt-0 pb-8">
      {/* Mobile background image (behind content) */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/pictures/sofiMain.PNG"
          alt="MAED Nutrition Hero background"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-contain object-top opacity-60"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-362.5 px-4 md:px-6 md:pr-0">

        <div className="grid items-center gap-6 grid-cols-1 md:grid-cols-2">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            
            {/* Heading */}
            <div className="max-w-full md:max-w-140">
              <h1 className="text-3xl sm:text-4xl md:text-[50px] lg:text-[48px] leading-tight font-extrabold tracking-tight text-[#111111]">
                A Smarter Way to
                <br />
                Eat. A Better You.
              </h1>

              <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#6B7280]">
                Personalized meal plans powered by AI.
                <br />
                Delivered fresh. Tailored to your goals.
              </p>
            </div>

            {/* Cards */}
            <div className="mt-7 grid gap-4 grid-cols-1 md:grid-cols-2 max-w-full md:max-w-160">
              
              {/* Card 1 */}
              <div className="rounded-3xl border border-[#DDE7DD] bg-white p-5 shadow-sm">
                
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF7EC]">
                  <ClipboardList className="h-6 w-6 text-[#3FAE49]" />
                </div>

                <h3 className="mt-5 text-[18px] font-extrabold leading-tight text-[#3FAE49]">
                  A. A Meal Plan
                  <br />
                  That Works For You
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-[#6B7280]">
                  Answer a few questions and let AI create the perfect plan for
                  your goals.
                </p>

                <Button className="mt-5 h-11 w-full rounded-xl text-[14px] font-semibold">
                  Start My Assessment
                </Button>
              </div>

              {/* Card 2 */}
              <div className="rounded-3xl border border-[#E5E5E5] bg-white p-5 shadow-sm">
                
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF7EC]">
                  <Zap className="h-6 w-6 text-[#3FAE49]" />
                </div>

                <h3 className="mt-5 text-[18px] font-extrabold leading-tight text-[#111111]">
                  B. Quick
                  <br />
                  Purchase
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-[#6B7280]">
                  Choose your meals, select a plan, and place your order in
                  minutes.
                </p>

                <Button
                  variant="outline"
                  className="mt-5 h-11 w-full rounded-xl border-[#DADADA] text-[14px] font-semibold"
                >
                  Browse Meals
                </Button>
              </div>
            </div>

            {/* Bottom Features */}
            <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-6">
              
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF7EC]">
                  <Leaf className="h-5 w-5 text-[#3FAE49]" />
                </div>

                <div>
                  <h4 className="text-[14px] font-bold text-[#111111]">
                    100% Clean Ingredients
                  </h4>

                  <p className="text-[12px] text-[#6B7280]">
                    No artificial preservatives
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-[#E5E5E5]" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF7EC]">
                  <ChefHat className="h-5 w-5 text-[#3FAE49]" />
                </div>

                <div>
                  <h4 className="text-[14px] font-bold text-[#111111]">
                    Chef Prepared Meals
                  </h4>

                  <p className="text-[12px] text-[#6B7280]">
                    Restaurant quality taste
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-[#E5E5E5]" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF7EC]">
                  <Truck className="h-5 w-5 text-[#3FAE49]" />
                </div>

                <div>
                  <h4 className="text-[14px] font-bold text-[#111111]">
                    Delivered Fresh
                  </h4>

                  <p className="text-[12px] text-[#6B7280]">
                    Straight to your door
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden h-full md:block"
          >
            <div className="relative flex h-105 w-full items-center justify-center md:h-140 lg:h-190">
              <Image
                src="/pictures/sofiMain.PNG"
                alt="MAED Nutrition Hero"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}