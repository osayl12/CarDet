"use client";

import Image from "next/image";
import {
  FaSoap,
  FaBroom,
  FaGears,
  FaCouch,
  FaWandMagicSparkles,
  FaShieldHalved,
} from "react-icons/fa6";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageProvider";

const ICONS = [FaSoap, FaBroom, FaGears, FaCouch, FaWandMagicSparkles, FaShieldHalved];

const IMAGES = [
  "/images/services/exterior-wash.jpg",
  "/images/services/interior-detailing.jpg",
  "/images/services/engine-bay.jpg",
  "/images/services/leather-seats.jpg",
  "/images/services/paint-correction.jpg",
  "/images/services/nano-coating.jpg",
];

export default function ServicesGrid() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative border-t border-white/5 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.services.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">{t.services.title}</h2>
          <p className="mt-3 max-w-xl text-white/60">{t.services.description}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={service.name} delay={i * 80}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-accent/40">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={IMAGES[i % IMAGES.length]}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/10 to-transparent" />
                    <div className="absolute bottom-3 start-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-white shadow-lg">
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-white/60">{service.description}</p>
                    <div className="mt-5 flex items-baseline justify-between border-t border-white/10 pt-4">
                      <span className="text-xs uppercase tracking-widest text-white/40">
                        {t.services.priceFrom}
                      </span>
                      <span className="text-2xl font-bold text-accent">{service.price}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} className="mt-10 text-center">
          <a
            href="#quote"
            className="inline-block rounded-full bg-accent px-8 py-3 text-lg font-semibold transition-colors hover:bg-accent2"
          >
            {t.header.links.quote}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
