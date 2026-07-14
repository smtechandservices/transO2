"use client";

import { useState } from "react";
import { Clock, ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHeader } from "@/components/common/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Reveal";
import { INSIGHTS } from "@/data/insights";

const TAG_COLORS = {
  "White Paper": "bg-emerald-50 text-emerald-700",
  "Research": "bg-cyan-50 text-cyan-700",
  "Technology Note": "bg-sky-50 text-sky-700",
  "Engineering Article": "bg-teal-50 text-teal-700",
  "Future Concept": "bg-emerald-50 text-emerald-700",
  "Insight": "bg-slate-100 text-slate-600",
};

export default function Insights() {
  const items = INSIGHTS;
  const [active, setActive] = useState(null);

  return (
    <div data-testid="insights-page">
      <PageHeader
        eyebrow="News & Insights"
        title="White papers, research and engineering notes"
        subtitle="Perspectives on environmental infrastructure, engineering and the future of sustainable mobility."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {items.map((it) => (
              <StaggerItem key={it.id}>
                <button
                  onClick={() => setActive(it)}
                  data-testid={`insight-card-${it.id}`}
                  className="group flex h-full w-full flex-col rounded-3xl border border-slate-100 bg-white p-7 text-left shadow-soft transition-all hover:-translate-y-1 hover:shadow-hover"
                >
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${TAG_COLORS[it.tag] || TAG_COLORS.Insight}`}>
                      {it.tag}
                    </span>
                    <span className="text-xs text-slate-400">{new Date(it.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug text-slate-900">{it.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-3">{it.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock className="h-3.5 w-3.5" /> {it.read_time}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600">
                      Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Reader modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={() => setActive(null)}
            data-testid="insight-modal"
          >
            <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" />
            <motion.article
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white p-8 shadow-hover sm:p-10"
            >
              <button
                onClick={() => setActive(null)}
                data-testid="insight-modal-close"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-slate-500 transition-colors hover:bg-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
              <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${TAG_COLORS[active.tag] || TAG_COLORS.Insight}`}>
                {active.tag}
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">{active.title}</h2>
              <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
                <span>{active.category}</span>·<span>{active.read_time}</span>
              </div>
              <p className="mt-6 text-base font-medium leading-relaxed text-slate-700">{active.excerpt}</p>
              <p className="mt-4 whitespace-pre-line text-[15px] leading-relaxed text-slate-600">{active.body}</p>
              {active.sources && active.sources.length > 0 && (
                <div className="mt-8 rounded-2xl bg-secondary/50 p-5" data-testid="insight-sources">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">References & sources</h4>
                  <ul className="mt-3 space-y-2">
                    {active.sources.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] leading-snug text-slate-500">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
