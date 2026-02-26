export const SITE_URL = process.env.SITE_URL ?? "https://www.hetairoi.xyz";

const BRAND_FALLBACK = "oklch(0.63 0.2 35)";

export function getBrandColor(): string {
	if (typeof document === "undefined") {
		return BRAND_FALLBACK;
	}
	return (
		getComputedStyle(document.documentElement)
			.getPropertyValue("--brand")
			.trim() || BRAND_FALLBACK
	);
}
