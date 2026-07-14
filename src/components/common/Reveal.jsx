"use client";

import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "", ...props }) => (
  <motion.div
    initial={{ opacity: 0, y, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const Stagger = ({ children, className = "", stagger = 0.08 }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "", y = 24 }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y, filter: "blur(6px)" },
      show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
