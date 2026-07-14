"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Reveal";
import { CHALLENGES, IMG } from "@/data/site";

const Icon = ({ name, className }) => {
  const C = Icons[name] || Icons.Sparkles;
  return <C className={className} />;
};

export default function Vision() {
  return (
    <div data-testid="vision-page">
      <PageHeader
        eyebrow="Our Story"
        title="Moving beyond transportation"
        subtitle="Transportation has always been designed to move people. TransO2 designs transportation to improve the planet while moving people."
      />

      {/* Our story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] border border-white/60 shadow-hover">
                <img src={IMG.landscape} alt="A vast lush green landscape representing a sustainable future" className="w-full object-cover" />
              </div>
            </Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Why now"
                title="Environmental infrastructure is the next evolution of transport"
              />
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-600">
                <p>
                  For over a century, transportation has been engineered around a single purpose: movement.
                  Yet every vehicle in motion interacts continuously with vast volumes of air, thermal energy
                  and atmospheric moisture.
                </p>
                <p>
                  TransO2 reframes these interactions as an opportunity. By engineering intelligent environmental
                  systems directly into rolling stock, transportation becomes a platform for environmental value —
                  capturing carbon, purifying air, harvesting water, optimizing energy and producing environmental
                  intelligence.
                </p>
                <p className="font-medium text-slate-800">
                  Every railway vehicle becomes environmental infrastructure — not simply transportation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global challenge */}
      <section className="relative overflow-hidden bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="The Global Challenge"
            title="Why transportation infrastructure must evolve"
            subtitle="The defining challenges of our era are environmental. Infrastructure that only emits less is no longer enough — assets must actively create environmental value."
          />
          <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
            {CHALLENGES.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-hover">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Long term vision */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading
            eyebrow="Long-Term Vision"
            title="An integrated environmental platform for the world"
            subtitle="TransO2 exists to transform railway vehicles into intelligent environmental infrastructure — extending toward a platform that can serve transportation and industrial infrastructure worldwide."
          />
          <Reveal delay={0.15}>
            <Link href="/platform" className="mt-10 inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-hover">
              Explore the platform <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
