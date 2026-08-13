"use client";

import { FaWhatsapp } from "react-icons/fa6";
import { useLanguage } from "@/lib/LanguageProvider";
import { WHATSAPP_URL } from "@/lib/business";

export default function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.aria}
      className="fixed bottom-6 left-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/50 transition-transform duration-300 hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
