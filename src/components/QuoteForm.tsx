"use client";

import { useState, FormEvent } from "react";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageProvider";

type Status = "idle" | "loading" | "success" | "error";

export default function QuoteForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

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
            <select
              name="service"
              defaultValue=""
              className="rounded-xl bg-neutral-900 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-accent"
            >
              <option value="" disabled>
                {t.quote.servicePlaceholder}
              </option>
              <option value="wash">{t.quote.serviceOptions.wash}</option>
              <option value="detailing">{t.quote.serviceOptions.detailing}</option>
              <option value="nano">{t.quote.serviceOptions.nano}</option>
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
