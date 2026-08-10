"use client";

import Reveal from "./Reveal";
import SocialIcons from "./SocialIcons";
import { useLanguage } from "@/lib/LanguageProvider";

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
            <li>📍 {t.footer.address}</li>
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

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-sm text-white/30">
        © {new Date().getFullYear()} {t.header.businessName}. {t.footer.rights}
      </div>
    </footer>
  );
}
