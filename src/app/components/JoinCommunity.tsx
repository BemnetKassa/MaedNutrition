// components/join-community.tsx
"use client";

import { motion } from "framer-motion";
import { Send, Users, MessageCircle, Rocket, Sparkles, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

const benefitIcons = [Users, MessageCircle, Rocket];

const JoinCommunity = () => {
  const { messages: m } = useLanguage();
  const telegramLink = "https://t.me/+EKCRITiI1CxiOGQ0";

  const benefits = m.joinCommunity.benefits.map((benefit, i) => {
    const Icon = benefitIcons[i];
    return {
      icon: <Icon className="w-6 h-6" />,
      title: benefit.title,
      description: benefit.description,
    };
  });

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#1a0f00]">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#16784a]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d89a2b]/10 blur-3xl rounded-full" />
      
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(transparent, transparent 59px, rgba(22, 120, 74, 0.08) 60px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#14110d]/20 bg-white/60 backdrop-blur-sm mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#00A619]" />
                <span className="text-[11px] font-black uppercase tracking-wider text-[#00A619]">
                  {m.joinCommunity.badge}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#8e5812]">
                {m.joinCommunity.title}
              </h2>
              <p className="text-[#837665] mt-4 text-base">
                {m.joinCommunity.subtitle}
              </p>
            </motion.div>

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
                  {m.joinCommunity.cta}
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-[#d89a2b] text-white text-xs font-black">{m.joinCommunity.free}</span>
                </a>
              </Button>
              <div className="flex items-center justify-center lg:justify-start gap-6 mt-6 text-sm text-[#827b73] flex-wrap">
                <span className="flex items-center gap-1">🔒 {m.joinCommunity.noSpam}</span>
                <span>•</span>
                <span className="flex items-center gap-1">💬 {m.joinCommunity.hundredFree}</span>
                <span>•</span>
                <span className="flex items-center gap-1">🚀 {m.joinCommunity.members}</span>
              </div>
            </motion.div>

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
                <span className="text-sm text-[#8f877e] ml-2">{m.joinCommunity.reviews}</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00A619] to-[#0c4d32] border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-sm text-[#878179]">{m.joinCommunity.happyMembers}</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-[0_22px_70px_rgba(26,19,10,0.14)]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#14110d] via-[#14110d]/20 to-transparent z-10" />
              
              <div className="relative aspect-[4/3] bg-[#f3eadc]">
                <Image
                  src="/pictures/community.JPG"
                  alt={m.joinCommunity.communityAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              
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
                        &quot;{m.joinCommunity.quote}&quot;
                      </p>
                      <p className="text-[#00A619] text-xs mt-1 font-semibold">{m.joinCommunity.quoteAuthor}</p>
                    </div>
                    <Play className="w-8 h-8 text-[#00A619] opacity-75" />
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 z-20">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#e2d8ca]">
                  <span className="text-[#00A619] text-xs font-black">{m.joinCommunity.liveCommunity}</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -left-4 -top-4 bg-white p-3 rounded-lg shadow-[0_22px_70px_rgba(26,19,10,0.14)] border border-[#e2d8ca] z-30 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#16784a]/10 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-[#00A619]" />
                </div>
                <div>
                  <p className="text-[#14110d] font-black text-sm">10k+</p>
                  <p className="text-[#6b6257] text-xs">{m.joinCommunity.messagesDay}</p>
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
                  <p className="text-[#6b6257] text-xs">{m.joinCommunity.activeSupport}</p>
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
