import { MapPin, Phone, Sparkles } from "lucide-react";
import { business, phoneHref } from "@/config/business";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand ${footer ? "brand-footer" : ""}`} href="#top" aria-label={`${business.businessName} home`}>
      <span className="brand-mark" aria-hidden="true"><Sparkles size={18} strokeWidth={2.2} /></span>
      <span className="brand-copy">
        <strong>{business.shortName}</strong>
        <small>LAUNDRY CO.</small>
      </span>
    </a>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#services">Services</a>
        {business.features.machineGuide && <a href="#machines">Machines</a>}
        {business.features.washFold && <a href="#wash-fold">Wash & Fold</a>}
        <a href="#amenities">Amenities</a>
        <a href="#reviews">Reviews</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div className="header-actions">
        <a className="header-phone" href={phoneHref} aria-label={`Call ${business.businessName}`}><Phone size={16} /><span>Call</span></a>
        <a className="button button-accent" href={business.directionsUrl} target="_blank" rel="noreferrer"><MapPin size={16} />Get Directions</a>
      </div>
    </header>
  );
}
