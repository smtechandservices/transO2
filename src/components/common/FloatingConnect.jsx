"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, Send, MessageSquareText, Linkedin } from "lucide-react";
import { CONTACT_CHANNELS as C } from "@/data/site";

// Floating "connect with us" widget — shown on every page.
export const FloatingConnect = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const goForm = () => { setOpen(false); router.push("/contact"); };

  const channels = [
    {
      key: "email", label: "Email us", sub: C.email, icon: Mail, color: "#0ea5e9",
      href: `mailto:${C.email}`, testid: "connect-email",
    },
    {
      key: "whatsapp", label: "WhatsApp", sub: C.whatsapp ? "Chat instantly" : "Message us", icon: MessageCircle, color: "#22c55e",
      href: C.whatsapp ? `https://wa.me/${C.whatsapp}?text=${encodeURIComponent("Hello TransO2, I'd like to connect regarding your environmental infrastructure platform.")}` : null,
      onClick: C.whatsapp ? null : goForm, testid: "connect-whatsapp",
    },
    {
      key: "telegram", label: "Telegram", sub: C.telegram ? "Message on Telegram" : "Message us", icon: Send, color: "#0088cc",
      href: C.telegram ? `https://t.me/${C.telegram}` : null,
      onClick: C.telegram ? null : goForm, testid: "connect-telegram",
    },
    ...(C.linkedin ? [{ key: "linkedin", label: "LinkedIn", sub: "Follow TransO2", icon: Linkedin, color: "#0a66c2", href: C.linkedin, testid: "connect-linkedin" }] : []),
    {
      key: "form", label: "Send a message", sub: "Engage with TransO2", icon: MessageSquareText, color: "#10b981",
      onClick: goForm, testid: "connect-form",
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3" data-testid="floating-connect">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-72 overflow-hidden rounded-3xl glass-strong shadow-hover"
            data-testid="connect-panel"
          >
            <div className="bg-gradient-to-br from-emerald-600 to-cyan-600 px-5 py-4 text-white">
              <p className="font-display text-base font-bold">Let's connect</p>
              <p className="text-xs text-white/80">Choose how you'd like to reach TransO2</p>
            </div>
            <div className="space-y-1.5 p-3">
              {channels.map((ch, i) => {
                const Inner = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: ch.color }}>
                      <ch.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-slate-800">{ch.label}</span>
                      <span className="block truncate text-xs text-slate-400">{ch.sub}</span>
                    </span>
                  </>
                );
                const cls = "flex w-full items-center gap-3 rounded-2xl p-2.5 text-left transition-colors hover:bg-white";
                return (
                  <motion.div
                    key={ch.key}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    {ch.href ? (
                      <a href={ch.href} target={ch.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className={cls} data-testid={ch.testid} onClick={() => setOpen(false)}>
                        {Inner}
                      </a>
                    ) : (
                      <button onClick={ch.onClick} className={cls} data-testid={ch.testid}>{Inner}</button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        data-testid="connect-toggle"
        aria-label={open ? "Close connect menu" : "Open connect menu"}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-hover transition-all hover:bg-emerald-600"
      >
        {!open && <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" />}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "chat"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
};
