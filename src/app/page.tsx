"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import PageTransition, { SectionLabel, SectionTitle, Divider, FadeInUp } from "@/components/PageTransition";
import { projects } from "@/lib/data";

const roles = [
  "Creative Director",
  "AI Filmmaker",
  "Visual Researcher",
  "Musician",
  "Art Director",
];

export default function Home() {
  const featuredProjects = projects.slice(0, 4);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <PageTransition>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060606]/60 via-[#060606]/30 to-[#060606]" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="eyebrow">Available for 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="editorial-heading text-[12vw] md:text-[11vw] lg:text-[10vw]"
            style={{ letterSpacing: "-0.05em" }}
          >
            SAINT
            <br />
            <span className="text-[#b8976a]">NUIT</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-[1px] bg-[#b8976a]/30 mx-auto mt-10 origin-left"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-10 overflow-hidden"
          >
            <div className="marquee">
              <div className="marquee-content">
                {[...roles, ...roles].map((role, i) => (
                  <span key={`a-${i}`} className="flex items-center">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#6b6860]">
                      {role}
                    </span>
                    <span className="marquee-sep mx-6" />
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          aria-hidden="true"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#6b6860]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-[#b8976a]/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* Selected Works — Asymmetric Bento */}
      <section className="section-padding px-6 md:px-12 lg:px-20" aria-labelledby="works-heading">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>Selected Works</SectionLabel>
          <SectionTitle id="works-heading">
            Featured
            <br />
            <span className="text-[#b8976a]">Projects</span>
          </SectionTitle>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Large featured card */}
            <FadeInUp className="md:col-span-7 md:row-span-2">
              <Link href={`/portfolio/${featuredProjects[0].slug}`} className="group block">
                <div className="luxury-card">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <Image
                      src={featuredProjects[0].image}
                      alt={featuredProjects[0].title}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                      <span className="eyebrow mb-3 inline-block">{featuredProjects[0].category}</span>
                      <h3 className="editorial-heading text-3xl md:text-4xl">{featuredProjects[0].title}</h3>
                    </div>
                  </div>
                </div>
                <div className="mt-5 px-1">
                  <h3 className="editorial-heading text-2xl">{featuredProjects[0].title}</h3>
                  <p className="text-[#6b6860] text-sm mt-2">{featuredProjects[0].description}</p>
                </div>
              </Link>
            </FadeInUp>

            {/* Stacked right cards */}
            {featuredProjects.slice(1, 3).map((project, i) => (
              <FadeInUp key={project.slug} delay={0.1 * (i + 1)} className="md:col-span-5">
                <Link href={`/portfolio/${project.slug}`} className="group block">
                  <div className="luxury-card">
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                        <span className="eyebrow mb-2 inline-block">{project.category}</span>
                        <h3 className="editorial-heading text-2xl">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 px-1">
                    <h3 className="editorial-heading text-xl">{project.title}</h3>
                    <p className="text-[#6b6860] text-sm mt-1">{project.description}</p>
                  </div>
                </Link>
              </FadeInUp>
            ))}

            {/* Bottom wide card */}
            <FadeInUp delay={0.3} className="md:col-span-12">
              <Link href={`/portfolio/${featuredProjects[3].slug}`} className="group block">
                <div className="luxury-card">
                  <div className="relative overflow-hidden aspect-[21/9]">
                    <Image
                      src={featuredProjects[3].image}
                      alt={featuredProjects[3].title}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                      <span className="eyebrow mb-3 inline-block">{featuredProjects[3].category}</span>
                      <h3 className="editorial-heading text-3xl">{featuredProjects[3].title}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeInUp>
          </div>

          <FadeInUp className="mt-16 text-center" delay={0.2}>
            <Link href="/portfolio" className="luxury-btn">
              View All Work
            </Link>
          </FadeInUp>
        </div>
      </section>

      <Divider />

      {/* About Preview — Editorial Split */}
      <section className="section-padding px-6 md:px-12 lg:px-20" aria-labelledby="about-heading">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <FadeInUp className="lg:col-span-5">
            <SectionLabel>About</SectionLabel>
            <h2 id="about-heading" className="editorial-heading text-4xl md:text-5xl lg:text-6xl">
              A practice rooted in
              <br />
              <span className="text-[#b8976a]">craft &amp; intention</span>
            </h2>
            <p className="mt-8 text-[#6b6860] leading-relaxed max-w-md">
              Working at the convergence of film, fashion, and artificial
              intelligence. Each project is an exploration of how technology
              can amplify creative vision without replacing the human hand.
            </p>
            <div className="mt-10">
              <Link href="/about" className="luxury-btn">
                Learn More
              </Link>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2} className="lg:col-span-7">
            <div className="luxury-card">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Saintnuit portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <Divider />

      {/* Services — Editorial List */}
      <section className="section-padding px-6 md:px-12 lg:px-20" aria-labelledby="services-heading">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>Services</SectionLabel>
          <SectionTitle id="services-heading">What I Do</SectionTitle>

          <div className="mt-20 space-y-0">
            {[
              { num: "01", title: "Creative Direction", desc: "Defining visual strategy for brands and cultural projects" },
              { num: "02", title: "AI Campaign Production", desc: "Creating imagery that transcends physical limitations" },
              { num: "03", title: "Visual Identity", desc: "Crafting cohesive visual systems and brand languages" },
              { num: "04", title: "Art Direction", desc: "Orchestrating visual elements for unified aesthetics" },
            ].map((service, i) => (
              <FadeInUp key={service.title} delay={i * 0.08}>
                <div className="py-10 border-b border-white/[0.05] group hover:border-[#b8976a]/20 transition-colors duration-700">
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex items-start gap-8">
                      <span className="text-[11px] text-[#6b6860] tracking-wider font-mono mt-1" aria-hidden="true">
                        {service.num}
                      </span>
                      <div>
                        <h3 className="editorial-heading text-2xl md:text-3xl group-hover:text-[#b8976a] transition-colors duration-500">
                          {service.title}
                        </h3>
                        <p className="text-[#6b6860] text-sm mt-2 max-w-md">{service.desc}</p>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-[#6b6860] group-hover:text-[#b8976a] transition-all duration-500 shrink-0 mt-2 group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className="section-padding px-6 md:px-12 lg:px-20" aria-labelledby="cta-heading">
        <div className="max-w-[1400px] mx-auto text-center">
          <FadeInUp>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 id="cta-heading" className="editorial-heading text-5xl md:text-7xl lg:text-8xl">
              Let&apos;s create
              <br />
              <span className="text-[#b8976a]">something together</span>
            </h2>
            <div className="mt-12">
              <Link href="/contact" className="luxury-btn">
                Start a Project
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </PageTransition>
  );
}
