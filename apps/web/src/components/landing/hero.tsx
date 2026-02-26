import { StaggerItem, StaggerText } from "@/components/animations/stagger-text";
import { Section } from "@/components/layout/section";
import { CTAButton } from "@/components/ui/cta-button";

export function Hero() {
	return (
		<Section className="flex min-h-screen items-center pt-32 pb-16">
			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-[200px_1fr] lg:gap-16">
				<StaggerText className="hidden pt-4 lg:block" delay={0.2}>
					<StaggerItem>
						<p className="font-mono text-muted-foreground text-xs">
							©{new Date().getFullYear()}
						</p>
					</StaggerItem>
				</StaggerText>

				<StaggerText className="flex flex-col gap-4 lg:gap-6" delay={0.2}>
					<StaggerItem>
						<h1 className="font-normal text-5xl text-foreground leading-[1.1] tracking-[-0.04em] md:text-7xl md:leading-none lg:text-[96px]">
							Hetairoi® Consulting LLC.
						</h1>
					</StaggerItem>

					<StaggerItem>
						<p className="max-w-3xl font-normal text-2xl text-foreground md:text-3xl md:leading-relaxed">
							US-registered consulting firm{" "}
							<span className="mx-2 text-muted-foreground">|</span>
							Globally distributed engineering delivery{" "}
							<span className="mx-2 text-muted-foreground">|</span>
							Local client coordination
						</p>
					</StaggerItem>

					<StaggerItem>
						<CTAButton href="/how-we-work">Get Started</CTAButton>
					</StaggerItem>
				</StaggerText>
			</div>
		</Section>
	);
}
