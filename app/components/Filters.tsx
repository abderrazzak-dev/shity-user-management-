"use client";

import { ChevronDown, Filter, Search } from "lucide-react";

export default function Filters() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-12">
      <div className="relative flex-1 group">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-purple-400 transition-colors"
          size={18}
        />
        <input
          type="text"
          placeholder="Deep search identity database..."
          className="w-full bg-white/2 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:bg-white/5 transition-all"
        />
      </div>
      <div className="flex gap-2">
        <div className="relative">
          <select className="appearance-none bg-white/2 border border-white/5 rounded-2xl py-4 pl-6 pr-12 text-sm font-bold text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 cursor-pointer">
            <option>Filter Role</option>
          </select>
          <ChevronDown
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600"
            size={16}
          />
        </div>
        <div className="relative">
          <select className="appearance-none bg-white/2 border border-white/5 rounded-2xl py-4 pl-6 pr-12 text-sm font-bold text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 cursor-pointer">
            <option>Filter Social</option>
          </select>
          <Filter
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600"
            size={16}
          />
        </div>
      </div>
    </div>
  );
}
