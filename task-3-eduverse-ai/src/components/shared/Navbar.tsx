"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Menu, X, Sparkles, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Courses", href: "/courses" },
  { name: "Roadmaps", href: "/roadmaps" },
  { name: "AI Assistant", href: "/ai-assistant" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 ${
        isScrolled ? "py-4 pt-4" : "py-6"
      }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between transition-all duration-500 px-6 py-3 rounded-2xl border ${
          isScrolled
            ? "glass-card border-white/40 dark:border-white/10"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-edu-gradient rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <GraduationCap size={28} />
          </div>
          <span className="text-2xl font-[900] tracking-tighter text-gradient leading-none">
            EduVerse AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 text-sm font-bold tracking-tight rounded-xl transition-all duration-300 ${
                pathname === link.href
                  ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                  : "text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" className="font-bold text-sm h-11 px-6 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all gap-2">
            <LogIn size={18} /> Log in
          </Button>
          <Button className="font-bold text-sm h-11 px-6 rounded-xl bg-edu-gradient border-none shadow-lg hover:shadow-indigo-500/20 hover:scale-105 transition-all gap-2 group">
            Get Started <Sparkles size={16} className="group-hover:animate-spin" />
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="group rounded-xl border border-zinc-200 dark:border-zinc-800 h-11 w-11">
                  <Menu className="w-6 h-6 group-hover:text-indigo-500 transition-colors" />
                </Button>
              }
            />
            <SheetContent side="right" className="glass-card border-l border-white/20 p-8">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-gradient text-3xl font-black">EduVerse AI</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`p-4 text-lg font-bold rounded-2xl transition-all ${
                      pathname === link.href
                        ? "bg-edu-gradient text-white shadow-lg"
                        : "text-muted-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto pt-8 border-t border-zinc-200 dark:border-zinc-800 space-y-4">
                <Button className="w-full h-14 rounded-2xl bg-edu-gradient border-none font-bold text-lg shadow-lg">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
