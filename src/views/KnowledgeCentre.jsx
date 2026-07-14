"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Search, Clock, ArrowRight, FileText, Star, X } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Reveal";
import { KC_MISSION, KC_FILTERS, FAQS } from "@/data/site";

const API = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;

const fmtDate = (d) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

const PubCard = ({ p, large = false, idPrefix = "pub-card" }) => (
  <Link
    href={`/knowledge/${p.id}`}
    data-testid={`${idPrefix}-${p.id}`}
    className={`group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-hover ${large ? "lg:flex-row" : ""}`}
  >
    <div className={`relative overflow-hidden ${large ? "lg:w-1/2" : "aspect-[16/9]"}`}>
      <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-emerald-700 backdrop-blur">
        {p.tag}
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-slate-900/80 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur">
        {p.pub_number}
      </span>
    </div>
    <div className={`flex flex-1 flex-col p-7 ${large ? "lg:p-10" : ""}`}>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <span>{fmtDate(p.date)}</span>·<span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{p.read_time}</span>·<span>{p.level}</span>
      </div>
      <h3 className={`mt-3 font-display font-bold leading-snug text-slate-900 ${large ? "text-2xl" : "text-lg"}`}>{p.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-3">{p.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {(p.tags || []).slice(0, 3).map((t) => (
          <span key={t} className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-slate-500">{t}</span>
        ))}
      </div>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-emerald-600">
        Read online <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </Link>
);

export default function KnowledgeCentre() {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [type, setType] = useState("All");
  const [topic, setTopic] = useState("All");
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    axios.get(`${API}/insights`).then((r) => setItems(r.data)).catch(() => {});
  }, []);

  const featured = useMemo(() => items.filter((i) => i.featured), [items]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return items.filter((p) => {
      if (type !== "All" && p.tag !== type) return false;
      if (topic !== "All" && !(p.technology || []).includes(topic) && !(p.tags || []).includes(topic)) return false;
      if (!term) return true;
      const hay = [p.title, p.subtitle, p.excerpt, ...(p.tags || []), ...(p.technology || [])].join(" ").toLowerCase();
      return hay.includes(term);
    });
  }, [items, q, type, topic]);

  return (
    <div data-testid="knowledge-page">
      <PageHeader
        eyebrow="Knowledge Centre"
        title="Engineering Research for Environmental Infrastructure"
        subtitle="Research publications, engineering notes, strategic perspectives, and technology papers shaping the future of sustainable mobility and intelligent environmental infrastructure."
      >
        <div className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-full glass-strong p-2 pl-5 shadow-soft">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            data-testid="kc-search"
            placeholder="Search publications, topics, keywords…"
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
          {q && (
            <button onClick={() => setQ("")} className="rounded-full p-1 text-slate-400 hover:text-slate-700"><X className="h-4 w-4" /></button>
          )}
        </div>
      </PageHeader>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="py-14">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-emerald-600">
              <Star className="h-4 w-4" /> Featured Publications
            </div>
            <div className="grid gap-6">
              {featured.slice(0, 1).map((p) => <PubCard key={p.id} p={p} large idPrefix="pub-card-featured" />)}
            </div>
          </div>
        </section>
      )}

      {/* Filters + grid */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft" data-testid="kc-filters">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-slate-400">Type</span>
              {["All", ...KC_FILTERS.type].map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  data-testid={`kc-type-${t.replace(/\s+/g, "-").toLowerCase()}`}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${type === t ? "bg-slate-900 text-white" : "bg-secondary text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3">
              <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-slate-400">Topic</span>
              {["All", ...KC_FILTERS.technology].map((t) => (
                <button
                  key={t}
                  onClick={() => setTopic(t)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${topic === t ? "bg-emerald-600 text-white" : "bg-secondary text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-400">{filtered.length} publication{filtered.length !== 1 ? "s" : ""}</div>

          <Stagger className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {filtered.map((p) => (
              <StaggerItem key={p.id}><PubCard p={p} /></StaggerItem>
            ))}
          </Stagger>

          {items.length === 0 && (
            <div className="flex flex-col items-center py-24 text-slate-400">
              <FileText className="h-8 w-8" />
              <p className="mt-3">Loading the library…</p>
            </div>
          )}
          {items.length > 0 && filtered.length === 0 && (
            <p className="py-16 text-center text-slate-400">No publications match your filters.</p>
          )}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading eyebrow="Our Mission" title="A trust engine for environmental engineering" />
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">{KC_MISSION}</p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-12 space-y-3" data-testid="kc-faq">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className={`overflow-hidden rounded-2xl border transition-all ${open ? "border-emerald-200 bg-white shadow-soft" : "border-slate-100 bg-white/60"}`}>
                  <button onClick={() => setOpenFaq(open ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left">
                    <span className="font-display text-[15px] font-bold text-slate-900">{f.q}</span>
                    <span className={`text-emerald-600 transition-transform ${open ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {open && <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
