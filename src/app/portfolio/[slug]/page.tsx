"use client";

import { use, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageTransition, { Divider, FadeInUp } from "@/components/PageTransition";
import { projects } from "@/lib/data";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  if (!project) return notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#5a5a5a] hover:text-[#c9a96e] transition-colors duration-300 mb-16 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="group-hover:-translate-x-1 transition-transform duration-300"
              aria-hidden="true"
            >
              <path d="M19 12H5M5 12L12 19M5 12L12 5" />
            </svg>
            Back to Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="eyebrow mb-6 inline-block">{project.category}</span>
            <motion.h1
              style={{ y: titleY }}
              className="editorial-heading text-6xl md:text-8xl lg:text-9xl mt-4"
            >
              {project.title}
            </motion.h1>
            <p className="text-lg text-[#5a5a5a] mt-8 max-w-xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Image — Parallax */}
      <section className="px-6 md:px-12" ref={heroRef}>
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="double-bezel"
          >
            <div className="double-bezel-inner">
              <motion.div
                style={{ scale: imageScale, opacity: imageOpacity }}
                className="relative aspect-[16/9] overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details — Editorial Grid */}
      <section className="section-padding px-6 md:px-12" aria-labelledby="project-details-heading">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <FadeInUp className="lg:col-span-7">
            <h2 id="project-details-heading" className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] font-mono mb-8">
              About the Project
            </h2>
            <p className="text-[#e8e8e8] leading-relaxed text-lg">
              {project.details}
            </p>
          </FadeInUp>

          <FadeInUp delay={0.1} className="lg:col-span-5">
            <div className="space-y-10">
              {[
                { label: "Role", value: project.role },
                { label: "Client", value: project.client },
                { label: "Year", value: project.year },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#5a5a5a] font-mono block mb-2">
                    {item.label}
                  </span>
                  <span className="text-sm text-[#e8e8e8]">{item.value}</span>
                </div>
              ))}

              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#5a5a5a] font-mono block mb-4">
                  Tags
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="eyebrow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <Divider />

      {/* Next Project */}
      <section className="section-padding px-6 md:px-12" aria-label="Next project">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#5a5a5a] font-mono mb-10">
            Next Project
          </p>
          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="group block"
          >
            <div className="double-bezel">
              <div className="double-bezel-inner">
                <div className="relative aspect-[21/9] overflow-hidden">
                  <Image
                    src={nextProject.image}
                    alt={nextProject.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-start px-1">
              <div>
                <span className="eyebrow mb-3 inline-block">{nextProject.category}</span>
                <h3 className="editorial-heading text-3xl md:text-4xl group-hover:text-[#c9a96e] transition-colors duration-500">
                  {nextProject.title}
                </h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-[#5a5a5a] group-hover:text-[#c9a96e] transition-all duration-500 shrink-0 mt-4 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
