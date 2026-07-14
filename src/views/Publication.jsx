"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { toast } from "sonner";
import {
  ArrowLeft, Clock, Calendar, User, Layers, Download, Printer, Copy, ArrowRight, Lightbulb, BookOpen,
} from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { INSIGHTS, getInsightById } from "@/data/insights";

const slug = (s) => s.replace(/[^a-z0-9]+/gi, "-").toLowerCase();

const Meta = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-2">
    <Icon className="h-4 w-4 text-emerald-600" />
    <span className="text-xs text-slate-400">{label}:</span>
    <span className="text-xs font-semibold text-slate-700">{value}</span>
  </div>
);

export default function Publication() {
  const { id } = useParams();
  const p = getInsightById(id);
  const all = INSIGHTS;
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!p) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="font-display text-2xl font-bold text-slate-900">Publication not found</p>
        <Link href="/knowledge" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">Back to Knowledge Centre</Link>
      </div>
    );
  }

  const related = all.filter((x) => (p.related || []).includes(x.title)).slice(0, 4);
  const toc = (p.sections || []).map((s, i) => ({ id: `${slug(s.heading)}-${i}`, label: s.heading }));

  const copyCitation = () => {
    navigator.clipboard.writeText(p.citation).then(() => toast.success("Citation copied to clipboard"));
  };

  const figures = [
    { img: p.cover, number: "Fig. 1", title: p.title, caption: `Conceptual illustration for ${p.pub_number}. Original TransO2 render — illustrative, pre-validation.` },
  ];

  return (
    <div data-testid="publication-page">
      {/* Scroll progress */}
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-emerald-500 to-cyan-500" data-testid="scroll-progress" />

      {/* Cover */}
      <section className="relative overflow-hidden mesh-bg pt-32 pb-14 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 grid-faint opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Link href="/knowledge" data-testid="pub-back" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-emerald-600">
            <ArrowLeft className="h-4 w-4" /> Knowledge Centre
          </Link>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-semibold text-white">{p.tag}</span>
                <span className="rounded-full glass-strong px-3 py-1 text-[11px] font-semibold text-slate-600">{p.pub_number} · {p.version}</span>
              </div>
              <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{p.title}</h1>
              {p.subtitle && <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{p.subtitle}</p>}
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                <Meta icon={Calendar} label="Published" value={new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} />
                <Meta icon={Clock} label="Reading" value={p.read_time} />
                <Meta icon={Layers} label="Level" value={p.level} />
                <Meta icon={User} label="Author" value={p.authors} />
              </div>
            </div>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-[2rem] border border-white/60 shadow-hover">
                <img src={p.cover} alt={p.title} className="aspect-[4/3] w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[240px_1fr]">
          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">On this page</div>
              <nav className="mt-4 space-y-2 border-l border-slate-100">
                <a href="#executive-summary" className="block border-l-2 border-transparent pl-3 text-sm text-slate-500 hover:border-emerald-500 hover:text-emerald-700">Executive Summary</a>
                {toc.map((t) => (
                  <a key={t.id} href={`#${t.id}`} className="block border-l-2 border-transparent pl-3 text-sm text-slate-500 hover:border-emerald-500 hover:text-emerald-700">{t.label}</a>
                ))}
                <a href="#glossary" className="block border-l-2 border-transparent pl-3 text-sm text-slate-500 hover:border-emerald-500 hover:text-emerald-700">Glossary</a>
                <a href="#references" className="block border-l-2 border-transparent pl-3 text-sm text-slate-500 hover:border-emerald-500 hover:text-emerald-700">References</a>
                <a href="#citation" className="block border-l-2 border-transparent pl-3 text-sm text-slate-500 hover:border-emerald-500 hover:text-emerald-700">Citation</a>
              </nav>

              <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Downloads</div>
                <button onClick={() => window.print()} data-testid="pub-print" className="mt-3 flex w-full items-center gap-2 rounded-xl bg-secondary px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">
                  <Printer className="h-3.5 w-3.5" /> Print / Save as PDF
                </button>
                <button onClick={copyCitation} className="mt-2 flex w-full items-center gap-2 rounded-xl bg-secondary px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">
                  <Copy className="h-3.5 w-3.5" /> Copy citation
                </button>
              </div>
            </div>
          </aside>

          {/* Article */}
          <article className="min-w-0">
            {/* Executive summary */}
            <div id="executive-summary" className="scroll-mt-28 rounded-3xl border border-emerald-100 bg-emerald-50/40 p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-emerald-800">Executive Summary</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{p.executive_summary}</p>
            </div>

            {/* Keywords */}
            {(p.keywords || []).length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Keywords</span>
                {p.keywords.map((k) => (
                  <span key={k} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-slate-600">{k}</span>
                ))}
              </div>
            )}

            {/* Sections */}
            <div className="mt-10 space-y-10">
              {(p.sections || []).map((s, i) => (
                <div key={i} id={`${slug(s.heading)}-${i}`} className="scroll-mt-28">
                  <h2 className="font-display text-xl font-bold text-slate-900">{s.heading}</h2>
                  <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-slate-600">{s.body}</p>

                  {/* Insert a figure after the first section */}
                  {i === 0 && (
                    <figure className="mt-6 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft">
                      <img src={figures[0].img} alt={figures[0].title} className="w-full object-cover" />
                      <figcaption className="border-t border-slate-100 px-5 py-3 text-xs text-slate-500">
                        <span className="font-semibold text-slate-700">{figures[0].number}.</span> {figures[0].caption}
                      </figcaption>
                    </figure>
                  )}

                  {/* Callout after second section */}
                  {i === 1 && (
                    <div className="mt-6 flex items-start gap-3 rounded-2xl border border-cyan-100 bg-cyan-50/50 p-5">
                      <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Engineering Insight</div>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                          This publication describes conceptual frameworks and proposed architectures. Where quantitative figures appear, they are engineering projections intended for planning and are subject to experimental validation.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Glossary */}
            <div id="glossary" className="mt-14 scroll-mt-28">
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-slate-900"><BookOpen className="h-5 w-5 text-emerald-600" /> Glossary</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {(p.glossary || []).map((g) => (
                  <div key={g.term} className="rounded-2xl border border-slate-100 bg-white p-4">
                    <div className="font-display text-sm font-bold text-slate-900">{g.term}</div>
                    <div className="mt-1 text-[13px] leading-snug text-slate-500">{g.definition}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* References */}
            {(p.sources || []).length > 0 && (
              <div id="references" className="mt-14 scroll-mt-28">
                <h2 className="font-display text-xl font-bold text-slate-900">References</h2>
                <p className="mt-1 text-xs text-slate-400">References point to established engineering disciplines and public frameworks, not fabricated citations.</p>
                <ul className="mt-4 space-y-2">
                  {p.sources.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] leading-snug text-slate-500">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />{s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Citation */}
            <div id="citation" className="mt-14 scroll-mt-28 rounded-2xl bg-slate-900 p-6 text-white">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-bold">Suggested Citation</h2>
                <button onClick={copyCitation} data-testid="pub-copy-citation" className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold hover:bg-white/20">
                  <Copy className="h-3.5 w-3.5" /> Copy
                </button>
              </div>
              <p className="mt-3 text-sm text-white/80">{p.citation}</p>
            </div>

            {/* About */}
            <div className="mt-10 rounded-2xl border border-slate-100 bg-secondary/50 p-6">
              <h3 className="font-display text-sm font-bold text-slate-900">About TransO2</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
                TransO2 is an Environmental Infrastructure Technology company developing integrated engineering concepts that reimagine transportation assets as intelligent environmental platforms. Through systems engineering, sustainability, digital technologies, and modular design, TransO2 explores new approaches to environmental value creation across mobility and infrastructure.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-slate-100 bg-secondary/50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-2xl font-bold text-slate-900">Related publications</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <Link key={r.id} href={`/knowledge/${r.id}`} className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-hover">
                  <span className="text-[11px] font-semibold text-emerald-600">{r.tag} · {r.pub_number}</span>
                  <h3 className="mt-2 font-display text-sm font-bold leading-snug text-slate-900 line-clamp-3">{r.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-emerald-600">Read <ArrowRight className="h-3 w-3" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
