import React from "react";
import Link from "next/link";
import { GraduationCap, Mail, Play, Sparkles, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-edu-gradient rounded-xl flex items-center justify-center text-white shadow-lg">
                <GraduationCap size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-gradient">
                EduVerse AI
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering students worldwide with AI-driven learning paths, 
              expert courses, and the smartest study assistant on the planet.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white dark:bg-zinc-900 rounded-lg shadow-sm hover:text-indigo-500 transition-colors border border-zinc-200 dark:border-zinc-800">
                <Play size={18} />
              </Link>
              <Link href="#" className="p-2 bg-white dark:bg-zinc-900 rounded-lg shadow-sm hover:text-indigo-500 transition-colors border border-zinc-200 dark:border-zinc-800">
                <Sparkles size={18} />
              </Link>
              <Link href="#" className="p-2 bg-white dark:bg-zinc-900 rounded-lg shadow-sm hover:text-indigo-500 transition-colors border border-zinc-200 dark:border-zinc-800">
                <MessageSquare size={18} />
              </Link>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-bold text-lg mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/courses" className="hover:text-indigo-500 transition-colors">Trending Courses</Link></li>
              <li><Link href="/ai-assistant" className="hover:text-indigo-500 transition-colors">AI Study Assistant</Link></li>
              <li><Link href="/roadmaps" className="hover:text-indigo-500 transition-colors">Learning Roadmaps</Link></li>
              <li><Link href="/features" className="hover:text-indigo-500 transition-colors">Dashboard Features</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-indigo-500 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-indigo-500 transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-indigo-500 transition-colors">Dev Blog</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-500 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">Get the latest EdTech trends and AI updates directly in your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              <button className="p-2 bg-edu-gradient text-white rounded-lg hover:opacity-90 transition-opacity">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2026 EduVerse AI. All rights reserved. Built with ❤️ for future leaders.
          </p>
          <div className="flex gap-8 text-xs text-muted-foreground uppercase tracking-widest font-semibold">
            <Link href="#" className="hover:text-indigo-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-indigo-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
