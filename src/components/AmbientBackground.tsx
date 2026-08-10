"use client";

import { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (layerRef.current) {
          layerRef.current.style.transform = `translateY(${window.scrollY * 0.08}px)`;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink" aria-hidden="true">
      <div ref={layerRef} className="absolute inset-0">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
      </div>
      <div className="grain-overlay" />
    </div>
  );
}
