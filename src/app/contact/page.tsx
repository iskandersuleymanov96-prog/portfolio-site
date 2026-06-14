"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import PageTransition, { SectionLabel, SectionTitle, FadeInUp } from "@/components/PageTransition";

const contactLinks = [
  { label: "Instagram", href: "https://instagram.com/saintnuit", value: "@saintnuit" },
  { label: "Telegram", href: "https://t.me/saintnuit", value: "@saintnuit" },
  { label: "Email", href: "mailto:hello@saintnuit.com", value: "hello@saintnuit.com" },
];

const availableServices = [
  "Creative Direction",
  "AI Campaigns",
  "Art Direction",
  "Visual Identity",
  "Film Production",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormState({ name: "", email: "", project: "", message: "" });
    setTimeout(() => setSubmitStatus("idle"), 5000);
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormState((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  return (
    <PageTransition>
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel>Contact</SectionLabel>
          <SectionTitle>
            Get in
            <br />
            <span className="text-[#c9a96e]">Touch</span>
          </SectionTitle>
          <p className="mt-8 text-[#5a5a5a] max-w-lg">
            Open for collaborations, commissions, and new projects. Let&apos;s
            create something meaningful together.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Links */}
          <FadeInUp className="lg:col-span-5">
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] font-mono mb-10">
              Connect
            </h3>

            <div className="space-y-0">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                  className="flex items-center justify-between py-8 border-b border-white/[0.06] group hover:border-[#c9a96e]/20 transition-colors duration-700"
                >
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#5a5a5a] font-mono block mb-2">
                      {link.label}
                    </span>
                    <span className="editorial-heading text-xl group-hover:text-[#c9a96e] transition-colors duration-500">
                      {link.value}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-[#5a5a5a] group-hover:text-[#c9a96e] transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </motion.a>
              ))}
            </div>

            <div className="mt-14">
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] font-mono mb-5">
                Available For
              </h3>
              <div className="flex flex-wrap gap-2">
                {availableServices.map((service) => (
                  <span key={service} className="eyebrow">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </FadeInUp>

          {/* Contact Form */}
          <FadeInUp delay={0.2} className="lg:col-span-7">
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] font-mono mb-10">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-10" noValidate>
              <div>
                <label htmlFor="name" className="text-[10px] tracking-[0.2em] uppercase text-[#5a5a5a] font-mono block mb-4">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/[0.08] py-4 text-[#e8e8e8] focus:border-[#c9a96e] outline-none transition-colors duration-500 placeholder:text-[#333]"
                  placeholder="Your name"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase text-[#5a5a5a] font-mono block mb-4">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/[0.08] py-4 text-[#e8e8e8] focus:border-[#c9a96e] outline-none transition-colors duration-500 placeholder:text-[#333]"
                  placeholder="your@email.com"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="project" className="text-[10px] tracking-[0.2em] uppercase text-[#5a5a5a] font-mono block mb-4">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formState.project}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/[0.08] py-4 text-[#e8e8e8] focus:border-[#c9a96e] outline-none transition-colors duration-500 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#050505]">
                    Select a project type
                  </option>
                  <option value="campaign" className="bg-[#050505]">
                    AI Campaign
                  </option>
                  <option value="film" className="bg-[#050505]">
                    Film Production
                  </option>
                  <option value="identity" className="bg-[#050505]">
                    Visual Identity
                  </option>
                  <option value="art-direction" className="bg-[#050505]">
                    Art Direction
                  </option>
                  <option value="other" className="bg-[#050505]">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase text-[#5a5a5a] font-mono block mb-4">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-transparent border-b border-white/[0.08] py-4 text-[#e8e8e8] focus:border-[#c9a96e] outline-none transition-colors duration-500 resize-none placeholder:text-[#333]"
                  placeholder="Tell me about your project..."
                  aria-required="true"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="magnetic-btn disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <span className="btn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </span>
                </button>
              </div>

              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[#c9a96e] text-sm"
                >
                  Thank you for your message. I will get back to you soon.
                </motion.p>
              )}
            </form>
          </FadeInUp>
        </div>
      </section>
    </PageTransition>
  );
}
