import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileActionBar } from "@/components/MobileActionBar";
import {
  Amenities,
  FAQSection,
  FinalCTA,
  Footer,
  Gallery,
  HowItWorks,
  Location,
  MachineGuide,
  Promotion,
  Reviews,
  Services,
  TrustBar,
  WashFold,
} from "@/components/Sections";
import { business, fullAddress } from "@/config/business";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Laundry",
    name: business.businessName,
    description: business.description,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.zip,
      addressCountry: "US",
    },
    aggregateRating: business.googleRating && business.googleReviewCount ? {
      "@type": "AggregateRating",
      ratingValue: business.googleRating,
      reviewCount: business.googleReviewCount,
    } : undefined,
    sameAs: [business.instagramUrl, business.facebookUrl].filter(Boolean),
    location: fullAddress,
  };

  const vars = {
    "--site-bg": business.brand.background,
    "--site-surface": business.brand.surface,
    "--site-ink": business.brand.ink,
    "--site-muted": business.brand.muted,
    "--site-accent": business.brand.accent,
    "--site-accent2": business.brand.accent2,
  } as React.CSSProperties;

  return (
    <div className="site-root" style={vars}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <MachineGuide />
        <WashFold />
        <HowItWorks />
        <Amenities />
        <Gallery />
        <Promotion />
        <Reviews />
        <FAQSection />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
