"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Target, Shield, Heart, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
        <Badge className="bg-indigo-500/10 text-indigo-500 border-none px-4 py-1">Our Story</Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Democratizing <span className="text-gradient">Intelligence</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          EduVerse AI was founded on the belief that geography or income should never 
          be a barrier to high-quality, personalized education.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">The EduVerse Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            We are building a future where every student has a world-class tutor 
            in their pocket. By leveraging the latest breakthroughs in Large Language Models 
            (LLMs), we provide real-time, context-aware study support that adapts to 
            each learner's unique pace and style.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div className="space-y-2">
              <span className="text-3xl font-bold text-indigo-500">2024</span>
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Founded</p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl font-bold text-indigo-500">120+</span>
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Countries</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="glass p-12 rounded-[3rem] relative"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-edu-gradient rounded-full blur-3xl opacity-20" />
          <div className="grid grid-cols-2 gap-8">
            {[
              { icon: <Heart className="text-pink-500" />, label: "Passion" },
              { icon: <Target className="text-indigo-500" />, label: "Precision" },
              { icon: <Globe className="text-blue-500" />, label: "Global" },
              { icon: <Award className="text-emerald-500" />, label: "Excellence" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shadow-lg">
                  {item.icon}
                </div>
                <span className="font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
