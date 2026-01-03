"use client";

import {
  ChevronDown,
  Fingerprint,
  Heart,
  Mail,
  Save,
  ShieldAlert,
  UserCircle,
  X,
} from "lucide-react";

export default function FormPopup() {
  return (
    <div className="hidden fixed inset-0 bg-[#030308]/95 backdrop-blur-xl z-100 flex items-center justify-center p-4">
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-slate-900/40 border border-white/10 rounded-[3rem] shadow-[0_0_100px_-20px_rgba(168,85,247,0.2)] overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Top Decorative Bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent" />

        {/* Header */}
        <div className="px-10 pt-10 pb-6 flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20">
              <Fingerprint size={28} className="text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase italic">
                Identity Override
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Authorized Session: Admin_04
                </p>
              </div>
            </div>
          </div>
          <button className="p-3 bg-white/5 hover:bg-red-500/20 rounded-2xl text-slate-500 hover:text-red-400 transition-all group">
            <X
              size={20}
              className="group-hover:rotate-90 transition-transform"
            />
          </button>
        </div>

        {/* Form Body */}
        <div className="px-10 py-4 space-y-6">
          {/* Bento Input Group 1: Names */}
          <div className="grid grid-cols-2 gap-5">
            <div className="relative group">
              <label className="absolute -top-2 left-4 px-2 bg-[#0d0d15] text-[10px] font-black text-purple-400 uppercase tracking-widest z-10">
                First Name
              </label>
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-600 group-focus-within:text-purple-500">
                <UserCircle size={18} />
              </div>
              <input
                type="text"
                className="w-full bg-white/2 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:bg-white/5 transition-all"
                placeholder="Aria"
              />
            </div>
            <div className="relative group">
              <label className="absolute -top-2 left-4 px-2 bg-[#0d0d15] text-[10px] font-black text-purple-400 uppercase tracking-widest z-10">
                Last Name
              </label>
              <input
                type="text"
                className="w-full bg-white/2 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:bg-white/5 transition-all"
                placeholder="Zavala"
              />
            </div>
          </div>

          {/* Input Group 2: Contact */}
          <div className="relative group">
            <label className="absolute -top-2 left-4 px-2 bg-[#0d0d15] text-[10px] font-black text-purple-400 uppercase tracking-widest z-10">
              Neural Mail Address
            </label>
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-600 group-focus-within:text-purple-500">
              <Mail size={18} />
            </div>
            <input
              type="email"
              className="w-full bg-white/2 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:bg-white/5 transition-all"
              placeholder="aria.z@nexus.io"
            />
          </div>

          {/* Bento Group 3: Specs */}
          <div className="grid grid-cols-2 gap-5">
            <div className="relative group">
              <label className="absolute -top-2 left-4 px-2 bg-[#0d0d15] text-[10px] font-black text-purple-400 uppercase tracking-widest z-10">
                Age Cycle
              </label>
              <input
                type="number"
                className="w-full bg-white/2 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:bg-white/5 transition-all"
                placeholder="24"
              />
            </div>
            <div className="relative group">
              <label className="absolute -top-2 left-4 px-2 bg-[#0d0d15] text-[10px] font-black text-purple-400 uppercase tracking-widest z-10">
                Access Clearance
              </label>
              <select className="w-full bg-white/2 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 appearance-none cursor-pointer">
                <option className="bg-[#0d0d15]">Admin Clearance</option>
                <option className="bg-[#0d0d15]">Editor Access</option>
                <option className="bg-[#0d0d15]">Base User</option>
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                size={16}
              />
            </div>
          </div>

          {/* Social Connection Toggle - Bento Style */}
          <div className="p-1 rounded-4xl bg-linear-to-r from-purple-500/20 via-pink-500/20 to-transparent">
            <div className="bg-[#0d0d15] rounded-[1.9rem] p-6 flex items-center justify-between border border-white/5">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-pink-500 blur-md opacity-20" />
                  <div className="relative p-3 bg-pink-500/10 rounded-xl text-pink-500 border border-pink-500/20">
                    <Heart size={20} fill="currentColor" />
                  </div>
                </div>
                <div>
                  <span className="block text-sm font-bold text-white tracking-tight">
                    Social Network Status
                  </span>
                  <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                    Mark as Trusted Friend
                  </span>
                </div>
              </div>
              {/* Custom Switch */}
              <div className="w-14 h-7 bg-white/5 rounded-full relative cursor-pointer border border-white/10">
                <div className="absolute right-1 top-1 w-5 h-5 bg-linear-to-tr from-purple-500 to-pink-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-10 flex gap-4 mt-2">
          <button className="flex-1 px-6 py-4 rounded-2xl text-slate-500 font-black uppercase text-[11px] tracking-[0.2em] hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2">
            <ShieldAlert size={16} />
            Abort
          </button>
          <button className="flex-2 bg-white text-black hover:bg-purple-500 hover:text-white px-6 py-4 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/5 group">
            <Save size={16} className="group-hover:animate-bounce" />
            Save Protocol
          </button>
        </div>

        {/* Bottom Decorative Details */}
        <div className="px-10 pb-6 flex justify-between items-center opacity-20">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-1 h-1 bg-purple-500 rounded-full" />
            ))}
          </div>
          <span className="text-[8px] font-mono text-white uppercase tracking-[0.5em]">
            Nexus_Terminal_v4.0
          </span>
        </div>
      </div>
    </div>
  );
}
