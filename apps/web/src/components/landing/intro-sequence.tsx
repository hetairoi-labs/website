"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Hero } from "@/components/landing/hero";
import { Navigation } from "@/components/layout/navigation";
import { prefersReducedMotion } from "@/lib/browser";

export function IntroSequence() {
	const scopeRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scope = scopeRef.current;
		if (!scope) {
			return;
		}

		const items = Array.from(
			scope.querySelectorAll<HTMLElement>("[data-intro-item]")
		).sort((a, b) => {
			const firstOrder = Number(a.dataset.introOrder ?? 0);
			const secondOrder = Number(b.dataset.introOrder ?? 0);
			return firstOrder - secondOrder;
		});

		if (items.length === 0) {
			return;
		}

		if (prefersReducedMotion()) {
			gsap.set(items, { opacity: 1, y: 0 });
			return;
		}

		const timeline = gsap.timeline();
		timeline.to(items, {
			opacity: 1,
			y: 0,
			duration: 0.6,
			ease: "power2.out",
			stagger: 0.1,
			delay: 0.2,
		});

		return () => {
			timeline.kill();
		};
	}, []);

	return (
		<div ref={scopeRef}>
			<Navigation />
			<Hero />
		</div>
	);
}
