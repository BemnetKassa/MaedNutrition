// components/join-community.tsx
"use client";

import { motion } from "framer-motion";
import { Send, Users, MessageCircle, Rocket, Sparkles, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const JoinCommunity = () => {
  const telegramLink = "https://t.me/+EKCRITiI1CxiOGQ0";

  const benefits = [
    { icon: <Users className="w-6 h-6" />, title: "2,500+ Members", description: "Join a thriving community of innovators" },
    { icon: <MessageCircle className="w-6 h-6" />, title: "24/7 Active Discussions", description: "Engage in conversations anytime" },
    { icon: <Rocket className="w-6 h-6" />, title: "Exclusive Benefits", description: "Early access & member opportunities" }
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#1a0f00]">
      {/* Background orbs - updated to HTML colors */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#16784a]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d89a2b]/10 blur-3xl rounded-full" />
      
      {/* Simple grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(transparent, transparent 59px, rgba(22, 120, 74, 0.08) 60px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Content */}
          <div className="text-center lg:text-left">
            {/* Header - updated colors */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#14110d]/20 bg-white/60 backdrop-blur-sm mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#16784a]" />
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0f5e3d]">
                  JOIN THE MOVEMENT
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#8e5812]">
                Join Our Community
              </h2>
              <p className="text-[#837665] mt-4 text-base">
                Connect, learn, and grow with our vibrant Telegram community
              </p>
            </motion.div>

            {/* Benefits - updated card styling */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="bg-[#fff8ee] border border-[#ffe6c4] rounded-lg shadow-[0_12px_38px_rgba(26,19,10,0.06)] hover:shadow-[0_22px_70px_rgba(26,19,10,0.1)] transition-all hover:-translate-y-1">
                    <CardContent className="p-4 text-center lg:text-left">
                      <div className="w-10 h-10 rounded-lg bg-[#16784a]/10 flex items-center justify-center mx-auto lg:mx-0 mb-3">
                        <div className="text-[#16784a]">{benefit.icon}</div>
                      </div>
                      <h3 className="text-sm font-black text-[#14110d]">{benefit.title}</h3>
                      <p className="text-[#6b6257] text-xs mt-1">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA Button - updated to HTML style */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <Button 
                className="bg-[#16784a] hover:bg-[#0c4d32] text-white px-8 py-6 text-lg font-black shadow-[0_14px_28px_rgba(22,120,74,0.25)] rounded-lg w-full sm:w-auto"
                asChild
              >
                <a href={telegramLink} target="_blank" rel="noopener noreferrer">
                  <Send className="w-5 h-5 mr-2" />
                  Join Now on Telegram
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-[#d89a2b] text-white text-xs font-black">Free</span>
                </a>
              </Button>
              <div className="flex items-center justify-center lg:justify-start gap-6 mt-6 text-sm text-[#827b73] flex-wrap">
                <span className="flex items-center gap-1">🔒 No spam</span>
                <span>•</span>
                <span className="flex items-center gap-1">💬 100% free</span>
                <span>•</span>
                <span className="flex items-center gap-1">🚀 2,500+ members</span>
              </div>
            </motion.div>

            {/* Trust indicators - updated colors */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 pt-6 border-t border-[#e2d8ca]"
            >
              <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d89a2b] text-[#d89a2b]" />
                ))}
                <span className="text-sm text-[#8f877e] ml-2">4.9 from 200+ reviews</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#16784a] to-[#0c4d32] border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-sm text-[#878179]">Join 2,500+ happy members</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Photo with students - updated colors */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-[0_22px_70px_rgba(26,19,10,0.14)]">
              {/* Gradient overlay - updated to HTML colors */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14110d] via-[#14110d]/20 to-transparent z-10" />
              
              {/* Photo */}
              <div className="relative aspect-[4/3] bg-[#f3eadc]">
                <Image
                  src="/pictures/community.JPG"
                  alt="Community members with our founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              
              {/* Floating card overlay - updated colors */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="bg-white/95 backdrop-blur-md p-4 rounded-lg border border-[#e2d8ca] shadow-[0_12px_38px_rgba(26,19,10,0.06)]">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-[#16784a] flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#14110d] font-black text-sm">
                        "Building a community that grows together"
                      </p>
                      <p className="text-[#16784a] text-xs mt-1 font-semibold">— Our Founder & Students</p>
                    </div>
                    <Play className="w-8 h-8 text-[#16784a] opacity-75" />
                  </div>
                </div>
              </div>

              {/* Decorative elements - updated colors */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#e2d8ca]">
                  <span className="text-[#0c4d32] text-xs font-black">LIVE COMMUNITY</span>
                </div>
              </div>
            </div>

            {/* Floating stats cards - updated colors */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -left-4 -top-4 bg-white p-3 rounded-lg shadow-[0_22px_70px_rgba(26,19,10,0.14)] border border-[#e2d8ca] z-30 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#16784a]/10 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-[#16784a]" />
                </div>
                <div>
                  <p className="text-[#14110d] font-black text-sm">10k+</p>
                  <p className="text-[#6b6257] text-xs">Messages/day</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -right-4 -bottom-4 bg-white p-3 rounded-lg shadow-[0_22px_70px_rgba(26,19,10,0.14)] border border-[#e2d8ca] z-30 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#d89a2b]/10 flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-[#d89a2b]" />
                </div>
                <div>
                  <p className="text-[#14110d] font-black text-sm">24/7</p>
                  <p className="text-[#6b6257] text-xs">Active support</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;