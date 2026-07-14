"use client";

import * as Icons from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Reveal";
import { APPLICATIONS, FUTURE_EXPANSION } from "@/data/site";

const Icon = ({ name, className }) => {
  const C = Icons[name] || Icons.Sparkles;
  return <C className={className} />;
};

export default function Applications() {
  return (
    <div data-testid="applications-page">
      <PageHeader
        eyebrow="Applications"
        title="Engineered for railways. Designed to expand."
        subtitle="A modular architecture initially focused on railway transportation, with a clear path toward selected mobility and industrial sectors."
      />

      {/* Core applications */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-6">
          {APPLICATIONS.map((a, i) => (
            <Reveal key={a.id}>
              <div className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="overflow-hidden rounded-[2rem] border border-white/60 shadow-hover">
                  <img src={a.img} alt={a.name} className="aspect-[16/10] w-full object-cover" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {a.tag}
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900">{a.name}</h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{a.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Future expansion */}
      <section className="relative overflow-hidden bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Future Expansion"
            title="Visionary, yet technically grounded"
            subtitle="The environmental platform is engineered to extend beyond railways into high-impact mobility and industrial applications."
          />
          <Stagger className="mt-16 grid gap-6 lg:grid-cols-3">
            {FUTURE_EXPANSION.map((f) => (
              <StaggerItem key={f.name}>
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-hover">
                  {f.img && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={f.img} alt={f.name} className="h-full w-full object-cover" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 text-white">
                      <Icon name={f.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-bold text-slate-900">{f.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">{f.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </div>
  );
}
