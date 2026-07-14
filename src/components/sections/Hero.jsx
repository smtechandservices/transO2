"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Wind, Sparkles, Droplets, Gauge } from "lucide-react";
import { AirParticles } from "@/components/common/AirParticles";
import { CountUp } from "@/components/common/CountUp";
import { HERO_KPIS, IMG } from "@/data/site";

const ICONS = { co2: Wind, air: Sparkles, water: Droplets, energy: Gauge };

export const Hero = () => {
  return (
    <section data-testid="hero-section" className="relative min-h-screen overflow-hidden mesh-bg pt-28">
      <div className="pointer-events-none absolute inset-0 grid-faint opacity-60" />
      <div className="pointer-events-none absolute inset-0">
        <AirParticles density={54} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-10 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-strong px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700 shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Environmental Infrastructure Engineering
          </span>

          <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Engineering the Future of{" "}
            <span className="text-gradient">Environmental Infrastructure</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Transforming railway vehicles into intelligent environmental platforms that capture carbon,
            purify air, harvest water, optimize energy, and create measurable sustainability value
            throughout every journey.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/platform"
              data-testid="cta-explore-platform"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-hover"
            >
              Explore the Platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/vision"
              data-testid="cta-discover-technology"
              className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-soft transition-all hover:shadow-hover"
            >
              <Play className="h-4 w-4 text-emerald-600" /> Discover the Technology
            </Link>
          </div>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-14 max-w-6xl"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-hover">
            <img
              src={IMG.hero}
              alt="Modern railway coach with integrated environmental module travelling through lush green landscape"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/25 via-transparent to-transparent" />
          </div>

          {/* Floating KPI counters */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:absolute lg:-bottom-10 lg:left-1/2 lg:mt-0 lg:w-[92%] lg:-translate-x-1/2 lg:grid-cols-4">
            {HERO_KPIS.map((kpi, i) => {
              const Icon = ICONS[kpi.key];
              return (
                <motion.div
                  key={kpi.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  data-testid={`hero-kpi-${kpi.key}`}
                  className="glass-strong rounded-2xl p-4 shadow-soft"
                >
                  <div className="flex items-center gap-2 text-emerald-600">
                    <Icon className="h-4 w-4" />
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      {kpi.label}
                    </span>
                  </div>
                  <div className="mt-2 tabular text-2xl font-bold text-slate-900 sm:text-3xl">
                    <CountUp value={kpi.value} decimals={kpi.decimals || 0} suffix={kpi.suffix} />
                  </div>
                  <div className="text-[11px] text-slate-400">{kpi.unit}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-24 max-w-6xl px-6 lg:mt-32">
        <p className="text-center text-xs text-slate-400">
          * Indicative annual figures at a conservative 50% national capacity for Indian Railways. See the Impact page for the full methodology and assumptions.
        </p>
      </div>
      <div className="h-12 lg:h-16" />
    </section>
  );
};
