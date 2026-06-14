"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const springTransition = {
  duration: 0.8,
  ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
};

export default function PageTransition({ children, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ...springTransition, delay: 0.1 }}
      className="mb-8"
    >
      <span className="eyebrow">{children}</span>
    </motion.div>
  );
}

export function SectionTitle({ children, id, className = "" }: { children: ReactNode; id?: string; className?: string }) {
  return (
    <motion.h2
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
      className={`editorial-heading text-5xl md:text-6xl lg:text-7xl ${className}`}
    >
      {children}
    </motion.h2>
  );
}

export function Divider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
      className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
    />
  );
}

export function FadeInUp({ children, className = "", delay = 0 }: Props & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.32, 0.72, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({ children, className = "" }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.12, delayChildren: 0.2 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: Props) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MagneticLink({ children, className = "" }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
