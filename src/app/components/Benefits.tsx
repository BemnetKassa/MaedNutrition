"use client";

import { CalendarDays, Target, LineChart } from "lucide-react";
import { motion } from "framer-motion";

export function Benefits() {
  return (
    <section className="bg-white py-16 border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 max-w-6xl mx-auto"
        >

          {/* Benefit 1 */}
          <div className="flex items-center gap-4 flex-1 justify-center">
            <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF7EC]">
              <CalendarDays className="h-6 w-6 text-[#3FAE49]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#111111]">90-Day Structure</h4>
              <p className="text-sm text-[#6B7280]">Clear phases and milestones</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200"></div>

          {/* Benefit 2 */}
          <div className="flex items-center gap-4 flex-1 justify-center">
            <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF7EC]">
              <Target className="h-6 w-6 text-[#3FAE49]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#111111]">Goal-Based Targets</h4>
              <p className="text-sm text-[#6B7280]">Personalized for your outcome</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200"></div>

          {/* Benefit 3 */}
          <div className="flex items-center gap-4 flex-1 justify-center">
            <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF7EC]">
              <LineChart className="h-6 w-6 text-[#3FAE49]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#111111]">Progress Tracking</h4>
              <p className="text-sm text-[#6B7280]">See momentum week by week</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
