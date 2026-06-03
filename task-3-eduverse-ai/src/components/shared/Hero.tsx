"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, GraduationCap, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative pt-20 pb-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 bg-mesh opacity-30 dark:opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="px-6 py-2 rounded-full border-indigo-500/30 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md text-indigo-600 dark:text-indigo-400 font-bold tracking-tight text-xs uppercase flex gap-2 items-center">
              <Sparkles size={14} className="animate-pulse" />
              The Future of Learning is Here
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-8xl font-[900] tracking-tighter leading-[0.9] text-zinc-950 dark:text-white">
              Master Any Skill with <br />
              <span className="text-gradient">AI-Powered</span> Education
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              EduVerse AI combines cutting-edge curriculum with personalized study plans 
              and a 24/7 AI learning assistant to accelerate your career growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center"
          >
            <Button size="lg" className="h-16 px-10 rounded-2xl bg-edu-gradient border-none text-lg font-bold shadow-[0_0_40px_-10px_rgba(79,70,229,0.3)] hover:shadow-[0_0_50px_-10px_rgba(79,70,229,0.5)] hover:scale-105 transition-all duration-300 group">
              Start Learning Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="ghost" className="h-16 px-10 rounded-2xl text-lg font-bold border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 gap-2 group">
              <div className="w-10 h-10 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={16} fill="currentColor" />
              </div>
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-zinc-200 dark:border-zinc-800/50 w-full"
          >
            {[
              { label: "Students", val: "50K+", icon: <GraduationCap className="text-indigo-500" /> },
              { label: "Satisfaction", val: "4.9/5", icon: <Sparkles className="text-violet-500" /> },
              { label: "Countries", val: "120+", icon: <Globe className="text-cyan-500" /> },
              { label: "Resources", val: "1M+", icon: <Zap className="text-pink-500" /> },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-1">
                   {stat.icon}
                   <span className="text-xs uppercase tracking-widest font-bold">{stat.label}</span>
                </div>
                <div className="text-3xl font-black text-zinc-900 dark:text-zinc-100">{stat.val}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-[20%] left-[5%] animate-bounce delay-75 pointer-events-none opacity-20 dark:opacity-10">
        <GraduationCap size={120} className="text-indigo-500 rotate-12" />
      </div>
      <div className="absolute bottom-[20%] right-[5%] animate-bounce delay-300 pointer-events-none opacity-20 dark:opacity-10">
        <Sparkles size={120} className="text-violet-500 -rotate-12" />
      </div>
    </section>
  );
}
