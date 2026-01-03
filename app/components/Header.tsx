"use client";

import { Heart, LogOut, Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#030308]/80 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-600 blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-2 bg-purple-600 rounded-lg shadow-lg shadow-purple-900/40">
              <Zap size={20} className="text-white fill-white" />
            </div>
          </div>
          <h1 className="text-xl font-black text-white tracking-tighter uppercase">
            Nexus<span className="text-purple-500">Core</span>
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 rounded-full border border-purple-500/20">
            <Heart size={14} className="text-pink-500" fill="currentColor" />
            <span className="text-[11px] font-bold text-slate-300">
              Friends: <span className="text-white">128</span>
            </span>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-white leading-none">
                Super Admin
              </p>
              <p className="text-[10px] text-purple-400 font-black uppercase mt-1">
                Status: Active
              </p>
            </div>
            <button className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-xl transition-all text-xs font-black uppercase tracking-widest border border-red-500/20">
              <LogOut size={14} />
              <span className="hidden lg:inline">Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
