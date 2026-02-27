const SAFARI_UA = /Safari/;
const NON_SAFARI_UA = /Chrome|Chromium|CriOS|FxiOS|Edg/;

export function detectSafari(): boolean {
	if (typeof navigator === "undefined") {
		return false;
	}
	const ua = navigator.userAgent;
	return SAFARI_UA.test(ua) && !NON_SAFARI_UA.test(ua);
}

export function prefersReducedMotion(): boolean {
	if (typeof window === "undefined") {
		return false;
	}
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function detectMobile(): boolean {
	if (typeof window === "undefined") {
		return false;
	}
	return window.matchMedia("(pointer: coarse)").matches;
}
