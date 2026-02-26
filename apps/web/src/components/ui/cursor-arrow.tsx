"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { getBrandColor } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Arrow } from "./arrow";

interface CursorArrowProps {
	accentColor?: string;
	arrowClassName?: string;
	boxClassName?: string;
	className?: string;
	initialPosition?: { x: number; y: number } | null;
	isVisible: boolean;
}

export function CursorArrow({
	isVisible,
	initialPosition,
	accentColor = getBrandColor(),
	className,
	boxClassName,
	arrowClassName,
}: CursorArrowProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const isFirstRender = useRef(true);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	useEffect(() => {
		if (isVisible && initialPosition) {
			setMousePosition(initialPosition);
			isFirstRender.current = true;
		}
	}, [isVisible, initialPosition]);

	useGSAP(
		() => {
			if (!containerRef.current) {
				return;
			}

			if (isVisible) {
				const offsetX = 12;
				const offsetY = 12;
				const targetX = mousePosition.x + offsetX;
				const targetY = mousePosition.y + offsetY;

				if (isFirstRender.current) {
					gsap.set(containerRef.current, {
						x: targetX,
						y: targetY,
						opacity: 1,
						scale: 1,
					});
					isFirstRender.current = false;
				} else {
					gsap.to(containerRef.current, {
						x: targetX,
						y: targetY,
						duration: 0.3,
						ease: "power2.out",
					});
				}
			} else if (containerRef.current) {
				gsap.to(containerRef.current, {
					opacity: 0,
					duration: 0.15,
					ease: "power2.in",
					onComplete: () => {
						isFirstRender.current = true;
					},
				});
			}
		},
		{ scope: containerRef, dependencies: [mousePosition, isVisible] }
	);

	if (!isVisible) {
		return null;
	}

	return (
		<div
			className={cn("pointer-events-none fixed top-0 left-0 z-50", className)}
			ref={containerRef}
			style={{
				willChange: "transform",
			}}
		>
			<div
				className={cn(
					"w-fit rounded-md bg-background p-1 shadow-lg",
					boxClassName
				)}
			>
				<div style={{ transform: "rotate(-45deg)" }}>
					<Arrow
						accentColor={accentColor}
						className={cn("text-accent", arrowClassName)}
						disableAnimation
						size={32}
					/>
				</div>
			</div>
		</div>
	);
}
