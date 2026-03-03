import type { Route } from "next";
import Link from "next/link";
import { StaggerItem, StaggerText } from "@/components/animations/stagger-text";
import { Section } from "@/components/layout/section";
import { CAL_LINK } from "@/constants";
import { cn } from "@/lib/utils";

interface PricingPlan {
	description: string;
	features: string[];
	highlight?: boolean;
	id: string;
	name: string;
	periodLabel: string;
	priceLabel: string;
}

const pricingPlans: PricingPlan[] = [
	{
		id: "starter",
		name: "Starter Sprint",
		priceLabel: "$1,000",
		periodLabel: "/month",
		description:
			"Ongoing monthly support for early teams that need steady momentum.",
		features: [
			"Monthly sprint cadence with clear priorities",
			"Architecture guidance and implementation support",
			"Weekly updates and async collaboration",
			"Scoped delivery with predictable turnaround",
			"Ideal for teams that want to start lean",
		],
	},
	{
		id: "build",
		name: "Build Engagement",
		priceLabel: "$5,000",
		periodLabel: "/project",
		description:
			"Project-based product delivery with milestone-driven execution.",
		highlight: true,
		features: [
			"Outcome-based scoping and implementation",
			"Full-stack build across prioritized features",
			"Milestones with predictable handoffs",
			"Structured reviews and delivery checkpoints",
			"Best for MVP and product expansion phases",
		],
	},
	{
		id: "custom",
		name: "Quote After Discovery",
		priceLabel: "Custom",
		periodLabel: "",
		description:
			"For advanced scope, strict compliance, or complex integrations.",
		features: [
			"Tailored delivery scope and phased execution",
			"Compliance-aware architecture and implementation",
			"Complex integrations across product ecosystems",
			"Technical governance for cross-team programs",
			"Custom proposal after discovery and planning",
		],
	},
] as const;

export function Pricing() {
	return (
		<Section className="pb-16" id="pricing">
			<div className="mx-auto flex w-full max-w-7xl flex-col gap-10 md:gap-14">
				<StaggerText
					className="grid grid-cols-1 gap-6 border-b pb-8 md:pb-10 lg:grid-cols-[220px_1fr]"
					delay={0.1}
					triggerOnView
				>
					<StaggerItem>
						<p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
							Our Pricing
						</p>
					</StaggerItem>
					<StaggerItem>
						<h2 className="max-w-md font-normal text-5xl text-foreground leading-[0.95] tracking-[-0.04em] md:text-7xl">
							Choose a plan that fits
						</h2>
						<p className="mt-5 max-w-xl text-base text-muted-foreground leading-relaxed md:text-lg">
							Transparent starting points. Final scope is tailored after
							discovery.
						</p>
					</StaggerItem>
				</StaggerText>

				<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
					{pricingPlans.map((plan, index) => (
						<StaggerText
							className="h-full"
							delay={0.15 + index * 0.05}
							key={plan.id}
							triggerOnView
						>
							<StaggerItem className="h-full">
								<article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
									<div className="flex min-h-62 flex-col gap-6 p-6 md:min-h-68 md:p-8">
										<p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
											{plan.name}
										</p>
										<p className="flex items-end gap-2">
											<span className="font-normal text-4xl text-foreground tracking-[-0.03em] md:text-5xl lg:text-6xl">
												{plan.priceLabel}
											</span>
											<span className="pb-2 font-mono text-muted-foreground text-sm uppercase tracking-[0.15em]">
												{plan.periodLabel}
											</span>
										</p>
										<p className="max-w-sm text-base text-foreground/80 leading-relaxed md:text-lg">
											{plan.description}
										</p>
									</div>

									<Link
										className={cn(
											"group flex w-full items-center justify-center gap-2 border-border border-y px-6 py-4 text-center font-mono text-background text-sm uppercase tracking-[0.2em] transition-colors md:px-8 md:text-base",
											plan.highlight
												? "bg-brand hover:bg-brand/90"
												: "bg-foreground hover:bg-foreground/90"
										)}
										href={CAL_LINK as Route}
										rel="noopener noreferrer"
										target="_blank"
									>
										{plan.id === "custom" ? "Book a Free Call" : "Get Started"}
									</Link>

									<ul className="flex flex-col gap-4 p-6 pt-7 md:p-8">
										{plan.features.map((feature) => (
											<li className="flex items-start gap-3" key={feature}>
												<span
													aria-hidden
													className={cn(
														"mt-2.5 block size-2 shrink-0",
														plan.highlight ? "bg-brand" : "bg-foreground"
													)}
												/>
												<span className="text-base text-foreground/85 leading-relaxed md:text-lg">
													{feature}
												</span>
											</li>
										))}
									</ul>
								</article>
							</StaggerItem>
						</StaggerText>
					))}
				</div>
			</div>
		</Section>
	);
}
