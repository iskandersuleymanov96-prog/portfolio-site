"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      className="fixed inset-0 z-[100] bg-[#080808] flex items-center justify-center pointer-events-none"
      aria-hidden="true"
    >
      <div className="text-center">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
            className="heading-display"
          >
            Saintnuit
          </motion.h1>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="w-20 h-[1px] bg-[#c9a96e]/30 mx-auto mt-8 origin-left"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-5 label-tiny"
        >
          Loading
        </motion.p>
      </div>
    </motion.div>
  );
}
