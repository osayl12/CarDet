"use client";

import { useState, useEffect, FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageProvider";
import { servicesData } from "@/lib/servicesData";

type Status = "idle" | "loading" | "success" | "error";

function QuoteFormInner() {
  const { t, lang } = useLanguage();
  const searchParams = useSearchParams();
  const services = servicesData[lang];

  const [status, setStatus] = useState<Status>("idle");
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const param = searchParams.get("service");
    if (param) setSelectedService(param);
  }, [searchParams]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("success");
      form.reset();
      setSelectedService("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="relative border-t border-white/5 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.quote.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">{t.quote.title}</h2>
          <p className="mt-3 text-white/60">{t.quote.description}</p>
        </Reveal>

        <Reveal delay={150} className="mt-10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 text-right sm:grid-cols-2"
          >
            <input
              name="name"
              required
              placeholder={t.quote.name}
              className="rounded-xl bg-neutral-900 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-accent"
            />
            <input
              name="phone"
              required
              placeholder={t.quote.phone}
              className="rounded-xl bg-neutral-900 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-accent"
            />
            <input
              name="email"
              type="email"
              placeholder={t.quote.email}
              className="rounded-xl bg-neutral-900 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-accent sm:col-span-2"
            />
            <input
              name="carModel"
              placeholder={t.quote.carModel}
              className="rounded-xl bg-neutral-900 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-accent"
            />
            <label className="flex flex-col gap-1 text-start">
              <span className="px-1 text-xs uppercase tracking-widest text-white/40">
                {t.quote.preferredDate}
              </span>
              <input
                name="preferredDate"
                type="date"
                className="rounded-xl bg-neutral-900 px-4 py-3 text-white/80 ring-1 ring-white/10 outline-none focus:ring-accent [color-scheme:dark]"
              />
            </label>
            <label className="flex flex-col gap-1 text-start">
              <span className="px-1 text-xs uppercase tracking-widest text-white/40">
                {t.quote.preferredTime}
              </span>
              <input
                name="preferredTime"
                type="time"
                className="rounded-xl bg-neutral-900 px-4 py-3 text-white/80 ring-1 ring-white/10 outline-none focus:ring-accent [color-scheme:dark]"
              />
            </label>
            <select
              name="service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="rounded-xl bg-neutral-900 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-accent"
            >
              <option value="" disabled>
                {t.quote.servicePlaceholder}
              </option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
              <option value="other">{t.quote.serviceOptions.other}</option>
            </select>
            <textarea
              name="message"
              placeholder={t.quote.message}
              rows={4}
              className="rounded-xl bg-neutral-900 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-accent sm:col-span-2"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-accent px-8 py-3 font-semibold transition-colors hover:bg-accent2 disabled:opacity-50 sm:col-span-2"
            >
              {status === "loading" ? t.quote.submitting : t.quote.submit}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-400 sm:col-span-2">{t.quote.success}</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400 sm:col-span-2">{t.quote.error}</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default function QuoteForm() {
  return (
    <Suspense fallback={null}>
      <QuoteFormInner />
    </Suspense>
  );
}
