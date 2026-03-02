"use client";

import type { Route } from "next";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Arrow } from "./arrow";

interface CTAButtonProps {
	children: React.ReactNode;
	className?: string;
	href: string;
	target?: "_blank" | "_self";
	variant?: "primary" | "outline";
}

export function CTAButton({
	href,
	children,
	className,
	variant = "primary",
	target = "_blank",
}: CTAButtonProps) {
	const [isHovered, setIsHovered] = useState(false);

	const variants = {
		primary:
			"bg-foreground text-background hover:bg-foreground/90 pl-5 pr-2 py-1.5 rounded-lg",
		outline:
			"bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background pl-5 pr-2 py-1.5 rounded-lg",
	};

	const arrowButtonClasses: Record<"primary" | "outline", string> = {
		primary: "bg-background text-foreground",
		outline:
			"bg-foreground text-background group-hover:bg-background group-hover:text-foreground",
	};

	return (
		<Link
			className={cn(
				"group flex h-fit w-fit items-center gap-4 transition-colors",
				variants[variant],
				className
			)}
			href={href as Route}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			target={target}
		>
			<span className="font-medium text-sm">{children}</span>
			<div
				className={cn(
					"flex items-center justify-center rounded-md p-1 transition-colors",
					arrowButtonClasses[variant] ?? "bg-transparent p-0 text-current"
				)}
			>
				<Arrow className="transition-transform" size={32} trigger={isHovered} />
			</div>
		</Link>
	);
}
