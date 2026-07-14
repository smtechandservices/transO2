"use client";

import { motion } from "framer-motion";

export const PageHeader = ({ eyebrow, title, subtitle, children }) => (
  <section className="relative overflow-hidden mesh-bg pt-36 pb-16 sm:pt-40 sm:pb-20">
    <div className="pointer-events-none absolute inset-0 grid-faint opacity-50" />
    <div className="relative mx-auto max-w-5xl px-6 text-center">
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass-strong px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700 shadow-soft"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </div>
  </section>
);
