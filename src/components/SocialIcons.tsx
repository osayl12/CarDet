import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";

// TODO: להחליף את קישור הפייסבוק ל-URL האמיתי של דף העסק
const LINKS = [
  { label: "Facebook", href: "https://facebook.com/", Icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/slickgarage0", Icon: FaInstagram },
  { label: "TikTok", href: "https://www.tiktok.com/@slickgarage0", Icon: FaTiktok },
  { label: "WhatsApp", href: "https://wa.me/972504306426", Icon: FaWhatsapp },
];

export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {LINKS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:ring-accent"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
