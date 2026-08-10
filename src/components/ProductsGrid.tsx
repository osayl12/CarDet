"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageProvider";

export default function ProductsGrid() {
  const { t } = useLanguage();

  return (
    <section id="products" className="bg-black px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.products.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">{t.products.title}</h2>
          <p className="mt-3 max-w-xl text-white/60">{t.products.description}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.products.items.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className="rounded-2xl bg-neutral-900 p-5 ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-2">
                <div className="mb-4 flex aspect-square items-center justify-center rounded-xl bg-neutral-800 text-white/20">
                  {t.products.productImage}
                </div>
                <h3 className="font-semibold">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-accent font-bold">{p.price}</span>
                  <button className="rounded-full border border-white/20 px-4 py-1.5 text-sm hover:border-accent hover:text-accent transition-colors">
                    {t.products.details}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
