"use client";

import { Reveal } from "@/components/common/Reveal";

export const SectionHeading = ({ eyebrow, title, subtitle, align = "center", light = false }) => {
  const isCenter = align === "center";
  return (
    <div className={`${isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}`}>
      {eyebrow && (
        <Reveal>
          <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${light ? "bg-white/15 text-white" : "bg-emerald-50 text-emerald-700"}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={`mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${light ? "text-white" : "text-slate-900"}`}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? "text-white/70" : "text-slate-600"}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
};
