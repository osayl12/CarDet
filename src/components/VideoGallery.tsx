"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageProvider";

export default function VideoGallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="relative border-t border-white/5 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.gallery.eyebrow}
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold md:text-4xl">{t.gallery.title}</h2>
          <p className="mt-3 max-w-xl text-white/60">{t.gallery.description}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.gallery.items.map((title, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group aspect-[9/16] overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-2">
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl">
                    ▶
                  </div>
                  <p className="text-sm text-white/70">{title}</p>
                  <p className="text-xs text-white/30">{t.gallery.placeholderNote}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
