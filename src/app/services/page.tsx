"use client";

import Link from "next/link";
import PageTransition, { SectionLabel, SectionTitle, Divider, FadeInUp, SectionReveal, TextReveal } from "@/components/PageTransition";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <PageTransition>
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>Services</SectionLabel>
          <SectionTitle>
            What I
            <br />
            <span className="text-[#c9a96e]">Offer</span>
          </SectionTitle>
          <p className="mt-8 body-large max-w-lg">
            Each discipline feeds the others. Film informs fashion, AI informs music,
            research informs everything. The practice is one — the outputs are many.
          </p>
        </div>
      </section>

      <SectionReveal>
      <section className="px-6 md:px-12 lg:px-16 pb-20" aria-labelledby="services-list-heading">
        <div className="max-w-[1400px] mx-auto">
          <h2 id="services-list-heading" className="sr-only">Services list</h2>
          <div>
            {services.map((service, i) => (
              <FadeInUp key={service.title} delay={i * 0.08}>
                <div className="service-row py-12 md:py-16 group">
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex items-start gap-6 md:gap-12">
                      <span className="text-[10px] text-[#444] tracking-wider font-mono mt-1" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="heading-editorial group-hover:text-[#c9a96e] transition-colors duration-500">
                          <TextReveal>{service.title}</TextReveal>
                        </h3>
                        <p className="text-[#666] text-sm mt-4 max-w-xl leading-relaxed">{service.description}</p>
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
      <section className="section-padding px-6 md:px-12 lg:px-16" aria-labelledby="approach-heading">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>Approach</SectionLabel>
          <SectionTitle id="approach-heading">How I Work</SectionTitle>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                num: "01",
                title: "Listen",
                text: "Every project starts with understanding — the brand, the audience, the cultural moment. No assumptions.",
              },
              {
                num: "02",
                title: "Explore",
                text: "Research, reference, prototype. Pushing ideas until something unexpected emerges. The best work lives in the unknown.",
              },
              {
                num: "03",
                title: "Refine",
                text: "Editing is everything. Removing until only the essential remains. What stays must justify its existence.",
              },
            ].map((step, i) => (
              <FadeInUp key={step.title} delay={i * 0.12}>
                <div className="group">
                  <span className="text-[10px] text-[#b8976a] tracking-[0.2em] font-mono">{step.num}</span>
                  <div className="w-12 h-[1px] bg-white/[0.06] my-8 group-hover:w-20 group-hover:bg-[#b8976a]/30 transition-all duration-700" aria-hidden="true" />
                  <h3 className="heading-section mb-5"><TextReveal>{step.title}</TextReveal></h3>
                  <p className="text-sm text-[#666] leading-relaxed">
                    {step.text}
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
      <section className="section-padding px-6 md:px-12 lg:px-16" aria-labelledby="cta-heading">
        <div className="max-w-[1400px] mx-auto text-center">
          <FadeInUp>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 id="cta-heading" className="heading-display mt-4">
              <TextReveal>Ready to start</TextReveal>
            </h2>
            <h2 className="heading-display text-[#b8976a]">
              <TextReveal delay={0.12}>a project?</TextReveal>
            </h2>
            <div className="mt-16">
              <Link href="/contact" className="magnetic-btn">
                Get in Touch
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
