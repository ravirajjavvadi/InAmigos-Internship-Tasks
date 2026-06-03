import React from "react";
import { Hero } from "@/components/shared/Hero";
import { TrendingCourses } from "@/components/shared/TrendingCourses";
import { Features } from "@/components/shared/Features";
import { Testimonials, CTASection } from "@/components/shared/HomeAdditions";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Background Mesh (Global but fades) */}
      <div className="fixed inset-0 bg-mesh opacity-20 -z-10 pointer-events-none" />
      
      <Hero />
      <div className="space-y-0">
        <TrendingCourses />
        <Features />
        <Testimonials />
        <CTASection />
      </div>
    </div>
  );
}
