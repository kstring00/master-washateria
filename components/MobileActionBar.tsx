import { MapPin, Phone, Shirt } from "lucide-react";
import { business, phoneHref } from "@/config/business";
import { washFoldHref } from "@/lib/site";

export function MobileActionBar() {
  return (
    <nav className="mobile-action-bar" aria-label="Quick actions">
      <a href={business.directionsUrl} target="_blank" rel="noreferrer"><MapPin size={18} /><span>Directions</span></a>
      <a href={phoneHref}><Phone size={18} /><span>Call</span></a>
      {business.features.washFold && <a href={washFoldHref()}><Shirt size={18} /><span>Wash & Fold</span></a>}
    </nav>
  );
}
