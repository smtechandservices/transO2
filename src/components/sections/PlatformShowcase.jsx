"use client";

import { useState } from "react";
import * as Icons from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MODULES, IMG } from "@/data/site";

const Icon = ({ name, className }) => {
  const C = Icons[name] || Icons.Sparkles;
  return <C className={className} />;
};

const VIEWS = [
  { id: "render", label: "3D Render", img: IMG.platformHero },
  { id: "top", label: "Rooftop Layout", img: IMG.platformTop },
  { id: "side", label: "Side Profile", img: IMG.platformSide },
  { id: "front", label: "Intake / Nose", img: IMG.platformFront },
  { id: "detail", label: "Cooling Detail", img: IMG.platformDetail },
];

export const PlatformShowcase = () => {
  const [view, setView] = useState("render");
  const [active, setActive] = useState(0);
  const module = MODULES[active];
  const current = VIEWS.find((v) => v.id === view);

  return (
    <div data-testid="platform-showcase">
      {/* View tabs */}
      <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
        {VIEWS.map((v) => (
          <button
            key={v.id}
            onClick={() => setView(v.id)}
            data-testid={`platform-view-${v.id}`}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              view === v.id ? "bg-slate-900 text-white shadow-soft" : "glass-strong text-slate-600 hover:text-slate-900"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Image viewer */}
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-hover">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-3">
            <span className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Icons.ScanSearch className="h-4 w-4 text-emerald-600" /> Integrated Environmental Resource Platform (IERP)
            </span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
              Concept Render
            </span>
          </div>
          <div className="relative bg-gradient-to-b from-secondary/40 to-white p-3">
            <AnimatePresence mode="wait">
              <motion.img
                key={view}
                src={current.img}
                alt={current.label}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full rounded-2xl object-contain"
                data-testid="platform-view-image"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Module explorer */}
        <div className="flex flex-col rounded-[2rem] border border-slate-100 bg-white p-6 shadow-soft sm:p-8">
          <h3 className="font-display text-lg font-bold text-slate-900">Explore the 11 modules</h3>
          <p className="mt-1 text-sm text-slate-500">Select a sub-system to see its role and operating principle.</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {MODULES.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setActive(i)}
                data-testid={`platform-module-chip-${i}`}
                className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold transition-all ${
                  active === i ? "bg-emerald-600 text-white shadow-soft" : "bg-secondary text-slate-500 hover:bg-emerald-50 hover:text-emerald-700"
                }`}
                title={m.name}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mt-6 flex-1 rounded-2xl bg-secondary/50 p-6"
              data-testid="platform-module-detail"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <Icon name={module.icon} className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-emerald-600">Module {active + 1}</span>
                  <h4 className="font-display text-base font-bold leading-tight text-slate-900">{module.name}</h4>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{module.short}</p>
              <div className="mt-4 rounded-xl border border-emerald-100 bg-white p-4 text-[13px] leading-relaxed text-emerald-800">
                <span className="font-semibold">Operating principle — </span>{module.principle}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
