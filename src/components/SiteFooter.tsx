"use client";

import Reveal from "./Reveal";
import SocialIcons from "./SocialIcons";
import { useLanguage } from "@/lib/LanguageProvider";

const LAT = 32.896149;
const LON = 35.397032;
const DIRECTIONS_URL = `https://www.google.com/maps?q=${LAT},${LON}`;
const MAP_EMBED_URL = `https://www.google.com/maps?q=${LAT},${LON}&z=15&output=embed`;

export default function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="relative border-t border-white/5 px-6 py-16 md:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
        <Reveal>
          <div className="text-xl font-bold">{t.header.businessName}</div>
          <p className="mt-3 text-white/60">{t.footer.description}</p>
          <SocialIcons className="mt-5" />
        </Reveal>

        <Reveal delay={100}>
          <h3 className="font-semibold text-white/90">{t.footer.contactTitle}</h3>
          <ul className="mt-3 space-y-2 text-white/60">
            <li>
              <a href="tel:0504306426" className="hover:text-accent transition-colors">
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
