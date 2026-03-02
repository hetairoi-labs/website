"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { StaggerItem, StaggerText } from "@/components/animations/stagger-text";
import { Section } from "@/components/layout/section";
import { CTAButton } from "@/components/ui/cta-button";
import { cn } from "@/lib/utils";
import { useCarousel } from "../animations/use-carousel";

interface ServiceItem {
	description: string;
	id: string;
	image: string;
	title: string;
}

const services: ServiceItem[] = [
	{
		id: "ai",
		title: "AI",
		description:
			"From AI workflow design to production integrations, we build practical AI systems that automate internal operations and improve user experiences.",
		image: "/images/services/ai.webp",
	},
	{
		id: "blockchain",
		title: "Blockchain",
		description:
			"Secure smart contract systems, protocol integrations, and infrastructure for Web3 products that need reliability, traceability, and scale.",
		image: "/images/services/web3.webp",
	},
	{
		id: "full-stack",
		title: "Full Stack Applications",
		description:
			"End-to-end product development across frontend, backend, APIs, and data layers with strong performance and maintainable architecture.",
		image: "/images/services/web2.webp",
	},
	{
		id: "custom-software",
		title: "Custom Software",
		description:
			"Tailored platforms built around your business process, delivery workflow, and growth goals, not generic one-size-fits-all templates.",
		image: "/images/services/custom.webp",
	},
];

export function Services() {
	const {
		activeId,
		setActiveId,
		activeItem: activeService,
		displayedItem: displayedService,
		imageRef: imageCardRef,
	} = useCarousel(services);

	return (
		<Section
			className="relative overflow-hidden bg-secondary text-secondary-foreground"
			id="services"
		>
			<div className="relative mx-auto mt-16 grid w-full max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
				<StaggerText className="h-full" delay={0.1} triggerOnView>
					<StaggerItem className="h-full">
						<div
							className="relative aspect-4/3 overflow-hidden rounded-3xl border border-border/70 bg-secondary/40 lg:aspect-5/6"
							ref={imageCardRef}
						>
							<Image
								alt={`${displayedService.title} service preview`}
								className="object-cover"
								fill
								sizes="(max-width: 1024px) 100vw, 60vw"
								src={displayedService.image}
							/>
						</div>
					</StaggerItem>
				</StaggerText>

				<StaggerText
					className="justify-start lg:pt-4"
					delay={0.2}
					triggerOnView
				>
					<StaggerItem>
						<p className="mb-8 font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
							Our Services
						</p>
					</StaggerItem>

					<StaggerItem>
						<div className="flex flex-col gap-4">
							{services.map((service) => {
								const isActive = service.id === activeId;
								return (
									<button
										className="group relative cursor-pointer border-border border-b py-3 text-left lg:py-4"
										key={service.id}
										onClick={() => setActiveId(service.id)}
										type="button"
									>
										<span
											className={cn(
												"block font-normal text-3xl text-foreground/85 leading-[1.05] tracking-[-0.03em] transition-colors md:text-4xl lg:text-[3.25rem]",
												isActive && "text-foreground"
											)}
										>
											{service.title}
										</span>
										<span
											className={cn(
												"absolute right-0 bottom-0 left-0 h-px origin-left bg-foreground transition-transform duration-300",
												isActive ? "scale-x-100" : "scale-x-0"
											)}
										/>
									</button>
								);
							})}
						</div>
					</StaggerItem>

					<StaggerItem>
						<div className="mt-8 max-w-xl">
							<div className="relative min-h-[156px] md:min-h-[176px]">
								<AnimatePresence initial={false} mode="wait">
									<motion.div
										animate={{ opacity: 1, y: 0 }}
										className="absolute inset-0"
										exit={{ opacity: 0, y: -10 }}
										initial={{ opacity: 0, y: 10 }}
										key={activeService.id}
										transition={{ duration: 0.14, ease: "easeOut" }}
									>
										<h3 className="font-medium text-2xl text-foreground md:text-3xl">
											{activeService.title}
										</h3>
										<p className="mt-4 text-base text-muted-foreground leading-relaxed md:text-lg">
											{activeService.description}
										</p>
									</motion.div>
								</AnimatePresence>
							</div>
							<div className="mt-4">
								<CTAButton href="/#contact">Book a discovery call</CTAButton>
							</div>
						</div>
					</StaggerItem>
				</StaggerText>
			</div>
		</Section>
	);
}
