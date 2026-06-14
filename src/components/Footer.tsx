"use client";

import Link from "next/link";

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
    <footer className="border-t border-white/[0.04] bg-[#060606]" role="contentinfo">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Link href="/" className="editorial-heading text-2xl block mb-4">
              Saintnuit
            </Link>
            <p className="text-[#6b6860] text-sm leading-relaxed max-w-xs">
              Creative Director & AI Filmmaker.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#6b6860] mb-5">
              Navigation
            </h4>
            <nav aria-label="Footer navigation">
              <div className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#e0ddd5]/50 hover:text-[#b8976a] transition-colors duration-300 link-underline w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#6b6860] mb-5">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e0ddd5]/50 hover:text-[#b8976a] transition-colors duration-300 link-underline w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 md:flex md:flex-col md:items-end md:text-right">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#6b6860] mb-5">
              Info
            </h4>
            <p className="text-[10px] text-[#6b6860] tracking-wider font-mono">
              Based in Paris
            </p>
            <p className="text-[10px] text-[#6b6860] tracking-wider font-mono mt-1">
              Available worldwide
            </p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[#6b6860] tracking-wider font-mono">
            &copy; {currentYear} Saintnuit
          </p>
          <p className="text-[10px] text-[#6b6860] tracking-wider font-mono">
            All work &copy; respective clients
          </p>
        </div>
      </div>
    </footer>
  );
}
