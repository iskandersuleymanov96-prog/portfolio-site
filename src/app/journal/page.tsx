"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition, { SectionLabel, SectionTitle, FadeInUp } from "@/components/PageTransition";
import { journalEntries } from "@/lib/data";

const journalCategories = ["All", "Visual Culture", "Art", "Fashion", "Music", "Visual Research"];

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? journalEntries
      : journalEntries.filter((e) => e.category === activeCategory);

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat);
  }, []);

  return (
    <PageTransition>
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>Journal</SectionLabel>
          <SectionTitle>
            Thoughts &amp;
            <br />
            <span className="text-[#c9a96e]">Writings</span>
          </SectionTitle>
          <p className="mt-8 text-[#5a5a5a] max-w-lg">
            Essays on visual culture, technology, and the intersection of art
            and artificial intelligence.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div
            className="flex flex-wrap gap-3 mb-20"
            role="tablist"
            aria-label="Filter journal entries by category"
          >
            {journalCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`px-5 py-2.5 rounded-full text-[10px] tracking-[0.2em] uppercase transition-all duration-500 ${
                  activeCategory === cat
                    ? "bg-[#c9a96e] text-[#050505]"
                    : "bg-white/[0.04] text-[#5a5a5a] hover:bg-white/[0.08] hover:text-[#e8e8e8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            {filtered.map((entry, i) => (
              <motion.article
                key={entry.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.32, 0.72, 0, 1] }}
                className="py-10 border-b border-white/[0.06] group hover:border-[#c9a96e]/20 transition-colors duration-700 cursor-pointer"
                aria-labelledby={`journal-title-${entry.slug}`}
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="eyebrow">{entry.category}</span>
                      <span className="text-[10px] text-[#5a5a5a] font-mono">
                        {entry.date}
                      </span>
                    </div>
                    <h3
                      id={`journal-title-${entry.slug}`}
                      className="editorial-heading text-2xl md:text-3xl lg:text-4xl group-hover:text-[#c9a96e] transition-colors duration-500"
                    >
                      {entry.title}
                    </h3>
                    <p className="text-[#5a5a5a] mt-4 max-w-2xl">
                      {entry.excerpt}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-[#5a5a5a] group-hover:text-[#c9a96e] transition-all duration-500 shrink-0 mt-8 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  );
}
