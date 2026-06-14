"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageTransition, { SectionLabel, SectionTitle } from "@/components/PageTransition";
import { projects, categories } from "@/lib/data";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat);
  }, []);

  return (
    <PageTransition>
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>Portfolio</SectionLabel>
          <SectionTitle>
            Selected
            <br />
            <span className="text-[#c9a96e]">Works</span>
          </SectionTitle>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div
            className="flex flex-wrap gap-3 mb-20"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`px-6 py-3 rounded-full text-[11px] tracking-[0.15em] uppercase transition-all duration-500 border ${
                  activeCategory === cat
                    ? "bg-[#c9a96e] text-[#050505] border-[#c9a96e]"
                    : "bg-transparent text-[#5a5a5a] border-white/[0.08] hover:bg-white/[0.06] hover:text-[#e8e8e8] hover:border-white/[0.15]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section className="px-6 md:px-12 pb-32" aria-label="Projects">
        <div className="max-w-[1400px] mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => {
                const isLarge = i === 0;
                const colSpan = isLarge ? "md:col-span-7" : i % 3 === 1 ? "md:col-span-5" : "md:col-span-6";
                const aspectRatio = isLarge ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[16/10]" : "aspect-[3/2]";

                return (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    className={colSpan}
                  >
                    <Link href={`/portfolio/${project.slug}`} className="group block">
                      <div className="double-bezel">
                        <div className="double-bezel-inner">
                          <div className={`relative overflow-hidden ${aspectRatio}`}>
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                              <span className="eyebrow mb-2 inline-block">{project.category}</span>
                              <h3 className="editorial-heading text-2xl md:text-3xl">{project.title}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 px-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="editorial-heading text-xl">{project.title}</h3>
                            <p className="text-[#5a5a5a] text-sm mt-1">{project.description}</p>
                          </div>
                          <span className="text-[10px] text-[#5a5a5a] tracking-wider font-mono shrink-0 ml-4">
                            {project.year}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
