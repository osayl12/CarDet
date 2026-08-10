"use client";

import { useEffect, useRef, useState } from "react";
import { FaBars, FaXmark, FaVideo, FaCartShopping, FaFileInvoiceDollar, FaAddressCard } from "react-icons/fa6";
import { useLanguage } from "@/lib/LanguageProvider";

export default function SiteHeader() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const LINKS = [
    { href: "#gallery", label: t.header.links.gallery, Icon: FaVideo },
    { href: "#products", label: t.header.links.products, Icon: FaCartShopping },
    { href: "#quote", label: t.header.links.quote, Icon: FaFileInvoiceDollar },
    { href: "#contact", label: t.header.links.contact, Icon: FaAddressCard },
  ];

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
              ? "border-accent bg-accent/10 text-accent"
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

      <div
        ref={panelRef}
        className={`absolute end-6 top-full mt-3 w-64 origin-top overflow-hidden rounded-2xl bg-neutral-900/95 shadow-2xl ring-1 ring-white/10 backdrop-blur transition-all duration-300 md:end-12 ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-2">
          {LINKS.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors hover:bg-white/10 hover:text-accent"
            >
              <Icon size={16} className="text-white/50" />
              {label}
            </a>
          ))}
        </nav>

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
