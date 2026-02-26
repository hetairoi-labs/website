"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface GraphLineProps {
	className?: string;
}

export function GraphLine({ className }: GraphLineProps) {
	const svgRef = useRef<SVGSVGElement>(null);
	const linePathRef = useRef<SVGPathElement>(null);
	const fillPathRef = useRef<SVGPathElement>(null);

	useGSAP(
		() => {
			if (!(linePathRef.current && fillPathRef.current)) {
				return;
			}

			const linePath = linePathRef.current;
			const fillPath = fillPathRef.current;

			const lineLength = linePath.getTotalLength();

			gsap.set(linePath, {
				strokeDasharray: `${lineLength} ${lineLength}`,
				strokeDashoffset: lineLength,
			});

			gsap.set(fillPath, {
				fillOpacity: 0,
			});

			const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: svgRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
					once: true,
				},
			});

			timeline.to(linePath, {
				strokeDashoffset: 0,
				duration: 0.8,
				ease: "power2.out",
			});

			timeline.to(
				fillPath,
				{
					fillOpacity: 0.3,
					duration: 0.4,
					ease: "power2.out",
				},
				"-=0.3"
			);
		},
		{ scope: svgRef }
	);

	return (
		<div
			className={cn(
				"pointer-events-none absolute right-0 bottom-0 h-[250px] w-full translate-y-4",
				className
			)}
		>
			<svg
				className="h-full w-full text-accent"
				fill="none"
				preserveAspectRatio="none"
				ref={svgRef}
				viewBox="0 0 800 300"
			>
				<title>Growth Graph</title>
				<defs>
					<linearGradient id="graphGradient" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
						<stop offset="100%" stopColor="currentColor" stopOpacity="0" />
					</linearGradient>
					<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
						<feGaussianBlur result="blur" stdDeviation="4" />
						<feComposite in="SourceGraphic" in2="blur" operator="over" />
					</filter>
				</defs>
				<path
					d="M0,300 L0,300 C150,280 250,150 350,200 C450,250 550,50 650,20 C700,5 750,100 800,0 L800,300 Z"
					fill="url(#graphGradient)"
					ref={fillPathRef}
					stroke="none"
				/>
				<path
					d="M0,300 C150,280 250,150 350,200 C450,250 550,50 650,20 C700,5 750,100 800,0"
					fill="none"
					filter="url(#glow)"
					ref={linePathRef}
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="8"
				/>
			</svg>
		</div>
	);
}
