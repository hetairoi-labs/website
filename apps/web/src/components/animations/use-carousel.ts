"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

interface TabbedItem {
	id: string;
}

export function useCarousel<T extends TabbedItem>(items: T[]) {
	const [activeId, setActiveId] = useState(items[0]?.id ?? "");
	const [displayedId, setDisplayedId] = useState(items[0]?.id ?? "");
	const imageRef = useRef<HTMLDivElement>(null);
	const activeItem = items.find((i) => i.id === activeId) ?? items[0];
	const displayedItem = items.find((i) => i.id === displayedId) ?? items[0];

	useGSAP(
		() => {
			const el = imageRef.current;
			if (!el || displayedId === activeId) {
				return;
			}

			const tl = gsap.timeline();
			tl.to(el, { x: -84, opacity: 0, duration: 0.16, ease: "power2.in" });
			tl.add(() => setDisplayedId(activeId));
			tl.set(el, { x: -84, opacity: 0 });
			tl.to(el, { x: 0, opacity: 1, duration: 0.24, ease: "power3.out" });
			return () => tl.kill();
		},
		{ dependencies: [activeId, displayedId] }
	);

	return {
		activeId,
		setActiveId,
		activeItem,
		displayedItem,
		imageRef,
	};
}
