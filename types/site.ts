export type HoursRow = { day: string; hours: string };

export type FeatureFlags = {
  selfService: boolean;
  washFold: boolean;
  pickupDelivery: boolean;
  commercialLaundry: boolean;
  machineGuide: boolean;
  promotions: boolean;
  loyalty: boolean;
};

export type ExternalLinks = {
  laundryAppUrl?: string;
  machineAvailabilityUrl?: string;
  loyaltyUrl?: string;
  pickupDeliveryUrl?: string;
  washFoldOrderUrl?: string;
  commercialInquiryUrl?: string;
};

export type BusinessConfig = {
  previewMode: boolean;
  businessName: string;
  shortName: string;
  tagline: string;
  description: string;
  cityLine: string;
  phone: string;
  email?: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  hours: HoursRow[];
  lastWashTime?: string;
  directionsUrl: string;
  googleMapsUrl: string;
  googleReviewsUrl: string;
  googleRating?: number;
  googleReviewCount?: number;
  facebookUrl?: string;
  instagramUrl?: string;
  paymentMethods: string[];
  parkingNotes?: string;
  accessibilityNotes?: string;
  attended?: boolean;
  openSevenDays?: boolean;
  features: FeatureFlags;
  external: ExternalLinks;
  brand: {
    background: string;
    surface: string;
    ink: string;
    muted: string;
    accent: string;
    accent2: string;
  };
};

export type Service = {
  id: string;
  title: string;
  description: string;
  eyebrow: string;
  icon: "washer" | "shirt" | "truck" | "building";
  ctaLabel: string;
  href: string;
  featured?: boolean;
};

export type Machine = {
  id: string;
  type: "Washer" | "Dryer";
  size: string;
  label: string;
  idealFor: string;
  price?: string;
  quantity?: number;
  features?: string[];
};

export type Amenity = {
  title: string;
  description: string;
  icon: "wifi" | "parking" | "snowflake" | "shield" | "fold" | "vending" | "accessibility" | "seat";
};

export type Review = {
  name: string;
  text: string;
  rating: number;
  source?: string;
};

export type Promotion = {
  title: string;
  description: string;
  badge?: string;
  expiration?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  featured?: boolean;
};

export type FAQ = { question: string; answer: string };

export type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  className?: string;
};
