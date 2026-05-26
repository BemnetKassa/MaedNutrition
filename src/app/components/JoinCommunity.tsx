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
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0F172A]">
      {/* Background orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 blur-3xl" />
      
      {/* Simple grid pattern - fixed version */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(transparent, transparent 59px, rgba(74, 222, 128, 0.1) 60px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Content */}
          <div className="text-center lg:text-left">
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
              <Badge variant="outline" className="mb-4 px-4 py-1 border-green-500 text-green-400 inline-flex">
                <Sparkles className="w-3 h-3 mr-1" /> Join The Movement
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-yellow-500 bg-clip-text text-transparent">
                Join Our Community
              </h2>
              <p className="text-gray-400 mt-4 text-lg">
                Connect, learn, and grow with our vibrant Telegram community
              </p>
            </motion.div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="bg-slate-900/50 border-slate-700 hover:border-green-500/50 transition-all hover:scale-105">
                    <CardContent className="p-4 text-center lg:text-left">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-yellow-500 flex items-center justify-center mx-auto lg:mx-0 mb-3 text-white">
                        {benefit.icon}
                      </div>
                      <h3 className="text-sm font-semibold text-white">{benefit.title}</h3>
                      <p className="text-gray-400 text-xs mt-1">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg shadow-xl w-full sm:w-auto" asChild>
                <a href={telegramLink} target="_blank" rel="noopener noreferrer">
                  <Send className="w-5 h-5 mr-2" />
                  Join Now on Telegram
                  <Badge className="ml-2 bg-yellow-500 text-slate-900">Free</Badge>
                </a>
              </Button>
              <div className="flex items-center justify-center lg:justify-start gap-6 mt-6 text-sm text-gray-500 flex-wrap">
                <span className="flex items-center gap-1">🔒 No spam</span>
                <span>•</span>
                <span className="flex items-center gap-1">💬 100% free</span>
                <span>•</span>
                <span className="flex items-center gap-1">🚀 2,500+ members</span>
              </div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 pt-6 border-t border-slate-800"
            >
              <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
                <span className="text-sm text-gray-400 ml-2">4.9 from 200+ reviews</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-slate-800"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">Join 2,500+ happy members</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Photo with students */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-2xl shadow-green-500/20">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />
              
              {/* Photo */}
              <div className="relative aspect-[4/3]">
                <Image
                  src="/pictures/community.JPG"
                  alt="Community members with our founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              
              {/* Floating card overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="bg-slate-900/90 backdrop-blur-md p-4 border border-green-500/30">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-yellow-500 flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm">
                        "Building a community that grows together"
                      </p>
                      <p className="text-green-400 text-xs mt-1">— Our Founder & Students</p>
                    </div>
                    <Play className="w-8 h-8 text-green-500 opacity-75" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-green-500/20 backdrop-blur-sm px-3 py-1 border border-green-500/30">
                  <span className="text-green-400 text-xs font-semibold">LIVE COMMUNITY</span>
                </div>
              </div>
            </div>

            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -left-4 -top-4 bg-slate-900 p-3 shadow-xl border border-green-500/30 backdrop-blur-sm z-30 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500/20 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">10k+</p>
                  <p className="text-gray-400 text-xs">Messages/day</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -right-4 -bottom-4 bg-slate-900 p-3 shadow-xl border border-yellow-500/30 backdrop-blur-sm z-30 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-500/20 flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">24/7</p>
                  <p className="text-gray-400 text-xs">Active support</p>
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