import { business } from "@/config/business";
import type { Service } from "@/types/site";

export function serviceEnabled(service: Service): boolean {
  if (service.id === "self-service") return business.features.selfService;
  if (service.id === "wash-fold") return business.features.washFold;
  if (service.id === "pickup-delivery") return business.features.pickupDelivery;
  if (service.id === "commercial") return business.features.commercialLaundry;
  return true;
}

export function serviceHref(service: Service): string {
  if (service.id === "wash-fold" && business.external.washFoldOrderUrl) return business.external.washFoldOrderUrl;
  if (service.id === "pickup-delivery" && business.external.pickupDeliveryUrl) return business.external.pickupDeliveryUrl;
  if (service.id === "commercial" && business.external.commercialInquiryUrl) return business.external.commercialInquiryUrl;
  return service.href;
}

export function washFoldHref(): string {
  return business.external.washFoldOrderUrl || `tel:${business.phone.replace(/[^+\d]/g, "")}`;
}
