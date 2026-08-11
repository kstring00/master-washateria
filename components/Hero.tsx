import { Clock3, MapPin, Navigation, Phone, Shirt, Star, WashingMachine } from "lucide-react";
import { business, phoneHref } from "@/config/business";
import { washFoldHref } from "@/lib/site";

export function Hero() {
  const payment = business.paymentMethods.join(" • ");

  return (
    <section className="hero" id="top">
      <div className="hero-visual" aria-hidden="true">
        <img src="/laundromat-hero.svg" alt="" />
        <div className="hero-wash" />
      </div>

      <div className="shell hero-inner">
        <div className="hero-copy">
          <div className="eyebrow-row">
            <span className="eyebrow"><span className="status-dot" /> Open today</span>
            <span className="eyebrow"><MapPin size={13} /> {business.cityLine}</span>
          </div>

          <p className="hero-kicker">YOUR NEIGHBORHOOD LAUNDRY, UPGRADED</p>
          <h1>Laundry,<br /><em>handled your way.</em></h1>
          <p className="hero-lede">{business.description}</p>

          <div className="hero-actions">
            <a className="button button-accent button-large" href={business.directionsUrl} target="_blank" rel="noreferrer"><Navigation size={18} />Get Directions</a>
            {business.features.washFold && <a className="button button-ghost button-large" href={washFoldHref()}><Shirt size={18} />Wash & Fold</a>}
          </div>

          <div className="hero-proof">
            {business.googleRating && (
              <div className="proof-block">
                <span className="proof-icon"><Star size={16} fill="currentColor" /></span>
                <div><strong>{business.googleRating} on Google</strong><small>{business.googleReviewCount ?? ""} neighborhood reviews</small></div>
              </div>
            )}
            <div className="proof-block">
              <span className="proof-icon"><Clock3 size={16} /></span>
              <div><strong>Open 7 days</strong><small>Last wash {business.lastWashTime ?? "before closing"}</small></div>
            </div>
          </div>
        </div>

        <aside className="hero-card" aria-label="Quick store information">
          <span className="mini-label">BEFORE YOU HEAD OVER</span>
          <h2>Everything you need to know, at a glance.</h2>
          <div className="quick-facts">
            <div><WashingMachine size={19} /><span><strong>Large-capacity machines</strong><small>Everyday loads to king comforters</small></span></div>
            <div><Clock3 size={19} /><span><strong>Open late</strong><small>Last wash: {business.lastWashTime}</small></span></div>
            <div><Phone size={19} /><span><strong>{payment}</strong><small>Easy ways to pay</small></span></div>
          </div>
          <a className="hero-card-call" href={phoneHref}>Questions before you come? <strong>Call us →</strong></a>
        </aside>
      </div>
    </section>
  );
}
