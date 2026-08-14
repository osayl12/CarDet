"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import SocialIcons from "./SocialIcons";
import { useLanguage } from "@/lib/LanguageProvider";
import { DIRECTIONS_URL, MAP_EMBED_URL, PHONE_TEL } from "@/lib/business";

export default function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="relative border-t border-white/5 px-6 py-16 md:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
        <Reveal>
          <div className="flex items-center gap-2">
            <Image
              src="/images/brand/logo.png"
              alt={t.header.businessName}
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="font-script text-2xl tracking-wide">{t.header.businessName}</span>
          </div>
          <p className="mt-3 text-white/60">{t.footer.description}</p>
          <SocialIcons className="mt-5" />
        </Reveal>

        <Reveal delay={100}>
          <h3 className="font-semibold text-white/90">{t.footer.contactTitle}</h3>
          <ul className="mt-3 space-y-2 text-white/60">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="hover:text-accent transition-colors">
                📞 {t.footer.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${t.footer.email}`}
                className="hover:text-accent transition-colors"
              >
                ✉️ {t.footer.email}
              </a>
            </li>
            <li>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                📍 {t.footer.address}
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <h3 className="font-semibold text-white/90">{t.footer.hoursTitle}</h3>
          <ul className="mt-3 space-y-1 text-white/60">
            {t.footer.hours.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={250} className="mx-auto mt-10 max-w-6xl">
        <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="280"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Business location map"
          />
        </div>
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-accent hover:text-accent2 transition-colors"
        >
          {t.footer.getDirections} →
        </a>
      </Reveal>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-sm text-white/30">
        © {new Date().getFullYear()} {t.header.businessName}. {t.footer.rights}
      </div>
    </footer>
  );
}
