"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Trash2, 
  BrainCircuit, 
  Map, 
  Lightbulb, 
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "ai";
  content: string;
}

const suggestedPrompts = [
  { text: "Generate a Web Dev Roadmap", icon: <Map size={16} /> },
  { text: "Explain Quantum Physics simply", icon: <BrainCircuit size={16} /> },
  { text: "Suggest AI/ML resources", icon: <Lightbulb size={16} /> },
  { text: "How to master Data Structures?", icon: <Sparkles size={16} /> },
];

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "# Welcome to EduVerse AI\n\nHello! I am your professional study partner. How can I accelerate your learning journey today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (behavior: "smooth" | "auto" = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    if (messages.length > 1 || isLoading) {
      scrollToBottom();
    }
  }, [messages.length, isLoading]);

  const handleSend = async (content: string = input) => {
    if (!content.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      const data = await response.json();
      if (data.text) {
        setMessages((prev) => [...prev, { role: "ai", content: data.text }]);
      } else {
        setMessages((prev) => [...prev, { role: "ai", content: "## Error\nI encountered an issue. Please try again." }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", content: "## Connection Error\nPlease check your network connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] w-full px-4 md:px-10 overflow-hidden">
      
      {/* Page Header - Ultra Minimal */}
      <div className="flex items-center justify-between py-3 shrink-0 border-b border-zinc-100 dark:border-white/5 mb-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
            <BrainCircuit size={20} />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight">
              Elite <span className="text-gradient">Neural Hub</span>
            </h1>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest pl-0.5 opacity-60">
              Groq Llama-3.3 70B
            </p>
          </div>
        </div>
        <div className="hidden lg:flex gap-4">
           {suggestedPrompts.slice(0, 3).map(p => (
             <Button 
               key={p.text} 
               variant="ghost" 
               size="sm" 
               onClick={() => handleSend(p.text)} 
               className="rounded-full text-[10px] font-black h-8 px-4 bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5 hover:border-indigo-500/50 transition-all"
             >
                {p.text}
             </Button>
           ))}
        </div>
      </div>

      <div className="flex gap-8 flex-grow overflow-hidden mb-6">
        
        {/* Sidebar - Precision Logic */}
        <div className="hidden lg:flex flex-col w-72 shrink-0 gap-6 h-full overflow-y-auto pr-2 custom-scrollbar">
          <div className="glass-card p-6 rounded-[2.5rem] space-y-4 shrink-0 shadow-xl border-white/50">
            <h3 className="font-black text-[10px] uppercase tracking-widest text-indigo-500 flex items-center gap-2">
              <Sparkles size={14} /> Quick Modules
            </h3>
            <div className="flex flex-col gap-2">
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt.text}
                  onClick={() => handleSend(prompt.text)}
                  className="flex items-center gap-3 text-[10px] font-black p-3.5 rounded-2xl border border-zinc-50 dark:border-white/5 hover:bg-edu-gradient hover:text-white transition-all text-left bg-white dark:bg-black/20 group shadow-sm"
                >
                  <span className="p-2 bg-zinc-50 dark:bg-white/5 rounded-xl group-hover:bg-white/10 shrink-0">
                    {prompt.icon}
                  </span>
                  <span className="leading-snug">{prompt.text}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-[2.5rem] flex-grow shadow-xl border-white/50">
             <div className="flex flex-col gap-6">
                <div>
                   <h4 className="text-[10px] font-black uppercase mb-3 text-muted-foreground pl-2 leading-none">Neural Load</h4>
                   <div className="h-1.5 bg-zinc-100 dark:bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "92%" }}
                        className="h-full bg-edu-gradient" 
                      />
                   </div>
                </div>
                
                <h4 className="font-black text-[10px] uppercase tracking-widest text-muted-foreground pl-2">Engine Status</h4>
                <div className="space-y-3">
                   {['Roadmap Generator', 'Quantum Tutor', 'Code Architect'].map(s => (
                     <div key={s} className="flex items-center justify-between p-3.5 bg-zinc-50/50 dark:bg-white/5 rounded-2xl border border-zinc-100 dark:border-white/5">
                        <span className="text-[11px] font-black">{s}</span>
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Chat Interface - PRECISION FIT */}
        <div className="flex-grow flex flex-col glass-card rounded-[3rem] overflow-hidden border-white/60 dark:border-white/5 shadow-2xl relative h-full">
          
          {/* Messages Area - SOPHISTICATED TYPOGRAPHY */}
          <div className="flex-grow overflow-hidden relative bg-white/20 dark:bg-black/10">
            <ScrollArea className="h-full w-full">
              <div className="px-6 md:px-14 pt-8 pb-56 space-y-10 max-w-5xl mx-auto">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-4 md:gap-10 ${msg.role === "user" ? "flex-row-reverse" : "items-start"}`}
                  >
                    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-[1.8rem] flex items-center justify-center shadow-xl shrink-0 mt-1 border-2 ${
                      msg.role === "user" 
                        ? "bg-zinc-950 text-white border-white/10" 
                        : "bg-white dark:bg-zinc-900 border-indigo-500/10 text-indigo-500"
                    }`}>
                      {msg.role === "user" ? <User size={20} /> : <Bot size={24} className="font-bold" />}
                    </div>
                    
                    <div className={`flex flex-col gap-2 min-w-0 flex-grow ${msg.role === "user" ? "items-end" : "items-start"}`}>
                       <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/50 px-4">
                          {msg.role === "user" ? "Identity Verified" : "EduVerse Brain v3"}
                       </span>
                       <div className={`p-6 md:p-8 rounded-[3rem] text-sm md:text-base md:text-lg leading-[1.8] shadow-lg border ${
                          msg.role === "user" 
                            ? "bg-indigo-600 text-white rounded-tr-none border-indigo-500 shadow-indigo-600/10" 
                            : "bg-white/95 dark:bg-zinc-900/95 border-white dark:border-white/5 rounded-tl-none shadow-zinc-200/40 dark:shadow-none"
                        }`}>
                          <div className={`prose dark:prose-invert max-w-none text-left font-semibold ${msg.role === "user" ? "[&_*]:text-white" : ""}`}>
                            <ReactMarkdown
                              components={{
                                h1: ({node, ...props}) => <h1 className="text-xl md:text-3xl font-black mb-6 mt-4 tracking-tighter text-indigo-500 leading-tight" {...props} />,
                                h2: ({node, ...props}) => <h2 className="text-lg md:text-xl font-black mb-4 mt-6 tracking-tight border-l-4 border-indigo-500 pl-4 bg-indigo-500/5 py-2 rounded-r-xl" {...props} />,
                                h3: ({node, ...props}) => <h3 className="text-base md:text-lg font-black mb-3 mt-4 text-indigo-400" {...props} />,
                                p: ({node, ...props}) => <p className="mb-4 opacity-95 leading-relaxed last:mb-0" {...props} />,
                                ul: ({node, ...props}) => <ul className="mb-4 space-y-2 list-none p-0" {...props} />,
                                li: ({node, ...props}) => (
                                  <li className="flex gap-3 items-start bg-zinc-50/50 dark:bg-white/5 p-3 rounded-xl border border-zinc-100 dark:border-white/5">
                                     <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                                     <div className="flex-grow text-[13px] md:text-sm">{props.children}</div>
                                  </li>
                                ),
                                strong: ({node, ...props}) => <strong className="font-black text-indigo-500 dark:text-indigo-400" {...props} />
                              }}
                            >
                              {msg.content}
                            </ReactMarkdown>
                          </div>
                       </div>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex gap-6 animate-pulse items-center p-6">
                    <div className="w-14 h-14 bg-indigo-500/10 rounded-[1.8rem] border-2 border-indigo-500/5" />
                    <div className="space-y-2 flex-grow">
                       <div className="w-1/4 h-2 bg-zinc-100 dark:bg-white/5 rounded-full" />
                       <div className="w-1/2 h-8 bg-zinc-100 dark:bg-white/5 rounded-2xl" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} className="h-4" />
              </div>
            </ScrollArea>
          </div>

          {/* Input Area - FLOATING ELITE BAR (Optimized Placement) */}
          <div className="absolute bottom-10 left-0 right-0 px-6 md:px-16 pointer-events-none z-20">
            <div className="max-w-4xl mx-auto glass shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)] rounded-[2.5rem] border border-white dark:border-white/10 p-2 flex items-center pointer-events-auto backdrop-blur-3xl">
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                  className="flex-grow flex items-center gap-2"
                >
                  <Input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask your elite study partner..."
                    className="h-14 md:h-16 border-none bg-transparent shadow-none focus-visible:ring-0 text-base md:text-xl font-bold px-8 placeholder:opacity-40"
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/30 flex-shrink-0 transition-transform active:scale-95 group"
                  >
                    <Send size={22} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </form>
            </div>
            <div className="text-center mt-3">
               <span className="text-[7px] font-black uppercase tracking-[0.5em] opacity-30">Neural Engine v3 • Fully Optimized</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
