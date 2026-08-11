# Master Washateria

A reusable, mobile-first laundromat website built for the workflow:

**Master → Clone → Tailor → Deploy → Show Owner**

This repository is the master. Do not use one deployment to host multiple laundromats. Each real prospect/client should receive a separate cloned repository and separate Vercel project.

## Fast client customization

Most prospect-specific work should happen in two places:

- `config/business.ts` — name, location, hours, phone, brand colors, payment methods, external service URLs, feature flags, preview mode.
- `data/site.ts` — services, machine sizes/prices, amenities, promotions, reviews, FAQs, and gallery items.

The components should rarely need to change when creating a new client site.

## Create a new laundromat client site

1. Clone this repository into a new repo named for the prospect.
2. Update `config/business.ts`.
3. Replace the business name, tagline, colors, phone, address, hours, and last-wash time.
4. Replace the concept visuals in `/public` with real store photography you have permission to use.
5. Update services in `data/site.ts`.
6. Enter the store's real machine sizes, quantity, and pricing.
7. Configure wash & fold pricing and copy.
8. Enable or disable pickup/delivery and commercial laundry with `business.features`.
9. Add external links for any existing loyalty, pickup/delivery, wash-fold ordering, or machine-availability tools.
10. Enter real amenities.
11. Replace demo reviews with accurate review content and links.
12. Update promotions and FAQs.
13. Confirm parking/accessibility information.
14. Test at 375px mobile width.
15. Deploy as its own Vercel project.

## Feature flags

```ts
features: {
  selfService: true,
  washFold: true,
  pickupDelivery: false,
  commercialLaundry: false,
  machineGuide: true,
  promotions: true,
  loyalty: false
}
```

If a service is disabled, its primary module disappears cleanly instead of leaving an empty section.

## External systems

Do not rebuild the laundromat's software. Link the website into whatever the owner already uses.

```ts
external: {
  laundryAppUrl,
  machineAvailabilityUrl,
  loyaltyUrl,
  pickupDeliveryUrl,
  washFoldOrderUrl,
  commercialInquiryUrl
}
```

The website is the polished customer-facing layer; the owner's existing tools remain the engine.

## Prospect preview mode

Leave this enabled while a concept is unofficial:

```ts
previewMode: true
```

Preview mode adds `noindex, nofollow` metadata and displays a subtle concept-preview note in the footer. After the owner approves the site, switch it off before production launch.

## Conversion priorities

For the laundromat master, the primary customer action is **Get Directions / Visit**. Wash & Fold is the second conversion path when enabled. The homepage is intentionally structured around the questions local laundry customers ask before driving over: hours, location, cleanliness, machine sizes, pricing, payment, parking, amenities, and drop-off service.

## Master rule

Before customizing components for a prospect, ask: **Can this difference be handled with config/data instead?**

If yes, keep the component generic and put the client-specific detail into config/data. That is what keeps cloning fast.
