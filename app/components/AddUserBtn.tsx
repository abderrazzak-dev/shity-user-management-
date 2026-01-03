"use client";

import { Plus } from "lucide-react";

export default function AddUserBtn() {
  return (
    <button className="fixed bottom-8 right-8 z-50 group flex items-center gap-3 bg-purple-600 hover:bg-purple-500 text-white px-6 py-4 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 border border-purple-400/30">
      <div className="relative">
        <div className="absolute inset-0 bg-white blur-md opacity-0 group-hover:opacity-20 transition-opacity" />
        <Plus size={20} strokeWidth={3} className="relative" />
      </div>
      <span className="text-xs font-black uppercase tracking-[0.2em]">
        User
      </span>
    </button>
  );
}
