"use client";

import { UserPlus } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Reveal } from "@/components/common/Reveal";
import { ADVISORS } from "@/data/site";

export default function Advisory() {
  return (
    <div data-testid="advisory-page">
      <PageHeader
        eyebrow="Strategic Advisory Board"
        title="Decades of engineering and industrial leadership"
        subtitle="TransO2 is guided by distinguished leaders across renewable energy, engineering, manufacturing strategy and sustainable infrastructure."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          {ADVISORS.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.05}>
              <article
                data-testid={`advisor-card-${i}`}
                className="grid gap-8 rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-soft sm:p-12 lg:grid-cols-[280px_1fr]"
              >
                {/* Portrait / identity */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-[2rem] bg-gradient-to-br from-emerald-500 via-cyan-500 to-sky-500 text-white shadow-hover">
                    <span className="font-display text-5xl font-extrabold">{a.initials}</span>
                    <span className="absolute inset-0 rounded-[2rem] ring-1 ring-white/40" />
                  </div>
                  <h2 className="mt-6 font-display text-xl font-extrabold tracking-tight text-slate-900">{a.name}</h2>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-emerald-700">{a.role}</p>
                  <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
                    {a.badges.map((b) => (
                      <span key={b} className="rounded-full border border-slate-100 bg-secondary/70 px-3 py-1 text-xs font-medium text-slate-600">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div className="lg:border-l lg:border-slate-100 lg:pl-10">
                  <div className="space-y-4 text-[15px] leading-relaxed text-slate-600">
                    {a.bio.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Reserved placeholders */}
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  data-testid={`advisor-placeholder-${i}`}
                  className="flex items-center gap-5 rounded-[2rem] border border-dashed border-slate-200 bg-secondary/40 p-8"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-slate-300 shadow-soft">
                    <UserPlus className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-500">Reserved for a future advisor</h3>
                    <p className="mt-1 text-sm text-slate-400">Our advisory board continues to grow across climate, mobility and technology.</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
