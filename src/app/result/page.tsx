"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Activity, Flame, Target, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../components/Button";

interface AssessmentData {
  bodyType?: string;
  fitnessLevel?: string;
  fatLevel?: string;
  muscleDevelopment?: string;
  recommendedCalories?: string;
  recommendedProtein?: string;
  mealRecommendation?: string;
  workoutRecommendation?: string;
}

export default function ResultPage() {
  const [data, setData] = useState<AssessmentData | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("assessmentResult");
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <main className="bg-[#FAFAFA] min-h-screen">
        <Navbar />
        <div className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto text-center flex flex-col items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3FAE49] mb-4"></div>
          <h1 className="text-3xl font-bold text-[#111111]">Loading Your Results...</h1>
        </div>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="bg-[#FAFAFA] min-h-screen">
        <Navbar />
        <div className="pt-32 pb-16 px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[#E5F5E6] text-[#3FAE49] text-sm font-semibold mb-4 text-center">
            Payment Received
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#111111]">We’re reviewing your payment</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Thanks for submitting your receipt. We’ll verify your payment and send your plan shortly.
          </p>
          <div className="mt-8">
            <Link href="/mealPlan">
              <Button className="mx-auto flex items-center gap-2 px-8 py-4 text-lg">
                View Meal Plan Options <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#FAFAFA] min-h-screen pb-20">
      <Navbar />
      
      <div className="pt-32 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#E5F5E6] text-[#3FAE49] text-sm font-semibold mb-4 text-center">
            Analysis Complete
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-4">
            Your Personalized <span className="text-[#3FAE49]">Blueprint</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Based on your body analysis and goals, we've created a custom roadmap for your fitness journey.
          </p>
        </motion.div>

        {/* Current Body Assessment */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[32px] p-6 md:p-10 shadow-sm border border-[#F2F2F2] mb-8"
        >
          <h2 className="text-2xl font-bold text-[#111111] mb-6 flex items-center gap-3">
            <Activity className="text-[#3FAE49] h-6 w-6" />
            Body Breakdown
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-[#FAFAFA] p-5 rounded-2xl">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Body Type</span>
              <p className="text-xl font-bold text-[#111111] mt-1">{data.bodyType || "N/A"}</p>
            </div>
            <div className="bg-[#FAFAFA] p-5 rounded-2xl">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Fitness Level</span>
              <p className="text-xl font-bold text-[#111111] mt-1">{data.fitnessLevel || "N/A"}</p>
            </div>
            <div className="bg-[#FAFAFA] p-5 rounded-2xl">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Est. Fat Level</span>
              <p className="text-xl font-bold text-[#111111] mt-1">{data.fatLevel || "N/A"}</p>
            </div>
            <div className="bg-[#FAFAFA] p-5 rounded-2xl">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Muscle Development</span>
              <p className="text-xl font-bold text-[#111111] mt-1">{data.muscleDevelopment || "N/A"}</p>
            </div>
          </div>
        </motion.div>

        {/* Targets & Recommendations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Nutrition */}
          <div className="bg-[#FAFAFA] rounded-[32px] p-6 md:p-8 border-2 border-[#E5F5E6]">
            <h2 className="text-2xl font-bold text-[#111111] mb-4 flex items-center gap-2">
              <Flame className="text-[#3FAE49] h-6 w-6" /> 
              Daily Targets
            </h2>
            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-[#F2F2F2]">
                <div className="text-xs text-gray-500 font-semibold mb-1">CALORIES</div>
                <div className="text-2xl font-black text-[#3FAE49]">{data.recommendedCalories}</div>
              </div>
              <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-[#F2F2F2]">
                <div className="text-xs text-gray-500 font-semibold mb-1">PROTEIN</div>
                <div className="text-2xl font-black text-[#111111]">{data.recommendedProtein}</div>
              </div>
            </div>
            <div className="mb-2">
              <h3 className="font-bold text-[#111111] mb-2 text-lg">Meal Strategy</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {data.mealRecommendation}
              </p>
            </div>
          </div>

          {/* Workout */}
          <div className="bg-[#111111] rounded-[32px] p-6 md:p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="text-[#3FAE49] h-6 w-6" /> 
              Workout Plan
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
              {data.workoutRecommendation}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm font-medium text-gray-200">
                <CheckCircle2 className="text-[#3FAE49] h-5 w-5" /> Customized to your current level
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-gray-200">
                <CheckCircle2 className="text-[#3FAE49] h-5 w-5" /> Focus on your specific goal
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Future Transformation (Inspiration) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[32px] p-8 md:p-12 shadow-md border border-[#F2F2F2] text-center"
        >
          <h2 className="text-3xl font-bold text-[#111111] mb-4">
            Your Potential <span className="text-[#3FAE49]">Future</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">
            This could be you. If you stick to this custom plan, amazing results are waiting on the other side.
          </p>

          <div className="relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden aspect-video bg-gray-100 shadow-inner mb-8">
            <Image 
              src="/pictures/transformations/2on1.jpg" 
              alt="Transformation Inspiration" 
              fill 
              className="object-cover"
            />
          </div>

          <Link href="/mealPlan">
            <Button className="mx-auto flex items-center gap-2 px-8 py-4 text-lg">
              Get My Full Meal Plan <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
