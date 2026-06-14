"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import PageTransition, { SectionLabel, SectionTitle, Divider, FadeInUp, ClipReveal, ImageScaleReveal, HorizontalSlideIn, SectionReveal, TextReveal } from "@/components/PageTransition";
import LoadingScreen from "@/components/LoadingScreen";
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
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <PageTransition>
      <LoadingScreen />

      <section ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/40 via-[#080808]/20 to-[#080808]" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.32, 0.72, 0, 1] }}
            className="mb-10"
          >
            <span className="eyebrow">Available for 2026</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.4, delay: 2, ease: [0.77, 0, 0.175, 1] }}
              className="heading-giant"
            >
              SAINT
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.4, delay: 2.15, ease: [0.77, 0, 0.175, 1] }}
              className="heading-giant text-[#c9a96e]"
            >
              NUIT
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 2.7, ease: [0.77, 0, 0.175, 1] }}
            className="w-20 h-[1px] bg-[#c9a96e]/30 mx-auto mt-12 origin-left"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.1 }}
            className="mt-12 overflow-hidden"
          >
            <div className="marquee">
              <div className="marquee-content">
                {[...roles, ...roles].map((role, i) => (
                  <span key={`a-${i}`} className="flex items-center">
                    <span className="label-tiny text-[#555]">
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
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          aria-hidden="true"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#444]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-[#c9a96e]/30 to-transparent"
          />
        </motion.div>
      </section>

      <SectionReveal>
      <section className="section-padding px-6 md:px-12 lg:px-16" aria-labelledby="works-heading">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>Selected Works</SectionLabel>
          <SectionTitle id="works-heading">
            Featured
            <br />
            <span className="text-[#c9a96e]">Projects</span>
          </SectionTitle>

          <div className="mt-16">
            <FadeInUp>
              <Link href={`/portfolio/${featuredProjects[0].slug}`} className="group block">
                <div className="relative overflow-hidden rounded-lg aspect-[21/9] md:aspect-[21/8]">
                  <ImageScaleReveal className="absolute inset-0">
                    <Image
                      src={featuredProjects[0].image}
                      alt={featuredProjects[0].title}
                      fill
                      className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                  </ImageScaleReveal>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
                    <span className="eyebrow mb-4 inline-block">{featuredProjects[0].category}</span>
                    <h3 className="heading-editorial text-[#e8e8e8] group-hover:text-[#c9a96e] transition-colors duration-500">
                      {featuredProjects[0].title}
                    </h3>
                    <p className="mt-3 text-[#888] max-w-md text-sm">{featuredProjects[0].description}</p>
                  </div>
                </div>
              </Link>
            </FadeInUp>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <div className="md:col-span-7">
              <FadeInUp delay={0.1}>
                <Link href={`/portfolio/${featuredProjects[1].slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
                    <ImageScaleReveal className="absolute inset-0">
                      <Image
                        src={featuredProjects[1].image}
                        alt={featuredProjects[1].title}
                        fill
                        className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                      />
                    </ImageScaleReveal>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="eyebrow mb-3 inline-block">{featuredProjects[1].category}</span>
                      <h3 className="heading-editorial text-[#e8e8e8] group-hover:text-[#c9a96e] transition-colors duration-500">
                        {featuredProjects[1].title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </FadeInUp>
            </div>

            <div className="md:col-span-5 flex flex-col justify-between">
              <FadeInUp delay={0.2}>
                <Link href={`/portfolio/${featuredProjects[2].slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-lg aspect-[16/10]">
                    <ImageScaleReveal className="absolute inset-0">
                      <Image
                        src={featuredProjects[2].image}
                        alt={featuredProjects[2].title}
                        fill
                        className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                      />
                    </ImageScaleReveal>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="eyebrow mb-2 inline-block">{featuredProjects[2].category}</span>
                      <h3 className="heading-section text-[#e8e8e8] group-hover:text-[#c9a96e] transition-colors duration-500">
                        {featuredProjects[2].title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </FadeInUp>

              <FadeInUp delay={0.3} className="mt-8 hidden md:block">
                <p className="body-large">
                  Each project is an exploration of how technology
                  can amplify creative vision without replacing the human hand.
                </p>
              </FadeInUp>
            </div>
          </div>

          <div className="mt-16">
            <FadeInUp delay={0.15}>
              <Link href={`/portfolio/${featuredProjects[3].slug}`} className="group block">
                <div className="relative overflow-hidden rounded-lg aspect-[21/9]">
                  <ImageScaleReveal className="absolute inset-0">
                    <Image
                      src={featuredProjects[3].image}
                      alt={featuredProjects[3].title}
                      fill
                      className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                  </ImageScaleReveal>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 via-transparent to-[#080808]/60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="eyebrow mb-4 inline-block">{featuredProjects[3].category}</span>
                      <h3 className="heading-editorial text-[#e8e8e8] group-hover:text-[#c9a96e] transition-colors duration-500">
                        {featuredProjects[3].title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeInUp>
          </div>

          <FadeInUp className="mt-20 text-center" delay={0.2}>
            <Link href="/portfolio" className="magnetic-btn">
              View All Work
              <span className="btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </Link>
          </FadeInUp>
        </div>
      </section>
      </SectionReveal>

      <Divider />

      <SectionReveal>
      <section className="section-padding px-6 md:px-12 lg:px-16" aria-labelledby="about-heading">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          <HorizontalSlideIn className="lg:col-span-5">
            <SectionLabel>About</SectionLabel>
            <h2 id="about-heading" className="heading-display">
              <TextReveal>A practice rooted in</TextReveal>
              <br />
              <span className="text-[#b8976a]"><TextReveal delay={0.15}>craft &amp; intention</TextReveal></span>
            </h2>
            <p className="mt-10 body-large max-w-md">
              Working at the convergence of film, fashion, and artificial
              intelligence. Each project is an exploration of how technology
              can amplify creative vision without replacing the human hand.
            </p>
            <div className="mt-12">
              <Link href="/about" className="magnetic-btn">
                Learn More
                <span className="btn-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </Link>
            </div>
          </HorizontalSlideIn>

          <ClipReveal delay={0.15} className="lg:col-span-7">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
                alt="Saintnuit portrait"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/30 to-transparent" />
            </div>
          </ClipReveal>
        </div>
      </section>
      </SectionReveal>

      <Divider />

      <SectionReveal>
      <section className="section-padding px-6 md:px-12 lg:px-16" aria-labelledby="services-heading">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>Services</SectionLabel>
          <SectionTitle id="services-heading">What I Do</SectionTitle>

          <div className="mt-16">
            {[
              { num: "01", title: "Creative Direction", desc: "Defining visual strategy for brands and cultural projects" },
              { num: "02", title: "AI Campaign Production", desc: "Creating imagery that transcends physical limitations" },
              { num: "03", title: "Visual Identity", desc: "Crafting cohesive visual systems and brand languages" },
              { num: "04", title: "Art Direction", desc: "Orchestrating visual elements for unified aesthetics" },
            ].map((service, i) => (
              <FadeInUp key={service.title} delay={i * 0.08}>
                <div className="service-row py-10 md:py-14 group">
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex items-start gap-6 md:gap-10">
                      <span className="text-[10px] text-[#444] tracking-wider font-mono mt-1" aria-hidden="true">
                        {service.num}
                      </span>
                      <div>
                        <h3 className="heading-editorial group-hover:text-[#c9a96e] transition-colors duration-500">
                          {service.title}
                        </h3>
                        <p className="text-[#666] text-sm mt-3 max-w-md">{service.desc}</p>
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
                      className="text-[#444] group-hover:text-[#c9a96e] transition-all duration-500 shrink-0 mt-2 group-hover:translate-x-1 group-hover:-translate-y-1"
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
      </SectionReveal>

      <Divider />

      <SectionReveal>
      <section className="section-padding px-6 md:px-12 lg:px-16" aria-labelledby="cta-heading">
        <div className="max-w-[1400px] mx-auto text-center">
          <FadeInUp>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 id="cta-heading" className="heading-giant mt-4">
              <TextReveal>Let&apos;s create</TextReveal>
            </h2>
            <h2 className="heading-giant text-[#b8976a]">
              <TextReveal delay={0.12}>something</TextReveal>
            </h2>
            <h2 className="heading-giant">
              <TextReveal delay={0.24}>together</TextReveal>
            </h2>
            <div className="mt-16">
              <Link href="/contact" className="magnetic-btn">
                Start a Project
                <span className="btn-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
      </SectionReveal>
    </PageTransition>
  );
}
