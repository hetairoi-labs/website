"use client";

import { List, X } from "lucide-react";
import { useState } from "react";
import { CTAButton } from "@/components/ui/cta-button";
import { SimpleLink } from "@/components/ui/simple-link";
import { cn } from "@/lib/utils";

export function Navigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<nav className={cn("absolute top-0 left-0 z-50 w-full px-8 py-8 lg:px-16")}>
			<div className="mx-auto max-w-7xl">
				<div className="flex w-full flex-row items-start justify-between">
					<div
						className="translate-y-10 pt-2 opacity-0"
						data-intro-item
						data-intro-order="1"
					>
						<SimpleLink
							className="font-medium text-foreground text-lg tracking-tight no-underline hover:no-underline"
							href="/"
						>
							Hetairoi®
						</SimpleLink>
					</div>

					<div
						className="glass hidden translate-y-10 items-center gap-8 rounded-2xl bg-secondary p-6 pr-6 opacity-0 lg:flex"
						data-intro-item
						data-intro-order="2"
					>
						<SimpleLink
							className="font-medium text-sm no-underline transition-colors hover:text-muted-foreground hover:no-underline"
							href="/#services"
						>
							Services
						</SimpleLink>
						<SimpleLink
							className="font-medium text-sm no-underline transition-colors hover:text-muted-foreground hover:no-underline"
							href="/#case-studies"
						>
							Case Studies
						</SimpleLink>
						<SimpleLink
							className="font-medium text-sm no-underline transition-colors hover:text-muted-foreground hover:no-underline"
							href="/#how-we-work"
						>
							How We Work
						</SimpleLink>
						<SimpleLink
							className="font-medium text-sm no-underline transition-colors hover:text-muted-foreground hover:no-underline"
							href="/#contact"
						>
							Contact
						</SimpleLink>

						<CTAButton href="/#contact">Schedule a Call</CTAButton>
					</div>

					<div
						className="translate-y-10 opacity-0 lg:hidden"
						data-intro-item
						data-intro-order="2"
					>
						<button
							aria-label="Toggle menu"
							className="p-2 text-foreground"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							type="button"
						>
							{isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
