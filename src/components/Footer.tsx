"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
  { href: "https://instagram.com/saintnuit", label: "Instagram" },
  { href: "https://t.me/saintnuit", label: "Telegram" },
  { href: "mailto:hello@saintnuit.com", label: "Email" },
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Work" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.04] bg-[#050505]" role="contentinfo">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        {/* Large editorial CTA */}
        <div className="mb-20">
          <Link href="/contact" className="group block">
            <motion.h2
              whileHover={{ x: 10 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="editorial-heading text-6xl md:text-8xl lg:text-9xl"
            >
              Let&apos;s work
              <br />
              <span className="text-[#c9a96e]">together</span>
            </motion.h2>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link href="/" className="editorial-heading text-3xl block mb-6">
              Saintnuit
            </Link>
            <p className="text-[#5a5a5a] text-sm leading-relaxed max-w-sm">
              Creative Director & AI Filmmaker. Crafting visual experiences
              at the intersection of technology and aesthetics.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#5a5a5a] mb-6">
              Navigation
            </h4>
            <nav aria-label="Footer navigation">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#e8e8e8]/70 hover:text-[#c9a96e] transition-colors duration-300 link-underline w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#5a5a5a] mb-6">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e8e8e8]/70 hover:text-[#c9a96e] transition-colors duration-300 link-underline w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[#5a5a5a] tracking-wider font-mono">
            &copy; {currentYear} Saintnuit. All rights reserved.
          </p>
          <p className="text-[10px] text-[#5a5a5a] tracking-wider font-mono">
            All work &copy; respective clients
          </p>
        </div>
      </div>
    </footer>
  );
}
