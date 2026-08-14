"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import AmbientBackground from "@/components/AmbientBackground";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/LanguageProvider";
import { servicesData, serviceDetailLabels } from "@/lib/servicesData";

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { lang } = useLanguage();
  const labels = serviceDetailLabels[lang];
  const service = servicesData[lang].find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <main>
        <AmbientBackground />
        <SiteHeader />
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="font-heading text-3xl font-bold">{labels.notFoundTitle}</h1>
          <p className="mt-3 max-w-md text-white/60">{labels.notFoundBody}</p>
          <Link
            href="/#services"
            className="mt-8 rounded-full bg-accent px-8 py-3 font-semibold transition-colors hover:bg-accent2"
          >
            {labels.backToServices}
          </Link>
        </section>
        <SiteFooter />
        <WhatsAppButton />
        <AccessibilityWidget />
      </main>
    );
  }

  return (
    <main>
      <AmbientBackground />
      <SiteHeader />

      <section className="px-6 pb-16 pt-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-accent"
            >
              <FaArrowRightLong size={12} className="rotate-180 rtl:rotate-0" />
              {labels.backToServices}
            </Link>

            <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-3xl">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>

            <h1 className="mt-8 font-heading text-3xl font-bold md:text-5xl">{service.name}</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/70">{service.intro}</p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Reveal delay={100}>
              <h2 className="font-heading text-xl font-semibold text-accent">{labels.process}</h2>
              <ol className="mt-4 space-y-3">
                {service.steps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-white/70">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-semibold text-accent">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={150}>
              <h2 className="font-heading text-xl font-semibold text-accent">{labels.materialsUsed}</h2>
              <ul className="mt-4 space-y-3">
                {service.materials.map((material) => (
                  <li key={material} className="flex gap-3 text-white/70">
                    <FaCheck size={13} className="mt-1 shrink-0 text-accent" />
                    <span>{material}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-14">
            <h2 className="font-heading text-xl font-semibold text-accent">{labels.pricing}</h2>
            <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-white/10">
              {service.tiers.map((tier, i) => (
                <div
                  key={tier.label}
                  className={`flex items-center justify-between px-5 py-4 ${
                    i % 2 === 0 ? "bg-neutral-900" : "bg-neutral-900/50"
                  }`}
                >
                  <span className="text-white/80">{tier.label}</span>
                  <span className="font-racing text-lg tracking-wide text-accent">{tier.price}</span>
                </div>
              ))}
            </div>

            {service.addOns.length > 0 && (
              <>
                <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-white/40">
                  {labels.addOnsTitle}
                </h3>
                <div className="mt-3 overflow-hidden rounded-2xl ring-1 ring-white/10">
                  {service.addOns.map((addOn, i) => (
                    <div
                      key={addOn.label}
                      className={`flex items-center justify-between px-5 py-4 ${
                        i % 2 === 0 ? "bg-neutral-900" : "bg-neutral-900/50"
                      }`}
                    >
                      <span className="text-white/80">{addOn.label}</span>
                      <span className="font-racing tracking-wide text-white/70">{addOn.price}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Reveal>

          <Reveal delay={250} className="mt-12 text-center">
            <a
              href={`/?service=${service.slug}#quote`}
              className="inline-block rounded-full bg-accent px-10 py-4 text-lg font-semibold transition-colors hover:bg-accent2"
            >
              {labels.ctaLabel}
            </a>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
      <AccessibilityWidget />
    </main>
  );
}
