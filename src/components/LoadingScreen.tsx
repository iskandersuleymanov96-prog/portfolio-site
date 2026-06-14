"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center pointer-events-none"
      aria-hidden="true"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="overflow-hidden"
        >
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="editorial-heading text-4xl md:text-5xl"
          >
            Saintnuit
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="w-16 h-[1px] bg-[#c9a96e]/40 mx-auto mt-6 origin-left"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-4 text-[10px] tracking-[0.3em] uppercase text-[#5a5a5a] font-mono"
        >
          Loading
        </motion.p>
      </div>
    </motion.div>
  );
}
