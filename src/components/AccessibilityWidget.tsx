"use client";

import { useEffect, useState } from "react";
import {
  FaUniversalAccess,
  FaXmark,
  FaTextHeight,
  FaAlignRight,
  FaAlignCenter,
  FaAlignLeft,
  FaFont,
  FaCircleHalfStroke,
  FaDroplet,
  FaArrowRotateLeft,
} from "react-icons/fa6";
import { useLanguage } from "@/lib/LanguageProvider";

const FONT_STEPS = ["100%", "115%", "130%", "145%"];
const LINE_HEIGHT_STEPS = ["normal", "1.8", "2.2", "2.6"];
const ALIGN_STEPS: Array<"right" | "center" | "left"> = ["right", "center", "left"];

const STORAGE_KEY = "a11y-prefs-v1";

type Prefs = {
  fontStep: number;
  lineHeightStep: number;
  alignStep: number;
  readableFont: boolean;
  contrast: boolean;
  grayscale: boolean;
};

const DEFAULT_PREFS: Prefs = {
  fontStep: 0,
  lineHeightStep: 0,
  alignStep: 0,
  readableFont: false,
  contrast: false,
  grayscale: false,
};

function applyPrefs(prefs: Prefs) {
  const html = document.documentElement;

  html.style.fontSize = FONT_STEPS[prefs.fontStep];

  const lh = LINE_HEIGHT_STEPS[prefs.lineHeightStep];
  html.style.setProperty("--a11y-line-height", lh === "normal" ? "" : lh);
  html.classList.toggle("a11y-line-height-on", lh !== "normal");

  const align = ALIGN_STEPS[prefs.alignStep];
  html.style.setProperty("--a11y-text-align", align === "right" ? "" : align);
  html.classList.toggle("a11y-align-on", align !== "right");

  html.classList.toggle("a11y-readable-font", prefs.readableFont);
  html.classList.toggle("a11y-contrast", prefs.contrast);
  html.classList.toggle("a11y-grayscale", prefs.grayscale);
}

export default function AccessibilityWidget() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULT_PREFS, ...JSON.parse(raw) };
        setPrefs(parsed);
        applyPrefs(parsed);
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    applyPrefs(prefs);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // ignore
    }
  }, [prefs, loaded]);

  const cycle = (key: "fontStep" | "lineHeightStep" | "alignStep", max: number) => {
    setPrefs((p) => ({ ...p, [key]: (p[key] + 1) % max }));
  };

  const toggle = (key: "readableFont" | "contrast" | "grayscale") => {
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  const reset = () => setPrefs(DEFAULT_PREFS);

  const alignLabel =
    ALIGN_STEPS[prefs.alignStep] === "right"
      ? t.a11y.alignRight
      : ALIGN_STEPS[prefs.alignStep] === "center"
      ? t.a11y.alignCenter
      : t.a11y.alignLeft;

  const AlignIcon =
    ALIGN_STEPS[prefs.alignStep] === "right"
      ? FaAlignRight
      : ALIGN_STEPS[prefs.alignStep] === "center"
      ? FaAlignCenter
      : FaAlignLeft;

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={t.a11y.openAria}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-black/50 transition-transform duration-300 hover:scale-110"
      >
        <FaUniversalAccess size={26} />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label={t.a11y.title}
          className="fixed bottom-24 right-6 z-[60] w-72 rounded-2xl bg-neutral-900 p-4 text-white shadow-2xl ring-1 ring-white/10"
        >
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold">{t.a11y.title}</h3>
            <button
              onClick={() => setOpen(false)}
              aria-label={t.a11y.closeAria}
              className="rounded-full p-1 hover:bg-white/10"
            >
              <FaXmark size={14} />
            </button>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <button
              onClick={() => cycle("fontStep", FONT_STEPS.length)}
              className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 hover:bg-white/10"
            >
              <span className="flex items-center gap-2">
                <FaTextHeight /> {t.a11y.fontSize}
              </span>
              <span className="text-white/50">{FONT_STEPS[prefs.fontStep]}</span>
            </button>

            <button
              onClick={() => cycle("lineHeightStep", LINE_HEIGHT_STEPS.length)}
              className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 hover:bg-white/10"
            >
              <span className="flex items-center gap-2">
                <FaTextHeight className="rotate-90" /> {t.a11y.lineHeight}
              </span>
              <span className="text-white/50">
                {LINE_HEIGHT_STEPS[prefs.lineHeightStep]}
              </span>
            </button>

            <button
              onClick={() => cycle("alignStep", ALIGN_STEPS.length)}
              className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 hover:bg-white/10"
            >
              <span className="flex items-center gap-2">
                <AlignIcon /> {t.a11y.textAlign}
              </span>
              <span className="text-white/50">{alignLabel}</span>
            </button>

            <button
              onClick={() => toggle("readableFont")}
              className={`flex items-center justify-between rounded-xl px-3 py-2 hover:bg-white/10 ${
                prefs.readableFont ? "bg-accent/30" : "bg-white/5"
              }`}
            >
              <span className="flex items-center gap-2">
                <FaFont /> {t.a11y.readableFont}
              </span>
              <span className="text-white/50">
                {prefs.readableFont ? t.a11y.on : t.a11y.off}
              </span>
            </button>

            <button
              onClick={() => toggle("contrast")}
              className={`flex items-center justify-between rounded-xl px-3 py-2 hover:bg-white/10 ${
                prefs.contrast ? "bg-accent/30" : "bg-white/5"
              }`}
            >
              <span className="flex items-center gap-2">
                <FaCircleHalfStroke /> {t.a11y.contrast}
              </span>
              <span className="text-white/50">{prefs.contrast ? t.a11y.on : t.a11y.off}</span>
            </button>

            <button
              onClick={() => toggle("grayscale")}
              className={`flex items-center justify-between rounded-xl px-3 py-2 hover:bg-white/10 ${
                prefs.grayscale ? "bg-accent/30" : "bg-white/5"
              }`}
            >
              <span className="flex items-center gap-2">
                <FaDroplet /> {t.a11y.grayscale}
              </span>
              <span className="text-white/50">{prefs.grayscale ? t.a11y.on : t.a11y.off}</span>
            </button>

            <button
              onClick={reset}
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-white/10 px-3 py-2 hover:bg-white/20"
            >
              <FaArrowRotateLeft /> {t.a11y.reset}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
