"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Globe, 
  Target, 
  Shield, 
  Heart, 
  Award,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  Cpu,
  BarChart4,
  CheckCircle,
  Zap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center max-w-4xl mx-auto mb-24 space-y-8 relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/10 blur-[100px] -z-10" />
        <Badge className="bg-indigo-500/10 text-indigo-500 border-none px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs">Our Global Narrative</Badge>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85]">
          Democratizing <br /> <span className="text-gradient">Intelligence</span>
        </h1>
        <p className="text-muted-foreground text-xl font-medium leading-relaxed max-w-2xl mx-auto">
          EduVerse AI was founded on the belief that geography or income should never 
          be a barrier to high-fidelity, personalized education.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-black tracking-tight">The EduVerse Mission</h2>
          <p className="text-muted-foreground leading-relaxed text-lg font-medium">
            We are building a future where every student has a world-class tutor 
            in their pocket. By leveraging the latest breakthroughs in Large Language Models 
            (LLMs), we provide real-time, context-aware study support that adapts to 
            each learner's unique pace and style.
          </p>
          <div className="grid grid-cols-2 gap-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <div className="space-y-2">
              <span className="text-4xl font-black text-indigo-500">2024</span>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-black">Year Founded</p>
            </div>
            <div className="space-y-2">
              <span className="text-4xl font-black text-indigo-500">120+</span>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-black">Countries Reached</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6 }}
           className="glass-card p-16 rounded-[4rem] relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-edu-gradient rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-all" />
          <div className="grid grid-cols-2 gap-12">
            {[
              { icon: <Heart className="text-pink-500" size={32} />, label: "Passion" },
              { icon: <Target className="text-indigo-500" size={32} />, label: "Precision" },
              { icon: <Globe className="text-blue-500" size={32} />, label: "Global" },
              { icon: <Award className="text-emerald-500" size={32} />, label: "Excellence" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-4 group/item">
                <div className="w-20 h-20 bg-white dark:bg-zinc-900 rounded-[2rem] flex items-center justify-center shadow-xl border border-zinc-100 dark:border-zinc-800 group-hover/item:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="font-black uppercase tracking-widest text-[10px]">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <Badge className="bg-indigo-500/10 text-indigo-500 border-none px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs">Reach Out</Badge>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85]">
              Get in <br /> <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground text-xl font-medium max-w-md leading-relaxed">
              Have questions about certificates, roadmaps, or enterprise plans? 
              Our elite support team is ready to assist.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-indigo-500 shadow-xl border-white/20 group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black mb-1">Email Protocol</p>
                <p className="text-xl font-extrabold">master@eduverse.ai</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-pink-500 shadow-xl border-white/20 group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black mb-1">Neural Voice</p>
                <p className="text-xl font-extrabold">+1 (555) EDU-ELITE</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="glass-card p-12 md:p-16 rounded-[4rem] border-white/40 dark:border-white/10 space-y-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest ml-1 opacity-60">First Name</label>
                <Input placeholder="John" className="h-16 glass-card rounded-2xl px-6 font-bold border-white/20" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest ml-1 opacity-60">Last Name</label>
                <Input placeholder="Doe" className="h-16 glass-card rounded-2xl px-6 font-bold border-white/20" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest ml-1 opacity-60">Neural Address (Email)</label>
              <Input placeholder="john@example.com" className="h-16 glass-card rounded-2xl px-6 font-bold border-white/20" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest ml-1 opacity-60">Your Inquiry</label>
              <textarea 
                className="w-full bg-white/20 backdrop-blur-xl border border-white/30 dark:bg-black/20 dark:border-white/10 rounded-2xl p-6 h-40 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all font-bold"
                placeholder="How can we accelerate your journey?"
              />
            </div>
          </div>
          <Button className="w-full h-18 rounded-2xl bg-edu-gradient border-none font-black text-xl gap-3 shadow-2xl hover:scale-105 transition-all group">
            Transmit Message <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
          <div className="flex items-center justify-center gap-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
            <CheckCircle2 size={16} className="text-emerald-500" />
            <span>Response latency: 2ms - 2h</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export function FeaturesPage() {
  const featureList = [
    { title: "Gemini 1.5 Neural Assistant", desc: "The most advanced AI tutor capable of reasoning and multimodal learning.", icon: <Cpu className="text-indigo-500" /> },
    { title: "Real-time Skill Analytics", desc: "Track your mastery levels across hundreds of technical topics with live heatmaps.", icon: <BarChart4 className="text-pink-500" /> },
    { title: "Iron-clad Privacy", desc: "Your learning data is encrypted and never sold. You own your intellectual growth.", icon: <Shield className="text-emerald-500" /> },
    { title: "Sub-second Responsiveness", desc: "Optimized Next.js edge functions ensure your dashboard is always lightning fast.", icon: <Zap className="text-yellow-500" /> },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center max-w-4xl mx-auto mb-24 space-y-8 relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/10 blur-[100px] -z-10" />
        <Badge className="bg-indigo-500/10 text-indigo-500 border-none px-6 py-2 rounded-full font-black uppercase text-xs">Architectural Prowess</Badge>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85]">
          Sovereign <br /> <span className="text-gradient">Technology</span>
        </h1>
        <p className="text-muted-foreground text-xl font-medium leading-relaxed max-w-2xl mx-auto">
          We leverage the world's most advanced web and AI technologies to build 
          a seamless, high-fidelity learning ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
        {featureList.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-12 glass-card rounded-[3.5rem] border-white/20 dark:border-white/5 flex gap-8 relative overflow-hidden group"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-[60px] group-hover:bg-indigo-500/10 transition-all" />
            <div className="w-20 h-20 bg-white dark:bg-zinc-900 rounded-[2rem] flex items-center justify-center shadow-2xl shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-zinc-100 dark:border-zinc-800">
              {React.cloneElement(f.icon as React.ReactElement<any>, { size: 32 })}
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-black group-hover:text-indigo-500 transition-colors uppercase tracking-tight">{f.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed font-medium">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
