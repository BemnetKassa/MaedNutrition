"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./Button";
import { Sparkles, Truck, UtensilsCrossed } from "lucide-react";


export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold tracking-tight text-[#111111] sm:text-6xl xl:text-7xl">
                A Smarter Way to Eat.<br />
                <span className="text-[#3FAE49]">A Better You.</span>
              </h1>
              <p className="max-w-[600px] text-lg text-[#6B7280] sm:text-xl leading-relaxed">
                Personalized meal plans powered by AI.<br />
                Delivered fresh. Tailored to your goals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto text-lg shadow-lg shadow-green-500/20">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg">
                View Sample Menu
              </Button>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200"></div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-6xl mx-auto">

              {/* Benefit 1 */}
              <div className="flex items-center gap-4 flex-1 justify-center">
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF7EC]">
                  <Sparkles className="h-6 w-6 text-[#3FAE49]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111111]">100% Clean Ingredients</h4>
                  <p className="text-xs text-[#6B7280]">No artificial preservatives</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-gray-200"></div>

              {/* Benefit 2 */}
              <div className="flex items-center gap-4 flex-1 justify-center">
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF7EC]">
                  <UtensilsCrossed className="h-6 w-6 text-[#3FAE49]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111111]">Chef Prepared Meals</h4>
                  <p className="text-xs text-[#6B7280]">Restaurant quality taste</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-gray-200"></div>

              {/* Benefit 3 */}
              <div className="flex items-center gap-4 flex-1 justify-center">
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF7EC]">
                  <Truck className="h-6 w-6 text-[#3FAE49]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111111]">Delivered Fresh</h4>
                  <p className="text-xs text-[#6B7280]">Straight to your door</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
          >
            <div className="relative w-full aspect-[3/4] rounded-[32px] overflow-hidden bg-white shadow-2xl border border-[#EAF7EC]">
              <Image
                src="/pictures/sofi-graphics.PNG"
                alt="Sofit's Circle Diet hero"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent"></div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 right-4 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-gray-100"
            >
              <span className="text-xl font-bold text-[#3FAE49]">100%</span>
              <br /><span className="text-sm font-medium text-[#6B7280]">Organic</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 left-4 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#EAF7EC] flex items-center justify-center text-[#3FAE49]">
                ⚡
              </div>
              <div>
                <div className="font-bold text-[#111111]">AI Powered</div>
                <div className="text-xs text-[#6B7280]">Perfect Macros</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
