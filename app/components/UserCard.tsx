"use client";

import {
  Clock,
  Edit3,
  Heart,
  LogIn,
  Sparkles,
  Trash2,
  Users2,
} from "lucide-react";

type userProps = {
  id: number;
  fname: string;
  lname: string;
  email: string;
  age: number;
  role: string;
  isFriend: boolean;
  mutual: string;
  joinedAgo: number;
};
export default function UserCard({
  id,
  fname,
  lname,
  email,
  age,
  role,
  isFriend,
  mutual,
  joinedAgo,
}: userProps) {
  return (
    <div
      key={id}
      className="group relative bg-white/3 border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-white/5 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 shadow-2xl shadow-black"
    >
      {/* Mutual Friend Banner */}
      {isFriend && (
        <div className="bg-linear-to-r from-pink-500/20 to-purple-500/20 px-4 py-2 border-b border-white/5 flex items-center gap-2">
          <Sparkles size={12} className="text-pink-400" />
          <span className="text-[10px] font-black text-pink-300 uppercase tracking-tighter italic">
            Connected via {mutual}
          </span>
        </div>
      )}

      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="relative">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl border ${
                role === "Admin"
                  ? "bg-purple-600 text-white border-purple-400"
                  : "bg-slate-900 text-slate-500 border-white/5"
              }`}
            >
              {fname[0]}
            </div>
            {isFriend && (
              <div className="absolute -bottom-1 -right-1 bg-pink-500 p-1 rounded-full ring-4 ring-[#0a0a14]">
                <Heart size={10} fill="white" className="text-white" />
              </div>
            )}
          </div>
          <span
            className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md tracking-widest ${
              role === "Admin"
                ? "bg-purple-500/20 text-purple-400"
                : "bg-white/5 text-slate-500"
            }`}
          >
            {role}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white tracking-tight">
          {fname} {lname}
        </h3>
        <p className="text-slate-500 text-xs mb-6 truncate">{email}</p>

        {/* Social Logic Replacements */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-black/40 p-3 rounded-2xl border border-white/5 group-hover:border-purple-500/20 transition-colors">
            <Users2
              size={16}
              className={isFriend ? "text-pink-500" : "text-slate-700"}
            />
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase leading-none mb-1">
                Social Circle
              </p>
              <p className="text-xs font-bold text-slate-300">
                {isFriend ? "This user is a friend" : "Global User"}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between px-3 pt-2">
            <div className="flex items-center gap-2 text-slate-500">
              <Clock
                size={12}
                className="text-purple-500 dark:text-purple-400"
              />
              <span className="text-[10px] font-mono uppercase tracking-wider">
                Joined {joinedAgo}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ACTION BAR */}
      <div className="grid grid-cols-4 border-t border-white/5 bg-black/20">
        <button
          title="Toggle Friendship"
          className="p-4 flex justify-center hover:bg-pink-500/10 text-slate-600 hover:text-pink-500 transition-all border-r border-white/5"
        >
          <Heart size={16} fill={isFriend ? "currentColor" : "none"} />
        </button>
        <button
          title="Edit User"
          className="p-4 flex justify-center hover:bg-purple-500/10 text-slate-600 hover:text-purple-400 transition-all border-r border-white/5"
        >
          <Edit3 size={16} />
        </button>
        <button
          title="Assume Control"
          className="p-4 flex justify-center hover:bg-emerald-500/10 text-slate-600 hover:text-emerald-400 transition-all border-r border-white/5"
        >
          <LogIn size={16} />
        </button>
        <button
          title="Wipe User"
          className="p-4 flex justify-center hover:bg-red-500/10 text-slate-600 hover:text-red-500 transition-all"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
