"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LIFECYCLE } from "@/data/site";
import { SectionHeading } from "@/components/common/SectionHeading";

export const Lifecycle = () => {
  const [active, setActive] = useState(0);
  const n = LIFECYCLE.length;
  const radius = 210;

  return (
    <section data-testid="lifecycle-section" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-70" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Environmental Lifecycle"
          title="Every journey generates environmental value"
          subtitle="A continuous cycle transforms motion into measurable outcomes — captured, purified, harvested, managed, reused, optimized and sustained."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Circular diagram */}
          <div className="relative mx-auto aspect-square w-full max-w-[480px]">
            <div className="absolute inset-0 rounded-full border border-emerald-100" />
            <div className="absolute inset-8 rounded-full border border-dashed border-cyan-100 animate-spin-slow" />
            <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full">
              <circle cx="250" cy="250" r="210" fill="none" stroke="url(#lc)" strokeWidth="1.5" opacity="0.4" />
              <defs>
                <linearGradient id="lc" x1="0" y1="0" x2="500" y2="500">
                  <stop stopColor="#10b981" />
                  <stop offset="1" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full glass-strong text-center shadow-soft">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-emerald-600">Step {active + 1}</span>
              <span className="mt-1 font-display text-2xl font-bold text-slate-900">{LIFECYCLE[active].step}</span>
            </div>

            {LIFECYCLE.map((item, i) => {
              const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + (radius / 4.8) * Math.cos(angle);
              const y = 50 + (radius / 4.8) * Math.sin(angle);
              const Icon = Icons[item.icon] || Icons.Leaf;
              const isActive = i === active;
              return (
                <button
                  key={item.step}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  data-testid={`lifecycle-node-${item.step.toLowerCase()}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all ${
                      isActive
                        ? "border-emerald-400 bg-emerald-600 text-white shadow-hover"
                        : "border-slate-100 bg-white text-slate-500 shadow-soft"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail */}
          <div className="space-y-3">
            {LIFECYCLE.map((item, i) => {
              const Icon = Icons[item.icon] || Icons.Leaf;
              const isActive = i === active;
              return (
                <motion.button
                  key={item.step}
                  onMouseEnter={() => setActive(i)}
                  className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all ${
                    isActive ? "border-emerald-200 bg-white shadow-soft" : "border-transparent bg-white/40 hover:bg-white/70"
                  }`}
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-600"}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-display text-base font-bold text-slate-900">{item.step}</div>
                    <div className="text-sm text-slate-500">{item.text}</div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
