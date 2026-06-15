"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
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
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-[#c9a96e]/40 z-[60] origin-left"
        style={{ scaleX }}
      />

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav
          className={`flex items-center justify-between px-6 md:px-10 lg:px-16 py-6 transition-all duration-700 ${
            scrolled
              ? "bg-[#080808]/80 backdrop-blur-xl"
              : "bg-transparent"
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="heading-section text-[#e8e8e8] hover:text-[#c9a96e] transition-colors duration-500"
            aria-label="Saintnuit - Home"
          >
            S.
          </Link>

          <div className="hidden md:flex items-center gap-10" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                className={`label-tiny transition-all duration-300 ${
                  pathname === link.href
                    ? "text-[#c9a96e]"
                    : "text-[#666] hover:text-[#e8e8e8]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col items-end gap-1.5 w-8 h-8 justify-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 4, width: 24 } : { rotate: 0, y: 0, width: 24 }}
              className="h-[1px] bg-[#e8e8e8] block origin-center"
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              className="w-16 h-[1px] bg-[#e8e8e8] block"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -4, width: 24 } : { rotate: 0, y: 0, width: 16 }}
              className="h-[1px] bg-[#e8e8e8] block origin-center"
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{
                    delay: 0.15 + i * 0.08,
                    duration: 0.7,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 text-5xl md:text-6xl tracking-[0.05em] font-light transition-colors duration-300 ${
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
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 label-tiny"
            >
              Saintnuit &copy; {new Date().getFullYear()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
