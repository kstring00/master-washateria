import type { Amenity, FAQ, GalleryItem, Machine, Promotion, Review, Service } from "@/types/site";

export const services: Service[] = [
  {
    id: "self-service",
    eyebrow: "Do it yourself",
    title: "Self-Service Laundry",
    description: "Fast, easy-to-use washers and dryers with sizes for everyday loads, family laundry, and bulky bedding.",
    icon: "washer",
    ctaLabel: "See machines",
    href: "#machines",
    featured: true
  },
  {
    id: "wash-fold",
    eyebrow: "Drop it off",
    title: "Wash & Fold",
    description: "Leave the laundry with us. We wash, dry, neatly fold, and get it ready for your closet.",
    icon: "shirt",
    ctaLabel: "How it works",
    href: "#wash-fold"
  },
  {
    id: "pickup-delivery",
    eyebrow: "Optional service",
    title: "Pickup & Delivery",
    description: "When enabled for a client, this card can route customers into the laundromat's existing pickup and delivery platform.",
    icon: "truck",
    ctaLabel: "Schedule pickup",
    href: "#location"
  },
  {
    id: "commercial",
    eyebrow: "For local businesses",
    title: "Commercial Laundry",
    description: "A reusable lead path for salons, gyms, spas, restaurants, vacation rentals, and other recurring laundry needs.",
    icon: "building",
    ctaLabel: "Request information",
    href: "#location"
  }
];

export const machines: Machine[] = [
  {
    id: "20-washer",
    type: "Washer",
    size: "20 lb",
    label: "Everyday Load",
    idealFor: "About 1 basket",
    price: "$4.00",
    quantity: 12,
    features: ["Great for daily clothes", "Quick cycle"]
  },
  {
    id: "40-washer",
    type: "Washer",
    size: "40 lb",
    label: "Family Load",
    idealFor: "About 2–3 baskets",
    price: "$6.50",
    quantity: 8,
    features: ["Towels + family loads", "Extra rinse option"]
  },
  {
    id: "80-washer",
    type: "Washer",
    size: "80 lb",
    label: "Oversized Load",
    idealFor: "Comforters + bulky items",
    price: "$10.00",
    quantity: 4,
    features: ["King comforters", "Large family loads"]
  },
  {
    id: "30-dryer",
    type: "Dryer",
    size: "30 lb",
    label: "Standard Dryer",
    idealFor: "Everyday loads",
    price: "$1.75",
    quantity: 16,
    features: ["High heat", "Fast dry"]
  },
  {
    id: "50-dryer",
    type: "Dryer",
    size: "50 lb",
    label: "Large Dryer",
    idealFor: "Bulky loads",
    price: "$2.50",
    quantity: 8,
    features: ["Comforters", "Large towels"]
  }
];

export const amenities: Amenity[] = [
  { title: "Free Wi‑Fi", description: "Stay connected while your cycle runs.", icon: "wifi" },
  { title: "Easy Parking", description: "Convenient parking close to the entrance.", icon: "parking" },
  { title: "Air Conditioned", description: "Bright, comfortable indoor space year-round.", icon: "snowflake" },
  { title: "Attended Store", description: "Friendly help available during staffed hours.", icon: "shield" },
  { title: "Big Folding Tables", description: "Plenty of space to finish the job comfortably.", icon: "fold" },
  { title: "Laundry Supplies", description: "Detergent, softener, and essentials available on site.", icon: "vending" },
  { title: "Accessible", description: "Step-free entry and generous aisle space.", icon: "accessibility" },
  { title: "Comfortable Seating", description: "A cleaner, calmer place to wait.", icon: "seat" }
];

export const promotions: Promotion[] = [
  {
    title: "$5 Off Wash & Fold",
    description: "New customers can try drop-off laundry with a simple first-visit offer.",
    badge: "NEW CUSTOMER",
    ctaLabel: "Ask about wash & fold",
    ctaUrl: "#wash-fold",
    featured: true
  }
];

export const reviews: Review[] = [
  { name: "Maya R.", text: "Bright, clean, and the large machines make comforter day way easier. The attendant was really helpful too.", rating: 5, source: "Google" },
  { name: "Chris T.", text: "I can get in, run two loads, fold everything, and get out without wasting half my day.", rating: 5, source: "Google" },
  { name: "Danielle S.", text: "The wash and fold service is the reason I keep coming back. Everything is folded neatly and ready to put away.", rating: 5, source: "Google" }
];

export const reviewThemes = ["Very clean", "Large machines", "Helpful staff", "Easy parking", "Fast dryers", "Great wash & fold"];

export const faqs: FAQ[] = [
  { question: "What time is last wash?", answer: "For this demo, last wash is 8:45 PM. Change this in config/business.ts for each client." },
  { question: "Do you take coins?", answer: "This demo supports coin, card, and mobile payment. Only list payment methods the real store actually accepts." },
  { question: "What size machine should I use for a comforter?", answer: "A large-capacity machine is usually the easiest choice for bulky bedding. The machine guide can be tailored to the store's exact equipment." },
  { question: "Do you sell detergent?", answer: "Yes in this demo. The amenities section is fully configurable, so remove this answer if the real store does not sell supplies." },
  { question: "How does wash & fold work?", answer: "Drop off your laundry, choose any preferences the store offers, and the team washes, dries, and folds it for pickup." },
  { question: "Do you offer pickup and delivery?", answer: "This module is optional. When the client offers pickup and delivery, enable it and connect the CTA to their existing service." },
  { question: "Is there parking?", answer: "Yes in this demo. Parking details live in the central business configuration." },
  { question: "Can I wash large comforters?", answer: "Yes. The oversized-machine cards are designed to make bulky-item capacity understandable before the customer arrives." }
];

export const gallery: GalleryItem[] = [
  { src: "/laundromat-hero.svg", alt: "Bright modern laundromat interior concept", label: "Bright, modern interior", className: "gallery-main" },
  { src: "/machines.svg", alt: "Large capacity washer concept", label: "Large-capacity machines" },
  { src: "/folding.svg", alt: "Clean folding area concept", label: "Room to fold" },
  { src: "/storefront.svg", alt: "Neighborhood laundromat storefront concept", label: "Easy to find" }
];
