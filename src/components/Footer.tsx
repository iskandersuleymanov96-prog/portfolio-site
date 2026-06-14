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
    <footer className="border-t border-white/[0.04] bg-[#080808]" role="contentinfo">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="pt-24 pb-20">
          <Link href="/contact" className="group block">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
            >
              <span className="label-tiny text-[#c9a96e] mb-6 block">Get in Touch</span>
              <h2 className="heading-giant text-[#e8e8e8] group-hover:text-[#c9a96e] transition-colors duration-700">
                Let&apos;s
                <br />
                <span className="text-stroke-white">work</span>
                <br />
                together
              </h2>
            </motion.div>
          </Link>
        </div>

        <div className="py-16 border-t border-white/[0.04] grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link href="/" className="heading-section block mb-6 text-[#e8e8e8]">
              Saintnuit
            </Link>
            <p className="body-large max-w-sm">
              Creative Director & AI Filmmaker. Crafting visual experiences
              at the intersection of technology and aesthetics.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="label-tiny mb-8">Navigation</h4>
            <nav aria-label="Footer navigation">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#e8e8e8]/60 hover:text-[#c9a96e] transition-colors duration-300 link-underline w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <div className="md:col-span-4">
            <h4 className="label-tiny mb-8">Connect</h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e8e8e8]/60 hover:text-[#c9a96e] transition-colors duration-300 link-underline w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[#444] tracking-wider font-mono">
            &copy; {currentYear} Saintnuit. All rights reserved.
          </p>
          <p className="text-[10px] text-[#444] tracking-wider font-mono">
            All work &copy; respective clients
          </p>
        </div>
      </div>
    </footer>
  );
}
