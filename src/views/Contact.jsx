"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Send, Building2, Globe2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/common/PageHeader";
import { Reveal } from "@/components/common/Reveal";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { BRAND } from "@/data/site";

const CATEGORIES = [
  "Investor Inquiry",
  "Research Collaboration",
  "OEM Partnership",
  "Government Engagement",
  "Media Inquiry",
  "General Contact",
];

const AUDIENCE = [
  "Government Authorities", "Indian Railways", "Metro Rail Corporations",
  "Global Railway Operators", "Technology Companies", "OEM Partners",
  "ESG Investors", "Climate Funds", "Research Institutions",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", organization: "", category: "General Contact", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    toast.success("Thank you. Your message has been received.");
    setForm({ name: "", email: "", organization: "", category: "General Contact", message: "" });
  };

  return (
    <div data-testid="contact-page">
      <PageHeader
        eyebrow="Contact"
        title="Let's engineer the future together"
        subtitle="India-first identity, global outlook. We welcome conversations with operators, partners, investors and researchers worldwide."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            {/* Left: info + map */}
            <Reveal>
              <div className="flex h-full flex-col gap-6">
                <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-soft">
                  <a href={`mailto:${BRAND.email}`} data-testid="contact-email-link" className="flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-secondary">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Email</div>
                      <div className="font-medium text-slate-800">{BRAND.email}</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Headquarters</div>
                      <div className="font-medium text-slate-800">India — serving partners globally</div>
                    </div>
                  </div>
                </div>

                {/* Global connectivity visual — India at the centre */}
                <div className="relative flex-1 overflow-hidden rounded-[2rem] border border-slate-100 bg-gradient-to-b from-white to-secondary/60 p-8 shadow-soft">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <Globe2 className="h-4 w-4 text-emerald-600" /> Global reach, engineered in India
                  </div>
                  <div className="relative mt-4 flex justify-center">
                    <svg viewBox="0 0 500 300" className="w-full max-w-md" role="img" aria-label="TransO2 connectivity — India at the centre of a global network">
                      <defs>
                        <linearGradient id="globe" x1="0" y1="0" x2="500" y2="300" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#10b981" />
                          <stop offset="1" stopColor="#0ea5e9" />
                        </linearGradient>
                      </defs>
                      {/* Concentric globe */}
                      <circle cx="250" cy="150" r="118" fill="none" stroke="url(#globe)" strokeWidth="1.2" opacity="0.35" />
                      <circle cx="250" cy="150" r="84" fill="none" stroke="#94a3b8" strokeWidth="0.8" opacity="0.25" />
                      <circle cx="250" cy="150" r="48" fill="none" stroke="#94a3b8" strokeWidth="0.8" opacity="0.25" />
                      {/* Latitude / longitude */}
                      {[38, 78, 108].map((ry, i) => (
                        <ellipse key={i} cx="250" cy="150" rx="118" ry={ry} fill="none" stroke="#cbd5e1" strokeWidth="0.7" opacity="0.4" />
                      ))}
                      {[38, 78, 108].map((rx, i) => (
                        <ellipse key={`v${i}`} cx="250" cy="150" rx={rx} ry="118" fill="none" stroke="#cbd5e1" strokeWidth="0.7" opacity="0.4" />
                      ))}
                      {/* Connection arcs to global hubs */}
                      {[
                        { x: 250 + 118 * Math.cos((-140 * Math.PI) / 180), y: 150 + 118 * Math.sin((-140 * Math.PI) / 180) },
                        { x: 250 + 118 * Math.cos((-40 * Math.PI) / 180), y: 150 + 118 * Math.sin((-40 * Math.PI) / 180) },
                        { x: 250 + 118 * Math.cos((60 * Math.PI) / 180), y: 150 + 118 * Math.sin((60 * Math.PI) / 180) },
                        { x: 250 + 118 * Math.cos((160 * Math.PI) / 180), y: 150 + 118 * Math.sin((160 * Math.PI) / 180) },
                        { x: 250 + 118 * Math.cos((-90 * Math.PI) / 180), y: 150 + 118 * Math.sin((-90 * Math.PI) / 180) },
                      ].map((h, i) => (
                        <g key={i}>
                          <path
                            d={`M250 150 Q ${(250 + h.x) / 2 + (h.y - 150) * 0.25} ${(150 + h.y) / 2 - (h.x - 250) * 0.25} ${h.x} ${h.y}`}
                            fill="none" stroke="#06b6d4" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.6" className="flow-line"
                          />
                          <circle cx={h.x} cy={h.y} r="4" fill="#0ea5e9" />
                          <circle cx={h.x} cy={h.y} r="4" fill="#0ea5e9" opacity="0.3" className="animate-ping" style={{ transformOrigin: `${h.x}px ${h.y}px` }} />
                        </g>
                      ))}
                      {/* India node at centre */}
                      <circle cx="250" cy="150" r="20" fill="#10b981" opacity="0.15" className="animate-ping" style={{ transformOrigin: "250px 150px" }} />
                      <circle cx="250" cy="150" r="8" fill="url(#globe)" />
                      <text x="250" y="182" textAnchor="middle" className="fill-slate-800" style={{ fontSize: 13, fontWeight: 700 }}>India</text>
                    </svg>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {AUDIENCE.map((a) => (
                      <span key={a} className="rounded-full border border-slate-100 bg-white px-3 py-1 text-[11px] font-medium text-slate-500">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={0.1}>
              <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-soft sm:p-10">
                {sent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex h-full flex-col items-center justify-center py-16 text-center" data-testid="contact-success">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold text-slate-900">Message received</h3>
                    <p className="mt-3 max-w-sm text-slate-500">Thank you for reaching out to TransO2. Our team will respond to your enquiry shortly.</p>
                    <button onClick={() => setSent(false)} data-testid="contact-send-another" className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600">
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={submit} className="space-y-5" data-testid="contact-form">
                    <h3 className="font-display text-xl font-bold text-slate-900">Send us a message</h3>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">Full name</label>
                        <input required value={form.name} onChange={update("name")} data-testid="contact-name" className="mt-2 w-full rounded-2xl border border-slate-200 bg-secondary/40 px-4 py-3 text-sm text-slate-800 outline-none transition-all focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">Email</label>
                        <input required type="email" value={form.email} onChange={update("email")} data-testid="contact-email-input" className="mt-2 w-full rounded-2xl border border-slate-200 bg-secondary/40 px-4 py-3 text-sm text-slate-800 outline-none transition-all focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100" placeholder="you@organisation.com" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">Organization</label>
                      <div className="relative mt-2">
                        <Building2 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input value={form.organization} onChange={update("organization")} data-testid="contact-organization" className="w-full rounded-2xl border border-slate-200 bg-secondary/40 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition-all focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100" placeholder="Company / authority (optional)" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">I represent</label>
                      <Select value={form.category} onValueChange={(v) => setForm((f) => ({ ...f, category: v }))}>
                        <SelectTrigger data-testid="contact-category" className="mt-2 h-auto rounded-2xl border-slate-200 bg-secondary/40 px-4 py-3 text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {CATEGORIES.map((c) => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">Message</label>
                      <textarea required rows={4} value={form.message} onChange={update("message")} data-testid="contact-message" className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-secondary/40 px-4 py-3 text-sm text-slate-800 outline-none transition-all focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100" placeholder="Tell us how you'd like to collaborate…" />
                    </div>
                    <button type="submit" data-testid="contact-submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-hover disabled:opacity-60">
                      Send message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
