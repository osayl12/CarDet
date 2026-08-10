"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageProvider";

const VIDEOS = [
  "/videos/transition-1-2.mp4",
  "/videos/transition-2-3.mp4",
  "/videos/transition-3-4.mp4",
];

export default function ScrollVideoStory() {
  const { t } = useLanguage();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeSegment, setActiveSegment] = useState(0);
  const [opacities, setOpacities] = useState<number[]>([1, 0, 0, 0]);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height - viewportH;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 0));
      const progress = total > 0 ? scrolled / total : 0;

      const segCount = VIDEOS.length;
      const scaled = progress * segCount;
      let segIndex = Math.floor(scaled);
      if (segIndex >= segCount) segIndex = segCount - 1;
      if (segIndex < 0) segIndex = 0;
      const segProgress = Math.min(Math.max(scaled - segIndex, 0), 1);

      setActiveSegment(segIndex);

      const video = videoRefs.current[segIndex];
      if (video && video.readyState >= 1 && isFinite(video.duration) && video.duration > 0) {
        const target = segProgress * video.duration;
        if (Math.abs(video.currentTime - target) > 0.03) {
          video.currentTime = target;
        }
      }

      const nextOpacities = t.hero.states.map((_, i) => {
        const dist = Math.abs(scaled - i);
        return Math.max(0, 1 - dist);
      });
      setOpacities(nextOpacities);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [t]);

  return (
    <div ref={wrapperRef} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {VIDEOS.map((src, i) => (
          <video
            key={src}
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            src={src}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-150"
            style={{ opacity: activeSegment === i ? 1 : 0 }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

        {t.hero.states.map((state, i) => (
          <div
            key={state.title}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
            style={{
              opacity: opacities[i],
              pointerEvents: opacities[i] > 0.5 ? "auto" : "none",
            }}
          >
            <span className="mb-3 text-sm uppercase tracking-widest text-accent">
              {state.eyebrow}
            </span>
            <h2 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
              {state.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/80">{state.body}</p>
            {"cta" in state && state.cta && (
              <a
                href="#quote"
                className="mt-8 rounded-full bg-accent px-8 py-3 text-lg font-semibold transition-colors hover:bg-accent2"
              >
                {state.cta}
              </a>
            )}
          </div>
        ))}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/50">
          {t.hero.scrollHint}
        </div>
      </div>
    </div>
  );
}
