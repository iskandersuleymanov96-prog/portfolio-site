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
            transition={{ duration: 0.6 }}
            className="text-8xl md:text-9xl font-light tracking-[-0.04em] text-[#c9a96e]"
          >
            404
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[#6b6b6b] text-lg"
          >
            This page does not exist.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-3 mt-8 px-8 py-4 border border-[#c9a96e] text-[#c9a96e] text-[12px] tracking-[0.2em] uppercase hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-all duration-500"
            >
              Return Home
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
