import { StaggerItem, StaggerText } from "@/components/animations/stagger-text";
import { Section } from "@/components/layout/section";
import { Barcode } from "@/components/ui/barcode";
import { SimpleLink } from "@/components/ui/simple-link";

export function About() {
	return (
		<Section className="bg-dark py-24 text-dark-foreground md:py-32">
			<div className="mx-auto flex max-w-7xl flex-col gap-24 md:gap-32">
				<div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_auto]">
					<StaggerText delay={0.2}>
						<StaggerItem>
							<h2 className="max-w-xl font-normal text-2xl text-dark-foreground leading-[1.1] tracking-[-0.04em] md:text-3xl lg:text-5xl">
								We help you build production-grade systems with confidence and
								clarity
							</h2>
						</StaggerItem>
					</StaggerText>

					<StaggerText className="-mt-24 hidden lg:block" delay={0.2}>
						<StaggerItem>
							<Barcode className="h-auto w-32" />
						</StaggerItem>
					</StaggerText>
				</div>

				<div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[200px_1fr_1fr] lg:gap-16">
					<StaggerText className="hidden md:block" delay={0.2} triggerOnView>
						<StaggerItem>
							<span className="font-mono text-dark-foreground/60 text-xs uppercase tracking-[0.2em]">
								About Us
							</span>
						</StaggerItem>
					</StaggerText>

					<StaggerText className="w-full" delay={0.1} triggerOnView>
						<StaggerItem>
							<div className="aspect-video w-full overflow-hidden rounded-lg border border-dark-border">
								<video
									autoPlay
									className="h-full w-full object-cover"
									loop
									muted
									playsInline
									src="/videos/about.mp4"
								/>
							</div>
						</StaggerItem>
					</StaggerText>

					<StaggerText
						className="flex flex-col gap-8"
						delay={0.2}
						triggerOnView
					>
						<StaggerItem>
							<p className="font-light text-dark-foreground/90 text-xl leading-relaxed md:text-2xl">
								We design and build reliable, maintainable software systems that
								help teams move faster and operate with confidence.
							</p>
						</StaggerItem>
						<StaggerItem>
							<SimpleLink
								className="inline-block border-dark-border border-b pb-1 text-dark-foreground/80 no-underline transition-colors hover:border-dark-foreground/30 hover:text-dark-foreground hover:no-underline"
								href="/about"
							>
								Read more about us
							</SimpleLink>
						</StaggerItem>
					</StaggerText>
				</div>
			</div>
		</Section>
	);
}
