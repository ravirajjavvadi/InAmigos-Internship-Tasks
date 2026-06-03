"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Clock, ArrowRight, Brain, Cloud, Shield, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const courses = [
  {
    title: "Full Stack AI Development",
    instructor: "Dr. Sarah Chen",
    duration: "12 Weeks",
    students: "4.2K",
    level: "Advanced",
    icon: <Brain className="text-pink-500" size={24} />,
    tag: "Trending",
    color: "from-pink-500/10 to-transparent",
  },
  {
    title: "Cloud Native Architecture",
    instructor: "James Wilson",
    duration: "10 Weeks",
    students: "3.5K",
    level: "Intermediate",
    icon: <Cloud className="text-blue-500" size={24} />,
    tag: "Bestseller",
    color: "from-blue-500/10 to-transparent",
  },
  {
    title: "Cyber Security Mastery",
    instructor: "Alex Rivera",
    duration: "16 Weeks",
    students: "2.9K",
    level: "Intermediate",
    icon: <Shield className="text-indigo-500" size={24} />,
    tag: "Popular",
    color: "from-indigo-500/10 to-transparent",
  },
  {
    title: "Modern React & Next.js",
    instructor: "Michael Page",
    duration: "8 Weeks",
    students: "5.1K",
    level: "Beginner",
    icon: <Code className="text-emerald-500" size={24} />,
    tag: "New",
    color: "from-emerald-500/10 to-transparent",
  },
];

export function TrendingCourses() {
  return (
    <section className="py-32 px-6 bg-slate-50/80 dark:bg-zinc-950/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[120px] -z-10" />
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="outline" className="text-indigo-500 border-indigo-500/20 px-4 py-1 font-bold">
              Top Categories
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              Explore Our <br /> <span className="text-gradient">Trending</span> Courses
            </h2>
            <p className="text-muted-foreground text-lg font-medium leading-relaxed">
              Equip yourself with the most in-demand skills in the modern tech industry, 
              curated by experts and powered by our AI platform.
            </p>
          </div>
          <Button variant="ghost" className="gap-2 group font-extrabold text-indigo-500 text-lg hover:bg-indigo-500/5 rounded-2xl h-14 px-8 border border-indigo-500/20">
            View All Catalog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full border-white/40 dark:border-white/5 hover:shadow-[0_20px_50px_-12px_rgba(79,70,229,0.2)] hover:-translate-y-3 transition-all duration-500 overflow-hidden group rounded-[2.5rem]">
                <CardHeader className="relative p-8">
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${course.color} rounded-bl-full -z-10 opacity-50`} />
                  <div className="w-14 h-14 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-zinc-100 dark:border-zinc-800">
                    {course.icon}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20 border-none px-3 py-1 font-bold">
                      {course.tag}
                    </Badge>
                    <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">{course.level}</span>
                  </div>
                  <CardTitle className="text-2xl font-black group-hover:text-indigo-500 transition-colors leading-tight">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="pt-2 font-medium text-muted-foreground">with {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="flex items-center gap-6 text-sm font-bold text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-indigo-500/50" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-indigo-500/50" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <Button className="w-full h-14 rounded-2xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 hover:bg-edu-gradient hover:text-white hover:border-none transition-all duration-500 font-black text-lg group">
                    Enroll Now <Sparkles size={18} className="ml-2 group-hover:animate-spin" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
