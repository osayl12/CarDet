import SiteHeader from "@/components/SiteHeader";
import ScrollVideoStory from "@/components/ScrollVideoStory";
import ServicesGrid from "@/components/ServicesGrid";
import VideoGallery from "@/components/VideoGallery";
import ProductsGrid from "@/components/ProductsGrid";
import QuoteForm from "@/components/QuoteForm";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import AmbientBackground from "@/components/AmbientBackground";

export default function Home() {
  return (
    <main>
      <AmbientBackground />
      <SiteHeader />
      <ScrollVideoStory />
      <ServicesGrid />
      <VideoGallery />
      <ProductsGrid />
      <QuoteForm />
      <SiteFooter />
      <WhatsAppButton />
      <AccessibilityWidget />
    </main>
  );
}
