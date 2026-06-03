"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, Sparkles, CheckCircle2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sophia Martinez",
    role: "Full Stack Developer",
    content: "The AI Study Assistant is a game-changer. It explained complex Redux concepts to me in a way that finally clicked!",
    avatar: "S",
  },
  {
    name: "David Kimmich",
    role: "Data Scientist",
    content: "EduVerse's roadmap feature saved me weeks of planning. The linear path to mastery is exactly what I needed.",
    avatar: "D",
  },
  {
    name: "Elena Rossi",
    role: "UI/UX Designer",
    content: "The balance of high-quality courses and real-time AI feedback makes this the most effective platform I've ever used.",
    avatar: "E",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 bg-slate-50/50 dark:bg-zinc-950/20 overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/5 blur-[120px] -z-10" />
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Success Stories from <br />
            <span className="text-gradient">Our Community</span>
          </h2>
          <p className="text-muted-foreground text-xl font-medium">
            Join thousands of successful professionals who have transformed 
            their careers with EduVerse AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] glass-card border-white/40 dark:border-white/5 relative group"
            >
              <Quote className="absolute top-8 right-8 text-indigo-500/10 group-hover:text-indigo-500/20 transition-all" size={60} />
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-foreground italic mb-10 leading-relaxed font-medium text-lg">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-4 border-white dark:border-zinc-900 shadow-xl">
                  <AvatarFallback className="bg-edu-gradient text-white font-black text-xl">{t.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-extrabold text-lg">{t.name}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-black">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-edu-gradient rounded-[3.5rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(79,70,229,0.4)]"
        >
          {/* Elite Decor */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] animate-pulse" />

          <div className="max-w-4xl mx-auto space-y-10 relative z-10">
             <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-black uppercase tracking-widest">
                <Sparkles size={14} /> 14-Day Free Trial Available
             </div>
            <h2 className="text-5xl md:text-8xl font-[900] tracking-tighter leading-[0.85]">
              Ready to Redefine <br /> Your Career?
            </h2>
            <p className="text-xl md:text-2xl text-white/80 font-medium">
              Join EduVerse AI today and get exclusive access to our trending courses 
              and the smartest AI Study Assistant for free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <Button size="lg" className="h-18 px-12 rounded-2xl bg-white text-indigo-600 font-black text-xl hover:bg-white/90 shadow-2xl border-none hover:scale-105 transition-all">
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline" className="h-18 px-12 rounded-2xl border-white/30 text-white font-black text-xl hover:bg-white/10 glass-card">
                Speak to an Expert
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 text-white/70 text-sm font-bold pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-cyan-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-cyan-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
