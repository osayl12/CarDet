"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaXmark,
  FaVideo,
  FaTags,
  FaFileInvoiceDollar,
  FaAddressCard,
  FaWhatsapp,
} from "react-icons/fa6";
import { useLanguage } from "@/lib/LanguageProvider";

const SECTION_IDS = ["gallery", "services", "quote", "contact"];
const WHATSAPP_NUMBER = "972504306426";

export default function SiteHeader() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const LINKS = [
    { href: "#gallery", label: t.header.links.gallery, Icon: FaVideo },
    { href: "#services", label: t.header.links.services, Icon: FaTags },
    { href: "#quote", label: t.header.links.quote, Icon: FaFileInvoiceDollar, cta: true },
    { href: "#contact", label: t.header.links.contact, Icon: FaAddressCard },
  ];

  // close on outside click / Escape
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  // lock body scroll when full-screen mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // scroll-spy: highlight the section currently in view
  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 py-4 md:px-12">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight">{t.header.businessName}</div>

        <button
          ref={buttonRef}
          onClick={() => setOpen((o) => !o)}
          aria-label={t.header.menuAria}
          aria-expanded={open}
          className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? "border-accent bg-accent/10 text-accent shadow-[0_0_20px_-4px_theme(colors.accent)]"
              : "border-white/30 hover:border-accent hover:text-accent"
          }`}
        >
          <span
            className={`absolute transition-all duration-300 ${
              open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          >
            <FaBars size={18} />
          </span>
          <span
            className={`absolute transition-all duration-300 ${
              open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
            }`}
          >
            <FaXmark size={18} />
          </span>
        </button>
      </div>

      {/* mobile backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        ref={panelRef}
        className={`fixed inset-4 top-20 z-40 flex origin-top flex-col overflow-hidden rounded-2xl bg-neutral-900/95 shadow-2xl ring-1 ring-white/10 backdrop-blur transition-all duration-300 md:absolute md:inset-x-auto md:inset-y-auto md:end-12 md:top-full md:mt-3 md:w-72 md:flex-none ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <div className="h-[3px] w-full shrink-0 bg-gradient-to-r from-accent via-accent2 to-accent" />

        <div className="px-5 pb-1 pt-4 text-xs font-semibold uppercase tracking-widest text-white/30">
          {t.header.menuAria}
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-1 p-3 md:flex-none md:justify-start md:gap-1 md:p-2">
          {LINKS.map(({ href, label, Icon, cta }, i) => {
            const isActive = activeId === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
                className={`group flex items-center gap-3 rounded-xl px-3 py-3.5 text-base transition-all duration-300 md:py-2.5 md:text-sm ${
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                } ${
                  cta
                    ? "mt-1 bg-accent text-white hover:bg-accent2"
                    : isActive
                    ? "bg-white/10 text-accent"
                    : "hover:bg-white/10 hover:text-accent"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                    cta
                      ? "bg-white/15 text-white"
                      : isActive
                      ? "bg-accent/20 text-accent"
                      : "bg-white/5 text-white/50 group-hover:bg-accent/20 group-hover:text-accent"
                  }`}
                >
                  <Icon size={15} />
                </span>
                {label}
                {isActive && !cta && (
                  <span className="ms-auto h-1.5 w-1.5 rounded-full bg-accent" />
                )}
              </a>
            );
          })}
        </nav>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border-t border-white/10 px-5 py-3 text-sm text-white/60 transition-colors hover:text-[#25D366]"
        >
          <FaWhatsapp size={16} />
          {t.header.quickContact}
        </a>

        <div className="border-t border-white/10 p-3">
          <div className="mb-2 px-1 text-xs uppercase tracking-widest text-white/40">
            {t.header.language}
          </div>
          <div className="flex rounded-full bg-white/5 p-1">
            <button
              onClick={() => setLang("en")}
              className={`flex-1 rounded-full py-1.5 text-sm font-medium transition-colors ${
                lang === "en" ? "bg-accent text-white" : "text-white/60 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("he")}
              className={`flex-1 rounded-full py-1.5 text-sm font-medium transition-colors ${
                lang === "he" ? "bg-accent text-white" : "text-white/60 hover:text-white"
              }`}
            >
              עברית
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
