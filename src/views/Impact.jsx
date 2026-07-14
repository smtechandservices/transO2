"use client";

import * as Icons from "lucide-react";
import {
  AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell, BarChart, Bar,
} from "recharts";
import { PageHeader } from "@/components/common/PageHeader";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Reveal";
import { IMPACT_STATS, CARBON_CREDIT, NATIONAL_MATH } from "@/data/site";
import { IMPACT_DATA } from "@/data/impact";

const COLORS = ["#10b981", "#06b6d4", "#0ea5e9", "#34d399"];

const Icon = ({ name, className }) => {
  const C = Icons[name] || Icons.Sparkles;
  return <C className={className} />;
};

const SUSTAINABILITY = [
  { title: "Carbon Accounting", text: "Auditable quantification of captured CO₂ across the fleet.", icon: "Calculator" },
  { title: "Environmental Reporting", text: "ESG-aligned reporting from continuous, validated telemetry.", icon: "FileBarChart" },
  { title: "Digital Twin", text: "A living model backing every environmental claim.", icon: "Boxes" },
  { title: "Lifecycle Analysis", text: "Environmental value measured across the asset lifecycle.", icon: "Repeat" },
  { title: "Circular Economy", text: "Captured carbon and harvested water prepared for reuse.", icon: "Recycle" },
  { title: "Climate Impact", text: "Contribution to net-zero pathways, made measurable.", icon: "Target" },
];

export default function Impact() {
  const data = IMPACT_DATA;

  return (
    <div data-testid="impact-page">
      <PageHeader
        eyebrow="Environmental Impact"
        title="Measurable environmental value"
        subtitle="What TransO2 is engineered to deliver at India national-scale deployment across railways, metros, freight and urban buses. Figures are illustrative engineering projections from stated per-unit assumptions — not audited results."
      />

      {/* KPI grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {IMPACT_STATS.map((s) => (
              <StaggerItem key={s.label}>
                <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-soft transition-all hover:shadow-hover">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-6 tabular text-4xl font-extrabold text-slate-900">{s.value}</div>
                  <div className="mt-1 text-sm font-medium text-slate-600">{s.label}</div>
                  <div className="text-xs text-slate-400">{s.unit}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Carbon credit banner */}
      <section className="pb-4">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-600 via-emerald-600 to-cyan-600 p-10 shadow-hover sm:p-14" data-testid="carbon-credit-banner">
              <div className="pointer-events-none absolute inset-0 grid-faint opacity-20" />
              <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_1.3fr]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
                    Carbon Credit Opportunity
                  </span>
                  <div className="mt-5 tabular text-5xl font-extrabold text-white sm:text-6xl">{CARBON_CREDIT.headline}</div>
                  <p className="mt-3 text-base font-medium text-white/80">{CARBON_CREDIT.sub}</p>
                </div>
                <p className="text-[15px] leading-relaxed text-white/85">{CARBON_CREDIT.detail}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft" data-testid="impact-area-chart">
                <h3 className="font-display text-lg font-bold text-slate-900">Deployment ramp</h3>
                <p className="text-sm text-slate-500">Cumulative CO₂ captured (Mt/yr) and carbon-credit value (₹ crore) as the fleet scales</p>
                <div className="mt-6 h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data?.deployment_ramp || []}>
                      <defs>
                        <linearGradient id="co2g" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10b981" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="waterg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.35} />
                          <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                      <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                      <YAxis yAxisId="l" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                      <YAxis yAxisId="r" orientation="right" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ borderRadius: 16, border: "1px solid #e2e8f0", boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }} />
                      <Area yAxisId="l" type="monotone" dataKey="co2" name="CO₂ (Mt/yr)" stroke="#10b981" strokeWidth={2.5} fill="url(#co2g)" />
                      <Area yAxisId="r" type="monotone" dataKey="credits_cr" name="Credits (₹ cr)" stroke="#0ea5e9" strokeWidth={2.5} fill="url(#waterg)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-soft" data-testid="impact-pie-chart">
                <h3 className="font-display text-lg font-bold text-slate-900">Conservative modelling</h3>
                <p className="text-sm text-slate-500">Headlined at 50% capacity — with equal untapped upside</p>
                <div className="mt-4 h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={data?.capacity_split || []} dataKey="value" nameKey="name" innerRadius={52} outerRadius={80} paddingAngle={3}>
                        {(data?.capacity_split || []).map((_, i) => (
                          <Cell key={i} fill={COLORS[i % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: 16, border: "1px solid #e2e8f0" }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 space-y-2">
                  {(data?.capacity_split || []).map((f, i) => (
                    <div key={f.name} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-slate-600">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
                        {f.name}
                      </span>
                      <span className="tabular font-semibold text-slate-900">{f.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-6">
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft" data-testid="impact-bar-chart">
              <h3 className="font-display text-lg font-bold text-slate-900">CO₂ captured by capacity scenario</h3>
              <p className="text-sm text-slate-500">Million tonnes per year — from conservative to full deployment</p>
              <div className="mt-6 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={(data?.capacity_scenarios || []).map((s) => ({ ...s, label: `${s.capacity_pct}%` }))}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{ fill: "#f0fdf4" }} contentStyle={{ borderRadius: 16, border: "1px solid #e2e8f0" }} />
                    <Bar dataKey="co2_mt" name="Mt CO₂ / yr" fill="#06b6d4" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* National calculation / methodology */}
      <section className="py-16 sm:py-20" data-testid="fleet-assumptions">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="The Calculation"
            title="How the national figure is built"
            subtitle="Transparent, unit-level math for Indian Railways — headlined at a conservative 50% capacity, with full-potential upside shown clearly."
          />
          <Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
              <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-soft">
                {NATIONAL_MATH.map((row, i) => (
                  <div
                    key={row.metric}
                    className={`flex items-center justify-between gap-4 px-6 py-4 text-sm sm:px-8 ${
                      i === NATIONAL_MATH.length - 1 ? "bg-emerald-50/70" : i % 2 ? "bg-secondary/40" : "bg-white"
                    }`}
                  >
                    <span className="text-slate-600">{row.metric}</span>
                    <span className={`tabular text-right font-bold ${i >= NATIONAL_MATH.length - 2 ? "text-emerald-700" : "text-slate-900"}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-6">
                <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-soft">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Every single day</div>
                  <div className="mt-2 tabular text-4xl font-extrabold text-slate-900">~13,500 t</div>
                  <div className="text-sm text-slate-500">of CO₂ captured across the network at 50% capacity</div>
                </div>
                <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-cyan-50 p-8 shadow-soft">
                  <div className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Nature equivalent</div>
                  <div className="mt-2 tabular text-4xl font-extrabold text-emerald-700">~224 million</div>
                  <div className="text-sm text-slate-600">mature trees' worth of annual CO₂ absorption</div>
                </div>
              </div>
            </div>
          </Reveal>
          <p className="mt-6 text-center text-xs text-slate-400">
            Basis: ~13,500 trains/day × 20 coaches × 100 kg CO₂/coach-trip × 365 days × 50% capacity factor. Full potential ≈ 9.86 Mt/yr. Illustrative engineering projection.
          </p>
        </div>
      </section>

      {/* Sustainability */}
      <section className="relative overflow-hidden bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Sustainability"
            title="Outcomes you can measure, report and audit"
            subtitle="Environmental value is only meaningful if it is verifiable. Every claim is backed by continuous telemetry and a digital twin."
          />
          <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {SUSTAINABILITY.map((s) => (
              <StaggerItem key={s.title}>
                <div className="h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-hover">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </div>
  );
}
