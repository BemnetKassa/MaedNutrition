"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Target, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Trophy,
  GraduationCap,
  Heart,
  CalendarDays,
  Dumbbell
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fff8ee]">
      {/* Hero Section with warm gradient */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background gradients */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(circle at 90% 10%, rgba(216, 154, 43, 0.15), transparent 40%), linear-gradient(135deg, #fff8ee 0%, #f3eadc 56%, #e8f0e5 100%)"
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#14110d]/20 bg-white/60 backdrop-blur-sm mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#16784a]" />
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0c4d32]">
                  SINCE 2023
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] text-[#14110d]">
                A nutrition brand built for{" "}
                <span className="text-[#16784a]">real lives</span>
              </h1>

              <p className="mt-6 text-lg text-[#6b6257] leading-relaxed max-w-lg">
                Sofi Circle Diet, led by world class bodybuilder and certified nutritionist 
                Sofonias Nebyiu, builds 90-day plans from a simple belief: structure creates 
                results, and consistency changes everything.
              </p>

              {/* Stats Row */}
              <div className="flex items-center gap-6 mt-8">
                <div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#d89a2b] text-[#d89a2b]" />
                    <Star className="w-4 h-4 fill-[#d89a2b] text-[#d89a2b]" />
                    <Star className="w-4 h-4 fill-[#d89a2b] text-[#d89a2b]" />
                    <Star className="w-4 h-4 fill-[#d89a2b] text-[#d89a2b]" />
                    <Star className="w-4 h-4 fill-[#d89a2b] text-[#d89a2b]" />
                  </div>
                  <p className="text-sm text-[#6b6257] mt-1">500+ happy clients</p>
                </div>
                <div className="w-px h-8 bg-[#e2d8ca]" />
                <div>
                  <p className="text-2xl font-black text-[#16784a]">4-5 years</p>
                  <p className="text-sm text-[#6b6257]">of experience</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#16784a] text-white font-black hover:bg-[#0c4d32] transition-all shadow-[0_14px_28px_rgba(22,120,74,0.25)]"
                >
                  Start Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="px-6 py-3 rounded-lg border border-[#e2d8ca] text-[#14110d] font-black hover:border-[#16784a] hover:text-[#16784a] transition-all">
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* RIGHT IMAGES */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="relative h-80 rounded-lg overflow-hidden border border-[#e2d8ca] shadow-[0_22px_70px_rgba(26,19,10,0.1)]"
                >
                  <Image
                    src="/pictures/DSC00730.webp"
                    alt="Sofonias preparing meals"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="mt-8 space-y-4">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                    className="relative h-48 rounded-lg overflow-hidden border border-[#e2d8ca] shadow-[0_12px_38px_rgba(26,19,10,0.06)]"
                  >
                    <Image
                      src="/pictures/DSC00749.webp"
                      alt="Healthy meal prep"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-[#e2d8ca]">
                    <p className="text-xs text-[#6b6257] text-center">
                      "Building bodies, transforming lives"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who is Sofonias Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-lg overflow-hidden border border-[#e2d8ca] shadow-[0_22px_70px_rgba(26,19,10,0.1)]">
                <Image
                  src="/pictures/sofi12.webp"
                  alt="Sofonias Nebiyu"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg px-4 py-2 border border-[#e2d8ca] shadow-md">
                <p className="text-[#16784a] font-black text-sm">Certified Nutritionist</p>
              </div>
            </motion.div>

            {/* RIGHT - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#14110d]/20 bg-white/60 backdrop-blur-sm">
                <Target className="w-3.5 h-3.5 text-[#16784a]" />
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0c4d32]">
                  MEET THE FOUNDER
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-[#14110d]">
                Who is <span className="text-[#16784a]">Sofonias?</span>
              </h2>

              <p className="text-lg text-[#6b6257] leading-relaxed">
                Hello everyone, my name is <span className="text-[#14110d] font-black">Sofonias Nebiyu</span>. 
                For the past <span className="text-[#14110d] font-black">4–5 years</span>, I have been actively 
                involved in bodybuilding and fat loss coaching, helping people build structure, 
                confidence, and lasting results.
              </p>

              {/* Achievements Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-[#d89a2b] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-[#14110d]">3rd Place</p>
                    <p className="text-sm text-[#6b6257]">International physique competitions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-[#16784a] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-[#14110d]">120+ Students</p>
                    <p className="text-sm text-[#6b6257]">Nutrition & Hypertrophy instructor</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[#c95d43] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-[#14110d]">500+ Clients</p>
                    <p className="text-sm text-[#6b6257]">Successfully transformed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Dumbbell className="w-5 h-5 text-[#16784a] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-[#14110d]">Mechanical Engineer</p>
                    <p className="text-sm text-[#6b6257]">Graduate & fitness expert</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-2 text-[#16784a] font-black hover:gap-3 transition-all"
                >
                  Start your transformation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values / Philosophy Section */}
      <section className="py-16 md:py-24 bg-[#f3eadc]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#14110d]/20 bg-white/60 backdrop-blur-sm mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#16784a]" />
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0c4d32]">
                OUR PHILOSOPHY
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#14110d]">
              Built on <span className="text-[#16784a]">three core principles</span>
            </h2>
            <p className="mt-4 text-[#6b6257]">The foundation of every successful transformation</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Precision Planning",
                description: "Every plan is built around real goals, real schedules, and real results.",
                color: "#16784a"
              },
              {
                icon: Sparkles,
                title: "Focused Structure",
                description: "A single 90-day roadmap that makes progress feel achievable.",
                color: "#d89a2b"
              },
              {
                icon: Users,
                title: "Community-Driven",
                description: "A local brand supporting local success stories.",
                color: "#c95d43"
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-lg border border-[#e2d8ca] p-6 shadow-[0_12px_38px_rgba(26,19,10,0.04)] hover:shadow-[0_22px_70px_rgba(26,19,10,0.08)] transition-all hover:-translate-y-1"
              >
                <div 
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${item.color}10` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-black text-[#14110d] mb-3">{item.title}</h3>
                <p className="text-[#6b6257] leading-relaxed">{item.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-black" style={{ color: item.color }}>
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#16784a] to-[#0c4d32] rounded-lg p-8 md:p-12 text-center shadow-xl"
          >
            <CalendarDays className="w-12 h-12 mx-auto mb-4 text-white/80" />
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              Ready to Start Your 90-Day Transformation?
            </h2>
            <p className="text-white/80 text-base max-w-md mx-auto mb-6">
              Join hundreds of others who've transformed their bodies with our proven system
            </p>
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white text-[#16784a] font-black hover:bg-[#f3eadc] transition-all shadow-lg"
            >
              Start Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}