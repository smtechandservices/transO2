"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight, MapPin } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { BRAND, NAV } from "@/data/site";
import { Logo } from "@/components/common/Logo";

const API = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/subscribe`, { email });
      toast.success(data.status === "already_subscribed" ? "You're already subscribed." : "Subscribed. Welcome aboard.");
      setEmail("");
    } catch {
      toast.error("Please enter a valid email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer data-testid="site-footer" className="relative mt-24 border-t border-slate-100 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-slate-500">
              {BRAND.statement}. Transforming transportation assets into intelligent environmental
              infrastructure that creates measurable value on every journey.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="h-4 w-4 text-emerald-500" /> India — with a global outlook
            </div>
            <a
              href={`mailto:${BRAND.email}`}
              data-testid="footer-email"
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-emerald-600"
            >
              <Mail className="h-4 w-4 text-emerald-500" /> {BRAND.email}
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Explore</h4>
            <ul className="mt-5 space-y-3">
              {NAV.concat([{ label: "Contact", to: "/contact" }]).map((n) => (
                <li key={n.to}>
                  <Link href={n.to} className="text-[15px] text-slate-600 transition-colors hover:text-emerald-600">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Latest Insights</h4>
            <p className="mt-5 text-[15px] text-slate-500">
              Receive white papers, engineering notes and environmental research from the TransO2 team.
            </p>
            <form onSubmit={subscribe} className="mt-5 flex items-center gap-2 rounded-full glass-strong p-1.5 pl-5 shadow-soft">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@organisation.com"
                data-testid="footer-subscribe-input"
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={loading}
                data-testid="footer-subscribe-btn"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white transition-all hover:bg-emerald-700 disabled:opacity-60"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} TransO2. Engineering the future of environmental infrastructure.</p>
          <p className="text-slate-400">An India-origin deep-tech environmental infrastructure company.</p>
        </div>
      </div>
    </footer>
  );
};
