"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "../components/Navbar";

export default function AboutPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 tracking-tight">Our Story</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            MAED Nutrition was born out of a simple belief: eating healthy shouldn't mean sacrificing flavor or spending hours in the kitchen.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block bg-[#3FAE49]/10 py-1 px-3 rounded-full">
              <span className="text-[#3FAE49] font-semibold text-sm">Our Mission</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] tracking-tight">Fueling your daily performance</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We are on a mission to make nutritious, chef-prepared meals accessible to everyone. By sourcing local ingredients and using sustainable practices, we deliver portion-controlled, delicious meals right to your door.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Whether you're a busy professional, an athlete, or just someone looking to improve their diet, we're here to help you hit your goals with ease so you can focus on what matters most.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[500px] rounded-4xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/pictures/meal-breakdown.avif" 
              alt="Healthy meal preparation" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
