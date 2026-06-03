"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Filter, Star, Clock, Users, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
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

const allCourses = [
  { title: "Full Stack AI Development", category: "AI & ML", rating: 4.9, students: "4.2K", duration: "12 Weeks", price: "$99", level: "Advanced" },
  { title: "Cloud Native Architecture", category: "Cloud", rating: 4.8, students: "3.5K", duration: "10 Weeks", price: "$89", level: "Intermediate" },
  { title: "Cyber Security Mastery", category: "Security", rating: 4.7, students: "2.9K", duration: "16 Weeks", price: "$129", level: "Advanced" },
  { title: "Modern React & Next.js", category: "Dev", rating: 4.9, students: "5.1K", duration: "8 Weeks", price: "$79", level: "Beginner" },
  { title: "Data Science Bootcamp", category: "Data", rating: 4.6, students: "3.8K", duration: "14 Weeks", price: "$109", level: "Beginner" },
  { title: "Blockchain Fundamentals", category: "Web3", rating: 4.5, students: "1.2K", duration: "6 Weeks", price: "$69", level: "Intermediate" },
  { title: "UI/UX Design Systems", category: "Design", rating: 4.9, students: "7.4K", duration: "10 Weeks", price: "$95", level: "Intermediate" },
  { title: "DevOps Engineering", category: "Infrastructure", rating: 4.8, students: "2.1K", duration: "12 Weeks", price: "$119", level: "Advanced" },
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div className="space-y-6 max-w-2xl">
          <Badge className="bg-indigo-500/10 text-indigo-500 border-none px-6 py-2 rounded-full font-black uppercase text-xs">Platform Catalog</Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            Explore Our <br /> <span className="text-gradient">Elite</span> Catalog
          </h1>
          <p className="text-muted-foreground text-xl font-medium leading-relaxed">
            Choose from over 120+ professional courses designed to take 
            your skills to the next dimension with AI-integrated learning.
          </p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input placeholder="Search courses..." className="pl-12 glass-card h-14 rounded-2xl font-bold border-white/20" />
          </div>
          <Button variant="outline" className="h-14 w-14 p-0 glass-card rounded-2xl border-white/20 hover:text-indigo-500 transition-colors">
            <Filter size={24} />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {allCourses.map((course, index) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card className="glass-card h-full border-white/40 dark:border-white/5 hover:shadow-[0_20px_50px_-12px_rgba(79,70,229,0.15)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer rounded-[2.5rem] overflow-hidden">
              <CardHeader className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-indigo-500/10 text-indigo-500 border-none px-3 py-1 font-black uppercase text-[10px]">{course.category}</Badge>
                  <div className="flex items-center gap-1 text-sm font-black text-yellow-500">
                    <Star size={16} fill="currentColor" /> {course.rating}
                  </div>
                </div>
                <CardTitle className="text-2xl font-black group-hover:text-indigo-500 transition-colors leading-tight mb-2">{course.title}</CardTitle>
                <CardDescription className="font-bold tracking-widest text-[10px] uppercase text-muted-foreground">{course.level}</CardDescription>
              </CardHeader>
              <CardContent className="px-8 space-y-6">
                <div className="flex items-center justify-between text-sm font-bold text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-indigo-500/50" /> {course.students}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-indigo-500/50" /> {course.duration}
                  </div>
                </div>
                <div className="text-3xl font-black text-gradient">{course.price}</div>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button className="w-full h-14 rounded-2xl bg-edu-gradient border-none hover:opacity-90 font-black text-lg group">
                  Enroll Course <Sparkles size={18} className="ml-2 group-hover:animate-spin" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
