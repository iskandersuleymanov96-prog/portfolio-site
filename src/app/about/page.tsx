"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import PageTransition, { SectionLabel, SectionTitle, Divider, FadeInUp, ImageScaleReveal, SectionReveal, TextReveal } from "@/components/PageTransition";
import { services } from "@/lib/data";

const timeline = [
  { year: "2024", event: "Founded Saintnuit studio" },
  { year: "2023", event: "Art Director, Palais de Tokyo exhibition" },
  { year: "2022", event: "Visual identity for The Row" },
  { year: "2021", event: "AI filmmaker residency, Berlin" },
  { year: "2020", event: "Released first experimental film" },
];

const skills = ["Creative Direction", "AI Filmmaking", "Visual Identity", "Art Direction", "Fashion Film", "Music", "Visual Research", "Installation"];

export default function AboutPage() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: portraitRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <PageTransition>
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>About</SectionLabel>
          <SectionTitle>
            The practice behind
            <br />
            <span className="text-[#c9a96e]">the vision</span>
          </SectionTitle>
        </div>
      </section>

      <section className="pb-24 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            {[...skills, ...skills].map((skill, i) => (
              <span key={`b-${i}`} className="flex items-center">
                <span className="label-tiny text-[#555]">
                  {skill}
                </span>
                <span className="marquee-sep mx-8" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-28 px-6 md:px-12 lg:px-16" aria-labelledby="bio-heading">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          <FadeInUp className="lg:col-span-5">
            <div ref={portraitRef} className="relative overflow-hidden rounded-lg">
              <motion.div style={{ y: portraitY }} className="relative aspect-[3/4] overflow-hidden">
                <ImageScaleReveal className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
                    alt="Saintnuit portrait"
                    fill
                    className="object-cover"
                  />
                </ImageScaleReveal>
              </motion.div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2} className="lg:col-span-7 flex flex-col justify-center">
            <h2 id="bio-heading" className="sr-only">Biography</h2>
            <p className="heading-editorial text-[#e0ddd5]">
              <TextReveal>Saintnuit is a multidisciplinary creative practice operating at the intersection of film, fashion, and artificial intelligence.</TextReveal>
            </p>
            <p className="mt-10 body-large max-w-lg">
              Founded on the belief that technology should amplify — not
              replace — human creative vision. With a background in visual arts
              and a deep engagement with emerging technologies, the studio has
              produced campaigns for luxury houses, directed experimental films,
              and exhibited at international art institutions.
            </p>
            <p className="mt-6 body-large max-w-lg">
              Every project begins with a question: how do we make something
              that feels inevitable? The answer always lies in the tension
              between technology and intuition, between the algorithm and the
              hand.
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              {["Film", "Fashion", "AI", "Art Direction", "Visual Identity"].map((tag) => (
                <span key={tag} className="eyebrow">{tag}</span>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      <Divider />

      <SectionReveal>
      <section className="section-padding px-6 md:px-12 lg:px-16" aria-labelledby="philosophy-heading">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>Philosophy</SectionLabel>
          <SectionTitle id="philosophy-heading">Guiding Principles</SectionTitle>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-10">
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
                  <span className="text-[10px] text-[#b8976a] tracking-[0.2em] font-mono">{item.num}</span>
                  <div className="w-12 h-[1px] bg-white/[0.06] my-8 group-hover:w-20 group-hover:bg-[#b8976a]/30 transition-all duration-700" aria-hidden="true" />
                  <h3 className="heading-section mb-5"><TextReveal>{item.title}</TextReveal></h3>
                  <p className="text-sm text-[#666] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
      </SectionReveal>

      <Divider />

      <SectionReveal>
      <section className="section-padding px-6 md:px-12 lg:px-16" aria-labelledby="services-heading-about">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>Services</SectionLabel>
          <SectionTitle id="services-heading-about">Capabilities</SectionTitle>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <FadeInUp key={service.title} delay={i * 0.08}>
                <div className="double-bezel group hover:shadow-[0_0_40px_rgba(201,169,110,0.03)] transition-shadow duration-700">
                  <div className="double-bezel-inner p-8 md:p-10">
                    <span className="label-tiny text-[#444]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="heading-section mt-5 mb-3 group-hover:text-[#b8976a] transition-colors duration-500">
                      <TextReveal>{service.title}</TextReveal>
                    </h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      {service.description}
                    </p>
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
      <section className="section-padding px-6 md:px-12 lg:px-16" aria-labelledby="timeline-heading">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>Experience</SectionLabel>
          <SectionTitle id="timeline-heading">Career</SectionTitle>

          <div className="mt-24 space-y-0">
            {timeline.map((item, i) => (
              <FadeInUp key={item.year} delay={i * 0.08}>
                <div className="service-row py-8 flex items-center gap-8 group">
                  <span className="text-sm text-[#555] tracking-wider font-mono w-20 shrink-0">
                    {item.year}
                  </span>
                  <span className="heading-section group-hover:text-[#c9a96e] transition-colors duration-500">
                    {item.event}
                  </span>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
      </SectionReveal>
    </PageTransition>
  );
}
