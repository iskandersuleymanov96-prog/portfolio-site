"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageTransition, { SectionLabel, SectionTitle, ImageScaleReveal } from "@/components/PageTransition";
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
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>Portfolio</SectionLabel>
          <SectionTitle>
            Selected
            <br />
            <span className="text-[#c9a96e]">Works</span>
          </SectionTitle>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div
            className="flex flex-wrap gap-6 mb-24"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`label-tiny transition-all duration-500 pb-1 border-b ${
                  activeCategory === cat
                    ? "text-[#c9a96e] border-[#c9a96e]/40"
                    : "text-[#555] border-transparent hover:text-[#e8e8e8] hover:border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-16 pb-32" aria-label="Projects">
        <div className="max-w-[1400px] mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => {
                const isLarge = i === 0;
                const colSpan = isLarge ? "md:col-span-7" : i % 3 === 1 ? "md:col-span-5" : "md:col-span-6";
                const aspectRatio = isLarge ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[16/10]" : "aspect-[3/2]";

                return (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    className={colSpan}
                  >
                    <Link href={`/portfolio/${project.slug}`} className="group block">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className={`${aspectRatio} relative overflow-hidden`}>
                          <ImageScaleReveal className="absolute inset-0">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                            />
                          </ImageScaleReveal>
                          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                            <span className="eyebrow mb-2 inline-block">{project.category}</span>
                            <h3 className="heading-section text-[#e8e8e8]">{project.title}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 px-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="heading-section text-xl group-hover:text-[#c9a96e] transition-colors duration-500">{project.title}</h3>
                            <p className="text-[#666] text-sm mt-2">{project.description}</p>
                          </div>
                          <span className="text-[10px] text-[#444] tracking-wider font-mono shrink-0 ml-4 mt-1">
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
