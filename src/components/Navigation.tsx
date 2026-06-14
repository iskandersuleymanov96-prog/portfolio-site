"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Work" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-[#c9a96e]/60 z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Floating glass pill nav */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ${
          scrolled ? "opacity-100" : "opacity-100"
        }`}
      >
        <nav
          className={`flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-700 ${
            scrolled
              ? "bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-[#0a0a0a]/40 backdrop-blur-md border border-white/[0.04]"
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="px-5 py-2 text-[13px] tracking-[0.15em] font-light uppercase text-[#e8e8e8] hover:text-[#c9a96e] transition-colors duration-300"
            aria-label="Saintnuit - Home"
          >
            S
          </Link>

          <div className="w-[1px] h-4 bg-white/10" aria-hidden="true" />

          <div className="hidden md:flex items-center" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                className={`px-4 py-2 text-[11px] tracking-[0.15em] uppercase transition-all duration-300 ${
                  pathname === link.href
                    ? "text-[#c9a96e]"
                    : "text-[#5a5a5a] hover:text-[#e8e8e8]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="relative w-5 h-3">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-0 w-full h-[1px] bg-[#e8e8e8] block origin-center"
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-[#e8e8e8] block"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: 5 } : { rotate: 0, y: 0 }}
                className="absolute left-0 bottom-0 w-full h-[1px] bg-[#e8e8e8] block origin-center"
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              />
            </div>
          </button>
        </nav>
      </motion.div>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-3xl flex flex-col items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col items-center gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    delay: 0.1 + i * 0.06,
                    duration: 0.6,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 text-4xl md:text-5xl tracking-[0.08em] font-light transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-[#c9a96e]"
                        : "text-[#e8e8e8] hover:text-[#c9a96e]"
                    }`}
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 text-[10px] tracking-[0.2em] uppercase text-[#5a5a5a]"
            >
              Saintnuit &copy; {new Date().getFullYear()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
