"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV } from "@/data/site";
import { Logo } from "@/components/common/Logo";

const NavLink = ({ to, className, children, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === to || pathname.startsWith(`${to}/`);
  return (
    <Link href={to} className={className({ isActive })} {...props}>
      {children}
    </Link>
  );
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-soft" : "bg-transparent"
          }`}
        >
          <Link href="/" data-testid="nav-logo" aria-label="TransO2 home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-emerald-600" : "text-slate-600 hover:text-slate-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              data-testid="nav-link-contact"
              className="hidden items-center gap-1.5 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-hover sm:inline-flex"
            >
              Contact <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              data-testid="nav-mobile-toggle"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full glass-strong text-slate-800 lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              data-testid="mobile-menu"
              className="glass-strong mt-2 rounded-3xl p-3 shadow-soft lg:hidden"
            >
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-base font-medium ${
                      isActive ? "bg-emerald-50 text-emerald-700" : "text-slate-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                href="/contact"
                className="mt-1 block rounded-2xl bg-slate-900 px-4 py-3 text-center text-base font-semibold text-white"
              >
                Contact
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
