"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Map, Zap, Trophy, Globe, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "AI Study Assistant",
    desc: "Get instant answers, concept explanations, and personalized resource suggestions 24/7.",
    icon: <BrainCircuit className="text-indigo-500" size={32} />,
  },
  {
    title: "Personalized Roadmaps",
    desc: "AI-generated vertical timelines tailored to your current skills and career goals.",
    icon: <Map className="text-purple-500" size={32} />,
  },
  {
    title: "Rapid Skill Up",
    desc: "Accelerated learning modules designed to get you industry-ready in weeks, not years.",
    icon: <Zap className="text-pink-500" size={32} />,
  },
  {
    title: "Global Certification",
    desc: "Earn recognized certificates that showcase your mastery to top employers worldwide.",
    icon: <Trophy className="text-yellow-500" size={32} />,
  },
  {
    title: "Community Network",
    desc: "Connect with thousands of learners and experts in our exclusive Discord and live sessions.",
    icon: <Globe className="text-blue-500" size={32} />,
  },
  {
    title: "Goal Tracking",
    desc: "Smart analytics that monitor your progress and nudge you when you're off track.",
    icon: <Target className="text-emerald-500" size={32} />,
  },
];

export function Features() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <Badge className="bg-indigo-500/10 text-indigo-500 border-none px-6 py-2 rounded-full font-bold uppercase tracking-wider text-xs">
            Why Choose Us?
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
            Unlock Your Potential with <br />
            <span className="text-gradient">Professional</span> Features
          </h2>
          <p className="text-muted-foreground text-xl font-medium leading-relaxed">
            Our platform is built on the intersection of human expertise and artificial intelligence 
            to provide the most effective learning experience ever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-10 rounded-[3rem] glass-card border-white/40 dark:border-white/5 h-full hover:shadow-[0_20px_50px_-12px_rgba(79,70,229,0.1)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all" />
                
                <div className="w-20 h-20 bg-white dark:bg-zinc-900 rounded-3xl flex items-center justify-center shadow-xl mb-8 group-hover:bg-edu-gradient group-hover:text-white group-hover:scale-110 transition-all duration-500 border border-zinc-100 dark:border-zinc-800">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-indigo-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
