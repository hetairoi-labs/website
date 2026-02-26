"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface StaggerTextProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	triggerOnView?: boolean;
}

export function StaggerText({
	children,
	className,
	delay = 0,
	triggerOnView = false,
}: StaggerTextProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!containerRef.current) {
				return;
			}

			const items = Array.from(
				containerRef.current.children
			) as HTMLDivElement[];

			if (items.length === 0) {
				return;
			}

			gsap.set(items, {
				opacity: 0,
				y: 40,
			});

			const baseDelay = triggerOnView ? delay + 0.1 : delay;

			const animationConfig: gsap.TweenVars = {
				opacity: 1,
				y: 0,
				duration: 0.6,
				stagger: 0.1,
				delay: baseDelay,
				ease: "power2.out",
			};

			if (triggerOnView) {
				animationConfig.scrollTrigger = {
					trigger: containerRef.current,
					start: "top 70%",
					toggleActions: "play none none none",
					once: true,
				};
			}

			gsap.to(items, animationConfig);
		},
		{ scope: containerRef, dependencies: [delay, triggerOnView] }
	);

	return (
		<div className={cn("flex flex-col", className)} ref={containerRef}>
			{children}
		</div>
	);
}

export function StaggerItem({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return <div className={cn(className)}>{children}</div>;
}
