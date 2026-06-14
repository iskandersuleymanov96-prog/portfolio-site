"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-8xl md:text-9xl font-light tracking-[-0.04em] text-[#b8976a]"
          >
            404
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[#6b6860] text-lg"
          >
            This page does not exist.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-3 mt-8 px-8 py-4 border border-[#b8976a]/30 text-[#b8976a] text-[12px] tracking-[0.2em] uppercase hover:bg-[#b8976a]/10 hover:border-[#b8976a]/50 transition-all duration-500"
            >
              Return Home
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
