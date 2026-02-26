"use client";

import { List, X } from "lucide-react";
import { useState } from "react";
import { StaggerItem, StaggerText } from "@/components/animations/stagger-text";
import { CTAButton } from "@/components/ui/cta-button";
import { SimpleLink } from "@/components/ui/simple-link";
import { cn } from "@/lib/utils";

export function Navigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const mobileLinks = [
		{ name: "Services", href: "/services" },
		{ name: "Case Studies", href: "/case-studies" },
		{ name: "How We Work", href: "/how-we-work" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<nav
			className={cn(
				"absolute top-0 left-0 z-50 w-full px-4 py-6 md:px-8 lg:px-16"
			)}
		>
			<div className="mx-auto max-w-7xl">
				<StaggerText className="w-full flex-row items-start justify-between">
					<StaggerItem className="pt-2">
						<SimpleLink
							className="font-medium text-foreground text-lg tracking-tight no-underline hover:no-underline"
							href="/"
						>
							Hetairoi®
						</SimpleLink>
					</StaggerItem>

					<StaggerItem className="hidden items-center gap-8 rounded-2xl bg-card p-6 pr-6 lg:flex">
						<SimpleLink
							className="font-medium text-sm no-underline transition-colors hover:text-muted-foreground hover:no-underline"
							href="/services"
						>
							Services
						</SimpleLink>
						<SimpleLink
							className="font-medium text-sm no-underline transition-colors hover:text-muted-foreground hover:no-underline"
							href="/case-studies"
						>
							Case Studies
						</SimpleLink>
						<SimpleLink
							className="font-medium text-sm no-underline transition-colors hover:text-muted-foreground hover:no-underline"
							href="/how-we-work"
						>
							How We Work
						</SimpleLink>
						<SimpleLink
							className="font-medium text-sm no-underline transition-colors hover:text-muted-foreground hover:no-underline"
							href="/contact"
						>
							Contact
						</SimpleLink>

						<CTAButton href="/contact">Schedule a Call</CTAButton>
					</StaggerItem>

					<StaggerItem className="lg:hidden">
						<button
							aria-label="Toggle menu"
							className="p-2 text-foreground"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							type="button"
						>
							{isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
						</button>
					</StaggerItem>
				</StaggerText>
			</div>

			{isMobileMenuOpen && (
				<div className="absolute top-full left-0 flex w-full flex-col gap-4 border-border border-b bg-background p-4 shadow-lg lg:hidden">
					{mobileLinks.map((link) => (
						<SimpleLink
							className="py-2 font-medium text-foreground no-underline hover:no-underline"
							href={link.href}
							key={link.name}
							onClick={() => setIsMobileMenuOpen(false)}
						>
							{link.name}
						</SimpleLink>
					))}
					<CTAButton href="/contact">Schedule a Call</CTAButton>
				</div>
			)}
		</nav>
	);
}
