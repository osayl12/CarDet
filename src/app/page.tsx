import SiteHeader from "@/components/SiteHeader";
import ScrollVideoStory from "@/components/ScrollVideoStory";
import ServicesGrid from "@/components/ServicesGrid";
import VideoGallery from "@/components/VideoGallery";
import QuoteForm from "@/components/QuoteForm";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import AmbientBackground from "@/components/AmbientBackground";

// ProductsGrid is temporarily removed from the page (not deleted) —
// see src/components/ProductsGrid.tsx. Re-add the import + <ProductsGrid />
// below whenever the shop is ready to go live.

export default function Home() {
  return (
    <main>
      <AmbientBackground />
      <SiteHeader />
      <ScrollVideoStory />
      <ServicesGrid />
      <VideoGallery />
      <QuoteForm />
      <SiteFooter />
      <WhatsAppButton />
      <AccessibilityWidget />
    </main>
  );
}
