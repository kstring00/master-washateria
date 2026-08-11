import {
  Accessibility,
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock3,
  Coffee,
  CreditCard,
  Droplets,
  FoldVertical,
  MapPin,
  Navigation,
  ParkingCircle,
  Phone,
  Shirt,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Star,
  Truck,
  WashingMachine,
  Wifi,
} from "lucide-react";
import { amenities, faqs, gallery, machines, promotions, reviews, reviewThemes, services } from "@/data/site";
import { business, fullAddress, phoneHref } from "@/config/business";
import { serviceEnabled, serviceHref, washFoldHref } from "@/lib/site";
import { Brand } from "@/components/Header";
import type { Amenity, Service } from "@/types/site";

function ServiceIcon({ service }: { service: Service }) {
  const props = { size: 23, strokeWidth: 1.8 };
  if (service.icon === "shirt") return <Shirt {...props} />;
  if (service.icon === "truck") return <Truck {...props} />;
  if (service.icon === "building") return <Building2 {...props} />;
  return <WashingMachine {...props} />;
}

function AmenityIcon({ amenity }: { amenity: Amenity }) {
  const props = { size: 22, strokeWidth: 1.7 };
  if (amenity.icon === "wifi") return <Wifi {...props} />;
  if (amenity.icon === "parking") return <ParkingCircle {...props} />;
  if (amenity.icon === "snowflake") return <Snowflake {...props} />;
  if (amenity.icon === "shield") return <ShieldCheck {...props} />;
  if (amenity.icon === "fold") return <FoldVertical {...props} />;
  if (amenity.icon === "vending") return <Coffee {...props} />;
  if (amenity.icon === "accessibility") return <Accessibility {...props} />;
  return <BadgeCheck {...props} />;
}

export function TrustBar() {
  const trust = [
    { icon: <Clock3 size={19} />, strong: business.openSevenDays ? "Open 7 Days" : "Convenient Hours", small: business.lastWashTime ? `Last wash ${business.lastWashTime}` : "Check today's hours" },
    { icon: <WashingMachine size={19} />, strong: "Large Machines", small: "Comforters + family loads" },
    { icon: <ShieldCheck size={19} />, strong: business.attended ? "Clean & Attended" : "Clean Store", small: "A better place to do laundry" },
    { icon: <CreditCard size={19} />, strong: business.paymentMethods.join(" + "), small: "Simple payment options" },
  ];

  return (
    <section className="trust-strip" aria-label="Store highlights">
      <div className="shell trust-grid">
        {trust.map((item) => <div className="trust-item" key={item.strong}>{item.icon}<div><strong>{item.strong}</strong><span>{item.small}</span></div></div>)}
      </div>
    </section>
  );
}

export function Services() {
  const active = services.filter(serviceEnabled);
  return (
    <section className="section section-light" id="services">
      <div className="shell">
        <div className="split-heading">
          <div className="section-heading">
            <span className="kicker">LAUNDRY THAT FITS YOUR DAY</span>
            <h2>Choose how you want to get it done.</h2>
            <p>Some days you need a fast self-service run. Other days you would rather hand the whole basket over. This master adapts to whatever the store actually offers.</p>
          </div>
          <a className="text-link" href="#location">Hours & location <ArrowRight size={14} /></a>
        </div>
        <div className={`service-grid service-count-${active.length}`}>
          {active.map((service, index) => (
            <article className={`service-card ${service.featured ? "service-card-featured" : ""}`} key={service.id}>
              <div className="service-number">0{index + 1}</div>
              <div className="service-icon"><ServiceIcon service={service} /></div>
              <span className="service-eyebrow">{service.eyebrow}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={serviceHref(service)}>{service.ctaLabel}<ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MachineGuide() {
  if (!business.features.machineGuide) return null;
  const washers = machines.filter((m) => m.type === "Washer");
  const dryers = machines.filter((m) => m.type === "Dryer");
  return (
    <section className="section machine-section" id="machines">
      <div className="shell">
        <div className="machine-heading">
          <div className="section-heading dark-heading">
            <span className="kicker">NO MORE GUESSING AT THE MACHINE</span>
            <h2>Pick the load size. We make the rest obvious.</h2>
            <p>A machine guide turns confusing pound ratings into something useful: how many baskets, what it fits, and what it costs.</p>
          </div>
          <div className="machine-note"><Droplets size={20} /><div><strong>Big bedding?</strong><span>Jump straight to an oversized washer.</span></div></div>
        </div>

        <div className="machine-category">
          <div className="machine-category-title"><span>WASHERS</span><small>{washers.reduce((sum, m) => sum + (m.quantity ?? 0), 0)} machines in this demo</small></div>
          <div className="machine-grid">
            {washers.map((machine) => <MachineCard key={machine.id} machine={machine} />)}
          </div>
        </div>
        <div className="machine-category dryer-category">
          <div className="machine-category-title"><span>DRYERS</span><small>Choose a larger dryer for bulky loads</small></div>
          <div className="machine-grid dryer-grid">
            {dryers.map((machine) => <MachineCard key={machine.id} machine={machine} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function MachineCard({ machine }: { machine: (typeof machines)[number] }) {
  return (
    <article className="machine-card">
      <div className="machine-dial"><span>{machine.size}</span><small>{machine.type}</small></div>
      <div className="machine-card-body">
        <div className="machine-top"><span>{machine.label}</span>{machine.price && <strong>{machine.price}</strong>}</div>
        <h3>{machine.idealFor}</h3>
        {machine.features && <div className="machine-tags">{machine.features.map((feature) => <span key={feature}>{feature}</span>)}</div>}
        <div className="machine-bottom"><span>{machine.quantity ? `${machine.quantity} available in demo` : "Quantity configurable"}</span><WashingMachine size={16} /></div>
      </div>
    </article>
  );
}

export function WashFold() {
  if (!business.features.washFold) return null;
  return (
    <section className="washfold-section" id="wash-fold">
      <div className="shell washfold-grid">
        <div className="washfold-art"><img src="/folding.svg" alt="Clean folded laundry concept illustration" /><div className="washfold-price"><span>DEMO PRICING</span><strong>$1.75<small>/ lb</small></strong><em>Replace with real store pricing</em></div></div>
        <div className="washfold-copy">
          <span className="kicker">DROP-OFF WASH & FOLD</span>
          <h2>Drop it off.<br />Pick it up <em>fresh.</em></h2>
          <p>Turn wash & fold into a clear second conversion path instead of burying it in a paragraph. The site explains the value before the customer ever calls.</p>
          <div className="washfold-steps">
            <div><span>01</span><div><strong>Bring it in</strong><small>Drop your bag at the counter.</small></div></div>
            <div><span>02</span><div><strong>We handle everything</strong><small>Wash, dry, and neatly fold.</small></div></div>
            <div><span>03</span><div><strong>Pick up & put away</strong><small>Ready for the drawer, not another chore.</small></div></div>
          </div>
          <div className="washfold-actions">
            <a className="button button-accent button-large" href={washFoldHref()}><Shirt size={18} />{business.external.washFoldOrderUrl ? "Start an Order" : "Call About Wash & Fold"}</a>
            <a className="text-link light-link" href="#faq">Common questions <ArrowRight size={14} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    ["01", "Bring your laundry", "Baskets, bags, comforters — bring what needs washing."],
    ["02", "Choose a machine", "Use the size guide instead of guessing."],
    ["03", "Pay your way", business.paymentMethods.join(", ") + "."],
    ["04", "Wash + dry", "Fast cycles get the work moving."],
    ["05", "Fold it", "Use the large tables and finish comfortably."],
    ["06", "Head home", "Laundry done. Get the rest of your day back."],
  ];
  return (
    <section className="section how-section">
      <div className="shell">
        <div className="section-heading dark-heading"><span className="kicker">FIRST VISIT?</span><h2>Simple from basket to done.</h2><p>The master can explain unfamiliar payment systems, card kiosks, apps, last-wash policies, or anything else that makes a first visit easier.</p></div>
        <div className="steps-grid">{steps.map(([number, title, desc]) => <div className="step-card" key={number}><span>{number}</span><div><h3>{title}</h3><p>{desc}</p></div></div>)}</div>
      </div>
    </section>
  );
}

export function Amenities() {
  return (
    <section className="section section-light amenities-section" id="amenities">
      <div className="shell amenities-layout">
        <div className="section-heading amenities-heading"><span className="kicker">WHILE THE MACHINES RUN</span><h2>A laundromat you don't mind spending time in.</h2><p>Amenities answer the question customers rarely say out loud: “What's it actually going to feel like while I wait?”</p><div className="amenities-stat"><strong>{business.googleRating ?? "—"}</strong><span>Google rating<br />in this demo</span></div></div>
        <div className="amenities-grid">{amenities.map((amenity) => <article className="amenity-card" key={amenity.title}><span><AmenityIcon amenity={amenity} /></span><h3>{amenity.title}</h3><p>{amenity.description}</p></article>)}</div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="section gallery-section">
      <div className="shell">
        <div className="split-heading"><div className="section-heading dark-heading"><span className="kicker">SEE IT BEFORE YOU DRIVE OVER</span><h2>The store should sell the store.</h2><p>When tailoring a clone, swap these concept visuals for real photos of the machines, folding area, storefront, parking, and wash & fold counter.</p></div>{business.instagramUrl && <a className="text-link light-link" href={business.instagramUrl} target="_blank" rel="noreferrer">See Instagram <ArrowRight size={14} /></a>}</div>
        <div className="gallery-grid">{gallery.map((item) => <figure className={`gallery-item ${item.className ?? ""}`} key={item.src}><img src={item.src} alt={item.alt} /><figcaption><span>{item.label}</span><Sparkles size={14} /></figcaption></figure>)}</div>
      </div>
    </section>
  );
}

export function Promotion() {
  if (!business.features.promotions || promotions.length === 0) return null;
  const promo = promotions.find((p) => p.featured) ?? promotions[0];
  return (
    <section className="promo-wrap">
      <div className="shell promo-card">
        <div className="promo-icon"><Sparkles size={26} /></div>
        <div><span className="kicker">{promo.badge ?? "CURRENT OFFER"}</span><h2>{promo.title}</h2><p>{promo.description}</p></div>
        {promo.ctaLabel && <a className="button button-dark" href={promo.ctaUrl ?? "#location"}>{promo.ctaLabel}<ArrowRight size={15} /></a>}
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="section section-warm reviews-section" id="reviews">
      <div className="shell reviews-layout">
        <div className="reviews-summary">
          <span className="kicker">NEIGHBORHOOD PROOF</span>
          <div className="rating-display"><strong>{business.googleRating ?? "—"}</strong><span>/ 5</span></div>
          <div className="stars">{[1,2,3,4,5].map((n) => <Star key={n} size={18} fill="currentColor" />)}</div>
          <p>{business.googleReviewCount ? `Based on ${business.googleReviewCount} Google reviews in this demo.` : "Connect the client's Google review count here."}</p>
          <div className="theme-list">{reviewThemes.map((theme) => <span key={theme}><BadgeCheck size={12} />{theme}</span>)}</div>
          <a className="text-link" href={business.googleReviewsUrl} target="_blank" rel="noreferrer">Read Google reviews <ArrowRight size={14} /></a>
        </div>
        <div className="review-cards">{reviews.map((review) => <article className="review-card" key={review.name}><div className="review-stars">{Array.from({ length: review.rating }, (_, i) => <Star size={13} fill="currentColor" key={i} />)}</div><blockquote>“{review.text}”</blockquote><div><strong>{review.name}</strong><span>{review.source ?? "Customer review"}</span></div></article>)}</div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="section faq-section" id="faq">
      <div className="shell faq-layout">
        <div className="section-heading dark-heading"><span className="kicker">BEFORE YOU COME IN</span><h2>Quick answers to the questions people actually ask.</h2><p>FAQs are fully data-driven, so the clone can explain the real store's payment system, comforter policy, wash & fold turnaround, parking, and more.</p></div>
        <div className="faq-list">{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<b>+</b></summary><p>{faq.answer}</p></details>)}</div>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section className="section section-light location-section" id="location">
      <div className="shell location-grid">
        <div>
          <div className="section-heading"><span className="kicker">COME ON IN</span><h2>Easy to find. Easy to get started.</h2><p>For a laundromat, location is a conversion. Address, hours, parking, last wash, phone, and directions should never be buried.</p></div>
          <div className="location-facts">
            <div><MapPin size={19} /><span><strong>{fullAddress}</strong><small>{business.parkingNotes}</small></span></div>
            <div><Phone size={19} /><span><strong><a href={phoneHref}>{business.phone}</a></strong><small>Tap to call the store</small></span></div>
            <div><Clock3 size={19} /><span><strong>Last wash: {business.lastWashTime ?? "Check with store"}</strong><small>{business.openSevenDays ? "Open seven days a week" : "See current hours"}</small></span></div>
            <div><Accessibility size={19} /><span><strong>Accessibility</strong><small>{business.accessibilityNotes ?? "Contact the store for accessibility details."}</small></span></div>
          </div>
          <div className="location-actions"><a className="button button-dark button-large" href={business.directionsUrl} target="_blank" rel="noreferrer"><Navigation size={18} />Get Directions</a><a className="button button-outline-dark button-large" href={phoneHref}><Phone size={18} />Call Store</a></div>
        </div>
        <aside className="hours-card">
          <div className="hours-head"><div><span className="mini-label">STORE HOURS</span><h3>This week</h3></div><Clock3 size={25} /></div>
          <div className="hours-list">{business.hours.map((row) => <div key={row.day}><span>{row.day}</span><strong>{row.hours}</strong></div>)}</div>
          {business.lastWashTime && <p>Last wash is listed as {business.lastWashTime} in this demo. Confirm the actual policy before publishing a client site.</p>}
        </aside>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="shell final-inner">
        <div><span className="kicker">READY WHEN YOU ARE</span><h2>Laundry doesn't have to take all day.</h2><p>Fast machines. A clean space. Help when you need it.</p></div>
        <div className="final-actions"><a className="button button-accent button-large" href={business.directionsUrl} target="_blank" rel="noreferrer"><Navigation size={18} />Get Directions</a>{business.features.washFold && <a className="button button-ghost button-large" href={washFoldHref()}><Shirt size={18} />Wash & Fold</a>}</div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div><Brand footer /><p>{business.tagline} A reusable master built to become the next laundromat's site quickly.</p></div>
          <div><strong>Explore</strong><a href="#services">Services</a>{business.features.machineGuide && <a href="#machines">Machines</a>}{business.features.washFold && <a href="#wash-fold">Wash & Fold</a>}<a href="#amenities">Amenities</a></div>
          <div><strong>Visit</strong><a href={business.directionsUrl} target="_blank" rel="noreferrer">{fullAddress}</a><a href={phoneHref}>{business.phone}</a><span>Last wash {business.lastWashTime}</span></div>
          <div><strong>Online</strong>{business.instagramUrl && <a href={business.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>}{business.facebookUrl && <a href={business.facebookUrl} target="_blank" rel="noreferrer">Facebook</a>}<a href={business.googleReviewsUrl} target="_blank" rel="noreferrer">Google Reviews</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} {business.businessName}</span>{business.previewMode && <span className="preview-note">Concept preview • unofficial until approved</span>}</div>
      </div>
    </footer>
  );
}
