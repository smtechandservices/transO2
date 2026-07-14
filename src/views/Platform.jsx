"use client";

import * as Icons from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Reveal";
import { PlatformShowcase } from "@/components/sections/PlatformShowcase";
import { INTELLIGENCE, ROADMAP, CO2_LOOP, ENGINEERING_FACTS } from "@/data/site";

const Icon = ({ name, className }) => {
  const C = Icons[name] || Icons.Sparkles;
  return <C className={className} />;
};

export default function Platform() {
  return (
    <div data-testid="platform-page">
      <PageHeader
        eyebrow="Platform Overview"
        title="The environmental engineering platform"
        subtitle="A stunning, interactive engineering platform integrated into the vehicle architecture — manufacturable, modular and intelligent."
      />

      {/* Interactive platform showcase */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <PlatformShowcase />
          </Reveal>
          <p className="mx-auto mt-5 max-w-3xl text-center text-xs text-slate-400">
            Concept renders and General Arrangement drawings of the Integrated Environmental Resource Platform (IERP) — a
            rooftop fitment for the LHB coach within a ~460 mm aerodynamic, RDSO-compliant envelope. Illustrative and subject to detailed engineering.
          </p>
        </div>
      </section>

      {/* Engineering basis */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Engineering Basis"
            title="Real numbers, per coach"
            subtitle="The platform is sized against concrete, physically grounded design assumptions for every coach it is fitted to."
          />
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {ENGINEERING_FACTS.map((f) => (
              <StaggerItem key={f.label}>
                <div className="flex h-full items-start gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="tabular text-2xl font-extrabold text-slate-900">{f.value}</div>
                    <div className="text-sm font-semibold text-slate-700">{f.label}</div>
                    <div className="text-xs text-slate-400">{f.unit}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Onboard CO2 utilisation & safety loop */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 mesh-bg opacity-70" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Onboard CO₂ Loop & Safety"
            title="Captured carbon becomes a resource"
            subtitle="Instead of being released, captured CO₂ is put to work inside the coach — for thermal management and for a clean, fast fire-suppression network."
          />
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <Stagger className="space-y-4">
              {CO2_LOOP.map((c) => (
                <StaggerItem key={c.title}>
                  <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                      <Icon name={c.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-display text-base font-bold text-slate-900">{c.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">{c.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-[2rem] border border-white/60 shadow-hover">
                <img src="/generated/co2_molecules.png" alt="CO2 captured and utilised onboard" className="w-full object-cover" />
                <div className="glass-strong p-6">
                  <h4 className="font-display text-lg font-bold text-slate-900">A closed environmental loop</h4>
                  <p className="mt-2 text-sm text-slate-500">
                    Capture → thermal utilisation (R744) → fire-safety network → managed storage → depot offload.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* Platform intelligence */}
      <section className="relative overflow-hidden bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Platform Intelligence"
            title="From sensor to insight"
            subtitle="Edge AI, sensor fusion and a cloud platform combine to create a living environmental model of every vehicle in the fleet."
          />
          <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
            {INTELLIGENCE.map((it) => (
              <StaggerItem key={it.title}>
                <div className="h-full rounded-3xl border border-slate-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-hover">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-sky-500 text-white">
                    <Icon name={it.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-[15px] font-bold text-slate-900">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{it.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Technology roadmap */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Technology Roadmap"
            title="From concept to global deployment"
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ROADMAP.map((r, i) => (
              <Reveal key={r.phase} delay={i * 0.06}>
                <div className="relative h-full rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <span className="tabular flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-emerald-200 to-transparent" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-900">{r.phase}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
