"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BarcodeProps {
	className?: string;
}

const barcodePaths = [
	{ id: "bar-0", d: "M0 0h3v23H0z" },
	{ id: "bar-1", d: "M56 0h3v23h-3z" },
	{ id: "bar-2", d: "M4 0h3v23H4z" },
	{ id: "bar-3", d: "M56 0h9v23h-9z" },
	{ id: "bar-4", d: "M78 0h9v23h-9z" },
	{ id: "bar-5", d: "M12 0h9v23h-9z" },
	{ id: "bar-6", d: "M84 0h9v23h-9z" },
	{ id: "bar-7", d: "M34 0h9v23h-9z" },
	{ id: "bar-8", d: "M22 0h3v23h-3z" },
	{ id: "bar-9", d: "M84 0h3v23h-3z" },
	{ id: "bar-10", d: "M30 0h3v23h-3z" },
	{ id: "bar-11", d: "M14 0h3v23h-3z" },
	{ id: "bar-12", d: "M18 0h3v23h-3z" },
	{ id: "bar-13", d: "M44 0h3v23h-3z" },
	{ id: "bar-14", d: "M48 0h3v23h-3z" },
];

export function Barcode({ className }: BarcodeProps) {
	const svgRef = useRef<SVGSVGElement>(null);

	useGSAP(
		() => {
			if (!svgRef.current) {
				return;
			}

			const paths = svgRef.current.querySelectorAll("path");
			if (paths.length === 0) {
				return;
			}

			const loopTimeline = gsap.timeline({ repeat: -1 });

			loopTimeline.to(paths, {
				scaleY: 0.3,
				transformOrigin: "center center",
				duration: 0.3,
				stagger: {
					amount: 0.4,
					from: "start",
				},
				ease: "back.out(1.2)",
			});

			loopTimeline.to({}, { duration: 0.8 });

			loopTimeline.to(paths, {
				scaleY: 1,
				transformOrigin: "center center",
				duration: 0.3,
				stagger: {
					amount: 0.4,
					from: "start",
				},
				ease: "back.out(1.2)",
			});

			loopTimeline.to({}, { duration: 0.8 });
		},
		{ scope: svgRef }
	);

	return (
		<svg
			aria-label="Barcode"
			className={cn("select-none", className)}
			fill="none"
			height="23"
			ref={svgRef}
			viewBox="0 0 109 23"
			width="109"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Barcode</title>
			{barcodePaths.map((path) => (
				<path d={path.d} fill="var(--brand)" key={path.id} />
			))}
		</svg>
	);
}
