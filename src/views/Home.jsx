"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Lifecycle } from "@/components/sections/Lifecycle";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Reveal";
import { HIGHLIGHTS, IMG, MODULES, APPLICATIONS, IMPACT_STATS, PARTNERS } from "@/data/site";

const Icon = ({ name, className }) => {
  const C = Icons[name] || Icons.Sparkles;
  return <C className={className} />;
};

export default function Home() {
  return (
    <div data-testid="home-page">
      <Hero />

      {/* Innovation Highlights */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Innovation Highlights"
            title="A new industrial category: environmental infrastructure"
            subtitle="TransO2 transforms transportation assets into intelligent environmental infrastructure capable of generating measurable environmental value throughout their operational lifecycle."
          />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <StaggerItem key={h.title}>
                <div className="group h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-hover">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-soft">
                    <Icon name={h.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-slate-900">{h.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{h.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Technology Overview / Why TransO2 */}
      <section className="relative overflow-hidden bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Why TransO2"
                title="Railways become environmental infrastructure"
                subtitle="Instead of transporting passengers only, every vehicle becomes a platform that actively improves the planet while it moves."
              />
              <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Carbon Capture Infrastructure",
                  "Air Purification Infrastructure",
                  "Water Harvesting Infrastructure",
                  "Environmental Monitoring Networks",
                  "Climate Intelligence Platforms",
                  "Environmental Resource Systems",
                ].map((t) => (
                  <StaggerItem key={t}>
                    <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft">
                      <Icons.CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                      <span className="text-sm font-medium text-slate-700">{t}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.2}>
                <Link
                  href="/platform"
                  data-testid="home-platform-link"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-600"
                >
                  Explore the platform <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-hover">
                <img src={IMG.cutaway} alt="Engineering cutaway of rooftop environmental module" className="w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Platform modules preview */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Platform Overview"
            title="An integrated environmental engineering platform"
            subtitle="Eleven interoperable modules work together to capture, process and manage environmental value onboard every vehicle."
          />
          <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {MODULES.slice(0, 6).map((m) => (
              <StaggerItem key={m.id}>
                <div className="group h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-soft transition-all hover:border-emerald-100 hover:shadow-hover">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                    <Icon name={m.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-slate-900">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{m.short}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10 text-center">
            <Link href="/platform" className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-semibold text-slate-800 shadow-soft transition-all hover:shadow-hover">
              View all 11 modules & the interactive platform <ArrowRight className="h-4 w-4 text-emerald-600" />
            </Link>
          </div>
        </div>
      </section>

      <Lifecycle />

      {/* Impact preview */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-600 to-cyan-600" />
        <div className="pointer-events-none absolute inset-0 grid-faint opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            light
            eyebrow="Environmental Impact"
            title="Measurable value, at fleet scale"
            subtitle="Illustrative projected impact from a deployed environmental infrastructure fleet."
          />
          <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {IMPACT_STATS.slice(0, 4).map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="rounded-3xl bg-white/10 p-7 backdrop-blur-xl ring-1 ring-white/20">
                  <Icon name={s.icon} className="h-6 w-6 text-white/80" />
                  <div className="mt-5 tabular text-3xl font-extrabold text-white sm:text-4xl">{s.value}</div>
                  <div className="mt-1 text-sm font-medium text-white/70">{s.label}</div>
                  <div className="text-xs text-white/50">{s.unit}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/impact" data-testid="home-impact-link" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition-all hover:shadow-hover">
              See the impact dashboard <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Applications preview */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Applications"
            title="Engineered for railways. Designed to expand."
            subtitle="A modular architecture initially focused on railway transportation, with future expansion into selected mobility and industrial sectors."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {APPLICATIONS.map((a, i) => (
              <Reveal key={a.id} delay={i * 0.08}>
                <Link href="/applications" className="group block overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-soft transition-all hover:shadow-hover">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={a.img} alt={a.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-emerald-700 backdrop-blur">
                      {a.tag}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-bold text-slate-900">{a.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">{a.text}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-y border-slate-100 bg-secondary/50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
            A collaboration ecosystem across
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {PARTNERS.map((p) => (
              <span key={p} className="rounded-full border border-slate-100 bg-white px-5 py-2 text-sm font-medium text-slate-600 shadow-soft">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-100 bg-white p-10 shadow-hover sm:p-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-cyan-100/60 blur-3xl" />
            <div className="relative text-center">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Build the future of environmental infrastructure with us
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
                Whether you operate railways, lead a metro authority, invest in climate, or engineer mobility —
                we would welcome a conversation.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" data-testid="home-cta-contact" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-hover">
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/advisory" className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-soft">
                  Meet the advisory board
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
