"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import PageTransition, { SectionLabel, SectionTitle, Divider, FadeInUp } from "@/components/PageTransition";
import { services } from "@/lib/data";

const timeline = [
  { year: "2024", event: "Founded Saintnuit studio" },
  { year: "2023", event: "Art Director, Palais de Tokyo exhibition" },
  { year: "2022", event: "Visual identity for The Row" },
  { year: "2021", event: "AI filmmaker residency, Berlin" },
  { year: "2020", event: "Released first experimental film" },
];

export default function AboutPage() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: portraitRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>About</SectionLabel>
          <SectionTitle>
            The practice behind
            <br />
            <span className="text-[#c9a96e]">the vision</span>
          </SectionTitle>
        </div>
      </section>

      {/* Portrait + Bio — Editorial Split */}
      <section className="pb-24 px-6 md:px-12" aria-labelledby="bio-heading">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <FadeInUp className="lg:col-span-5">
            <div ref={portraitRef} className="double-bezel">
              <div className="double-bezel-inner">
                <motion.div style={{ y: portraitY }} className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                    alt="Saintnuit portrait"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2} className="lg:col-span-7 flex flex-col justify-center">
            <h2 id="bio-heading" className="sr-only">Biography</h2>
            <p className="editorial-heading text-2xl md:text-3xl leading-snug text-[#e8e8e8]">
              Saintnuit is a multidisciplinary creative practice operating at
              the intersection of film, fashion, and artificial intelligence.
            </p>
            <p className="mt-8 text-[#5a5a5a] leading-relaxed max-w-lg">
              Founded on the belief that technology should amplify — not
              replace — human creative vision. With a background in visual arts
              and a deep engagement with emerging technologies, the studio has
              produced campaigns for luxury houses, directed experimental films,
              and exhibited at international art institutions.
            </p>
            <p className="mt-6 text-[#5a5a5a] leading-relaxed max-w-lg">
              Every project begins with a question: how do we make something
              that feels inevitable? The answer always lies in the tension
              between technology and intuition, between the algorithm and the
              hand.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Film", "Fashion", "AI", "Art Direction", "Visual Identity"].map((tag) => (
                <span key={tag} className="eyebrow">{tag}</span>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      <Divider />

      {/* Philosophy — Asymmetric Grid */}
      <section className="section-padding px-6 md:px-12" aria-labelledby="philosophy-heading">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>Philosophy</SectionLabel>
          <SectionTitle id="philosophy-heading">Guiding Principles</SectionTitle>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-8">
            {[
              {
                title: "Restraint",
                text: "Luxury is defined not by what is added, but by what is carefully removed. Every element must earn its place.",
                num: "01",
              },
              {
                title: "Craft",
                text: "Technology is a tool, not a destination. The human hand must remain visible in every pixel, every frame, every sound.",
                num: "02",
              },
              {
                title: "Intention",
                text: "Nothing is decorative. Every choice serves the vision. Every detail tells a story.",
                num: "03",
              },
            ].map((item, i) => (
              <FadeInUp key={item.title} delay={i * 0.12} className={`md:col-span-4 ${i === 1 ? "md:col-start-5" : ""} ${i === 2 ? "md:col-start-9" : ""}`}>
                <div className="group">
                  <span className="text-[10px] text-[#c9a96e] tracking-[0.2em] font-mono">{item.num}</span>
                  <div className="w-12 h-[1px] bg-white/10 my-6 group-hover:w-20 group-hover:bg-[#c9a96e]/40 transition-all duration-700" aria-hidden="true" />
                  <h3 className="editorial-heading text-2xl mb-4">{item.title}</h3>
                  <p className="text-sm text-[#5a5a5a] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Services — Double Bezel Grid */}
      <section className="section-padding px-6 md:px-12" aria-labelledby="services-heading">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>Services</SectionLabel>
          <SectionTitle id="services-heading">Capabilities</SectionTitle>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <FadeInUp key={service.title} delay={i * 0.08}>
                <div className="double-bezel group hover:shadow-[0_0_40px_rgba(201,169,110,0.05)] transition-shadow duration-700">
                  <div className="double-bezel-inner p-8 md:p-10">
                    <span className="text-[10px] text-[#5a5a5a] tracking-[0.2em] font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="editorial-heading text-2xl mt-4 mb-3 group-hover:text-[#c9a96e] transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#5a5a5a] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Timeline */}
      <section className="section-padding px-6 md:px-12" aria-labelledby="timeline-heading">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>Experience</SectionLabel>
          <SectionTitle id="timeline-heading">Career</SectionTitle>

          <div className="mt-20 space-y-0">
            {timeline.map((item, i) => (
              <FadeInUp key={item.year} delay={i * 0.08}>
                <div className="py-8 border-b border-white/[0.06] flex items-center gap-8 group hover:border-[#c9a96e]/20 transition-colors duration-700">
                  <span className="text-sm text-[#5a5a5a] tracking-wider font-mono w-20 shrink-0">
                    {item.year}
                  </span>
                  <span className="editorial-heading text-xl md:text-2xl group-hover:text-[#c9a96e] transition-colors duration-500">
                    {item.event}
                  </span>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
