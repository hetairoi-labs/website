"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { getBrandColor } from "@/lib/site";
import { cn } from "@/lib/utils";

interface ArrowProps {
	accentColor?: string;
	className?: string;
	disableAnimation?: boolean;
	size?: number;
	trigger?: boolean;
}

const arrowCircles = [
	{ id: "circle-1", cx: 5, cy: 8 },
	{ id: "circle-2", cx: 10, cy: 8 },
	{ id: "circle-3", cx: 15, cy: 8 },
	{ id: "circle-4", cx: 20, cy: 8 },
	{ id: "circle-6", cx: 26, cy: 8 },
	{ id: "circle-7", cx: 22, cy: 4 },
	{ id: "circle-8", cx: 18, cy: 0 },
	{ id: "circle-9", cx: 22, cy: 12 },
	{ id: "circle-10", cx: 18, cy: 16 },
];

const circleRadius = 1.5;
const svgWidth = 28;
const svgHeight = 18;

export function Arrow({
	className,
	size = 24,
	trigger,
	disableAnimation = false,
	accentColor = getBrandColor(),
}: ArrowProps) {
	const svgRef = useRef<SVGSVGElement>(null);
	const shuffledOrderRef = useRef<number[]>([]);

	const animateToColor = (color: string) => {
		if (!svgRef.current) {
			return;
		}
		const circles = Array.from(
			svgRef.current.querySelectorAll("circle")
		) as SVGCircleElement[];

		if (shuffledOrderRef.current.length === 0) {
			shuffledOrderRef.current = circles
				.map((_, i) => i)
				.sort(() => Math.random() - 0.5);
		}

		const shuffledCircles = shuffledOrderRef.current.map((i) => circles[i]);
		gsap.to(shuffledCircles, {
			fill: color,
			duration: 0.08,
			stagger: { amount: 0.5, from: "random" },
			ease: "none",
		});
	};

	useGSAP(
		() => {
			if (!svgRef.current) {
				return;
			}
			const circles = Array.from(
				svgRef.current.querySelectorAll("circle")
			) as SVGCircleElement[];

			if (disableAnimation) {
				gsap.set(circles, { fill: accentColor });
				return;
			}

			gsap.set(circles, { fill: "currentColor" });

			const onMouseEnter = () => {
				if (trigger === undefined) {
					animateToColor(accentColor);
				}
			};

			const onMouseLeave = () => {
				if (trigger === undefined) {
					animateToColor("currentColor");
				}
			};

			const svg = svgRef.current;
			svg.addEventListener("mouseenter", onMouseEnter);
			svg.addEventListener("mouseleave", onMouseLeave);

			return () => {
				svg.removeEventListener("mouseenter", onMouseEnter);
				svg.removeEventListener("mouseleave", onMouseLeave);
			};
		},
		{ scope: svgRef, dependencies: [disableAnimation, accentColor, trigger] }
	);

	useGSAP(
		() => {
			if (disableAnimation) {
				return;
			}
			if (trigger === true) {
				animateToColor(accentColor);
			}
			if (trigger === false) {
				animateToColor("currentColor");
			}
		},
		{ dependencies: [trigger, disableAnimation, accentColor] }
	);

	return (
		<svg
			aria-label="Arrow"
			className={cn("select-none pr-0.5 text-muted-foreground", className)}
			height={size}
			ref={svgRef}
			viewBox={`0 0 ${svgWidth} ${svgHeight}`}
			width={size}
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Arrow</title>
			{arrowCircles.map((circle) => (
				<circle
					cx={circle.cx}
					cy={circle.cy}
					fill={disableAnimation ? accentColor : "currentColor"}
					key={circle.id}
					r={circleRadius}
				/>
			))}
		</svg>
	);
}
