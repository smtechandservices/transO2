"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Reveal";
import { PARTNER_CATEGORIES, COLLAB_FRAMEWORK } from "@/data/site";

const Icon = ({ name, className }) => {
  const C = Icons[name] || Icons.Sparkles;
  return <C className={className} />;
};

const CONFIDENCE = [
  { title: "Systems thinking", text: "A modular architecture engineered as a platform, not a single product.", icon: "Network" },
  { title: "Transparent communication", text: "Conservative modelling, clear assumptions, and honest distinction between concept and validated work.", icon: "ShieldCheck" },
  { title: "Interdisciplinary depth", text: "Engineering, AI, sensors, thermal systems, sustainability and manufacturing under one framework.", icon: "Layers" },
  { title: "India-origin, global outlook", text: "Built for Indian Railways' scale and Net-Zero 2030 ambition, designed to travel worldwide.", icon: "Globe2" },
];

export default function Partners() {
  return (
    <div data-testid="partners-page">
      <PageHeader
        eyebrow="Partnerships"
        title="Build an enduring platform with us"
        subtitle="TransO2 seeks collaborators across engineering, research, industry and government to advance Environmental Infrastructure Engineering. We describe collaboration opportunities openly — partners are named only when confirmed."
      />

      {/* Collaboration framework */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Collaboration Framework" title="Structured pathways for engagement" />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {COLLAB_FRAMEWORK.map((c) => (
              <StaggerItem key={c.title}>
                <div className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-hover">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-slate-900">{c.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-slate-500">
                        <Icons.Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{it}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="bg-secondary/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Collaboration Ecosystem"
            title="The organisations we aim to work with"
            subtitle="A cross-sector ecosystem spanning operators, manufacturers, researchers, technologists and public innovation programmes."
          />
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {PARTNER_CATEGORIES.map((c) => (
              <Reveal key={c}>
                <span className="rounded-full border border-slate-100 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-soft">{c}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Confidence */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Why Engage" title="Confidence through engineering integrity" />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CONFIDENCE.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-12 text-center">
            <Link href="/contact" data-testid="partners-cta" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-hover">
              Engage with TransO2 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
