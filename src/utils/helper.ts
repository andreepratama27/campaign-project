import { Campaign } from "@/types/campaign";

export function formatCurrency(value: number) {
  if (value === 0) return 0
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
}

export function sortAsc(
  data: Campaign[],
  key: "donation_target" | "days_remaining"
): Campaign[] {
  if (key === "donation_target") {
    return data.sort((a, b) => a.donation_target - b.donation_target);
  }

  return data.sort((a, b) => a.days_remaining - b.days_remaining);
}
