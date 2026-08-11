import type { BusinessConfig } from "@/types/site";

/**
 * CLIENT CLONE CHECKLIST — START HERE.
 * Change this file first when cloning the master for a real laundromat.
 */
export const business: BusinessConfig = {
  previewMode: true,
  businessName: "Bluebird Laundry Co.",
  shortName: "Bluebird",
  tagline: "Laundry, handled your way.",
  description:
    "A bright, modern neighborhood laundromat with fast machines, helpful attendants, easy self-service, and convenient wash & fold.",
  cityLine: "Serving Stafford + Southwest Houston",
  phone: "+1 (281) 555-0184",
  email: "hello@bluebirdlaundry.com",
  address: "1234 Main Street",
  city: "Stafford",
  state: "TX",
  zip: "77477",
  hours: [
    { day: "Monday", hours: "7:00 AM – 10:00 PM" },
    { day: "Tuesday", hours: "7:00 AM – 10:00 PM" },
    { day: "Wednesday", hours: "7:00 AM – 10:00 PM" },
    { day: "Thursday", hours: "7:00 AM – 10:00 PM" },
    { day: "Friday", hours: "7:00 AM – 10:00 PM" },
    { day: "Saturday", hours: "7:00 AM – 10:00 PM" },
    { day: "Sunday", hours: "8:00 AM – 9:00 PM" }
  ],
  lastWashTime: "8:45 PM",
  directionsUrl: "https://maps.google.com/",
  googleMapsUrl: "https://maps.google.com/",
  googleReviewsUrl: "https://www.google.com/maps",
  googleRating: 4.8,
  googleReviewCount: 286,
  instagramUrl: "https://www.instagram.com/",
  facebookUrl: "https://www.facebook.com/",
  paymentMethods: ["Card", "Mobile Pay", "Coin"],
  parkingNotes: "Free parking directly in front of the store.",
  accessibilityNotes: "Step-free entry and wide aisles throughout the store.",
  attended: true,
  openSevenDays: true,
  features: {
    selfService: true,
    washFold: true,
    pickupDelivery: false,
    commercialLaundry: false,
    machineGuide: true,
    promotions: true,
    loyalty: false
  },
  external: {
    washFoldOrderUrl: undefined,
    pickupDeliveryUrl: undefined,
    machineAvailabilityUrl: undefined,
    laundryAppUrl: undefined,
    loyaltyUrl: undefined,
    commercialInquiryUrl: undefined
  },
  brand: {
    background: "#08253a",
    surface: "#0f3550",
    ink: "#f8fbfd",
    muted: "#a9c0ce",
    accent: "#59d5ff",
    accent2: "#f6c45f"
  }
};

export const fullAddress = `${business.address}, ${business.city}, ${business.state} ${business.zip}`;
export const phoneHref = `tel:${business.phone.replace(/[^+\d]/g, "")}`;
