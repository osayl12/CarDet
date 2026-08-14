"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageProvider";

type Phase = "checking" | "playing" | "closing" | "done";

const STORAGE_KEY = "sg-intro-seen";

export default function IntroGate() {
  const { t } = useLanguage();
  const [phase, setPhase] = useState<Phase>("checking");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    setPhase(seen ? "done" : "playing");
  }, []);

  const close = () => {
    setPhase((p) => (p === "playing" ? "closing" : p));
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  useEffect(() => {
    if (phase !== "closing") return;
    const timeout = setTimeout(() => setPhase("done"), 700);
    return () => clearTimeout(timeout);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-700"
      style={{
        opacity: phase === "closing" ? 0 : 1,
        pointerEvents: phase === "closing" ? "none" : "auto",
      }}
      aria-hidden={phase === "checking"}
    >
      {phase !== "checking" && (
        <>
          <video
            ref={videoRef}
            src="/videos/gate-intro.mp4"
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover"
            onEnded={close}
          />
          <button
            type="button"
            onClick={close}
            className="absolute bottom-8 end-8 rounded-full border border-white/30 bg-black/40 px-5 py-2 text-sm text-white/80 backdrop-blur transition-colors hover:bg-black/60"
          >
            {t.intro.skip}
          </button>
        </>
      )}
    </div>
  );
}
