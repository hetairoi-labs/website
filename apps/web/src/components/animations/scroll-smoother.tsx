"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface ScrollSmootherLayoutProps {
	children: React.ReactNode;
}

export function ScrollSmootherLayout({ children }: ScrollSmootherLayoutProps) {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!(wrapperRef.current && contentRef.current)) {
				return;
			}

			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				return;
			}

			ScrollSmoother.get()?.kill();

			const smoother = ScrollSmoother.create({
				wrapper: wrapperRef.current,
				content: contentRef.current,
				smooth: 0.9,
				smoothTouch: 0.1,
				normalizeScroll: true,
			});

			return () => {
				smoother.kill();
			};
		},
		{ scope: wrapperRef }
	);

	return (
		<div id="smooth-wrapper" ref={wrapperRef}>
			<div id="smooth-content" ref={contentRef}>
				{children}
			</div>
		</div>
	);
}
