"use client";

import React from "react";
import { motion } from "framer-motion";
import { Map, ChevronRight, GraduationCap, Briefcase, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const preDefinedRoadmaps = [
  {
    title: "Full Stack Master",
    steps: ["HTML/CSS/JS", "React & Next.js", "Node & Express", "Databases", "Deployment"],
    icon: <Zap size={24} />,
    color: "bg-orange-500",
  },
  {
    title: "AI Engineer",
    steps: ["Python Mastery", "Math for ML", "Scikit Learn", "Deep Learning", "LLM Fine-tuning"],
    icon: <GraduationCap size={24} />,
    color: "bg-pink-500",
  },
  {
    title: "Cloud Architect",
    steps: ["Linux Basics", "Networking", "AWS/Azure/GCP", "Docker & K8s", "Terraform & IaC"],
    icon: <Briefcase size={24} />,
    color: "bg-blue-500",
  },
];

export default function RoadmapsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
        <div className="space-y-6 text-center md:text-left max-w-2xl">
          <Badge className="bg-indigo-500/10 text-indigo-500 border-none px-6 py-2 rounded-full font-black uppercase text-xs">Career Pathing</Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
            Learning <br /> <span className="text-gradient">Roadmaps</span>
          </h1>
          <p className="text-muted-foreground text-xl font-medium leading-relaxed">
            Don't just learn. Learn with a plan. Follow expert-curated paths 
            or generate your own with our elite AI engine.
          </p>
        </div>
        <Link href="/ai-assistant">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="h-20 px-10 rounded-[2rem] bg-edu-gradient border-none text-xl font-black gap-3 shadow-[0_20px_50px_-10px_rgba(79,70,229,0.4)] group">
              <Sparkles size={28} /> Generate AI Roadmap
            </Button>
          </motion.div>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {preDefinedRoadmaps.map((roadmap, index) => (
          <motion.div
            key={roadmap.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-10 rounded-[3rem] border-white/40 dark:border-white/5 relative overflow-hidden group hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
          >
            <div className={`absolute top-0 right-0 w-48 h-48 ${roadmap.color}/5 rounded-bl-[6rem] -z-10 group-hover:bg-opacity-10 transition-all`} />
            
            <div className={`w-16 h-16 ${roadmap.color} text-white rounded-2xl flex items-center justify-center shadow-2xl mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
              {roadmap.icon}
            </div>
            
            <h3 className="text-3xl font-black mb-10">{roadmap.title}</h3>
            
            <div className="space-y-8 relative">
              {/* Vertical Line */}
              <div className="absolute left-[13px] top-2 bottom-2 w-1 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
              
              {roadmap.steps.map((step, sIndex) => (
                <div key={step} className="flex items-center gap-6 relative z-10 group/item">
                  <div className={`w-7 h-7 rounded-full border-4 border-white dark:border-zinc-900 ${roadmap.color} shadow-lg transition-transform group-hover/item:scale-125`} />
                  <span className="font-extrabold text-base text-foreground/80 group-hover/item:text-indigo-500 transition-colors">{step}</span>
                </div>
              ))}
            </div>
            
            <Button variant="ghost" className="w-full h-14 mt-12 gap-3 font-black text-lg group rounded-2xl border border-zinc-100 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-white/5">
              Start This Path <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        ))}
      </div>
      
      {/* AI Placeholder Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-24 glass-card p-16 md:p-24 rounded-[4rem] text-center space-y-8 border-dashed border-2 border-indigo-500/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
        <div className="w-24 h-24 bg-indigo-500/10 rounded-3xl flex items-center justify-center mx-auto text-indigo-500 shadow-inner">
          <Map size={48} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Need a Custom Path?</h2>
        <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          Need a specific path for 'Mobile App Dev with Flutter' or 'Advanced Stock Trading'? 
          Our elite AI can generate a high-intensity professional roadmap just for you.
        </p>
        <Link href="/ai-assistant">
          <Button variant="outline" className="h-16 px-10 rounded-2xl glass-card font-black text-lg border-white/30 hover:bg-white/10">Go to Elite Assistant</Button>
        </Link>
      </motion.div>
    </div>
  );
}
