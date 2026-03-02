import { StaggerItem, StaggerText } from "@/components/animations/stagger-text";
import { Section } from "@/components/layout/section";
import { Barcode } from "@/components/ui/barcode";
import { SimpleLink } from "@/components/ui/simple-link";

export function About() {
	return (
		<Section
			className="relative z-20 bg-secondary pb-0 text-secondary-foreground lg:pb-0"
			id="services"
		>
			<div className="mx-auto flex max-w-7xl flex-col gap-12 md:gap-32">
				<div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_auto]">
					<StaggerText delay={0.2}>
						<StaggerItem>
							<h2 className="max-w-xl font-normal text-3xl text-secondary-foreground leading-[1.1] tracking-[-0.04em] md:text-3xl lg:text-5xl">
								We help you build production-grade systems with confidence and
								clarity
							</h2>
						</StaggerItem>
					</StaggerText>

					<StaggerText className="-mt-16 hidden lg:block" delay={0.2}>
						<StaggerItem>
							<Barcode className="h-auto w-32" />
						</StaggerItem>
					</StaggerText>
				</div>

				<div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[200px_1fr_1fr] lg:gap-16">
					<StaggerText className="hidden md:block" delay={0.2} triggerOnView>
						<StaggerItem>
							<span className="font-mono text-secondary-foreground/60 text-xs uppercase tracking-[0.2em]">
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
									src="/videos/about.webm"
								/>
							</div>
						</StaggerItem>
					</StaggerText>

					<StaggerText
						className="flex flex-col gap-4 lg:gap-8"
						delay={0.2}
						triggerOnView
					>
						<StaggerItem>
							<p className="font-light text-secondary-foreground/90 text-xl leading-relaxed md:text-2xl">
								We design and build reliable, maintainable software systems that
								help teams move faster and operate with confidence.
							</p>
						</StaggerItem>
						<StaggerItem>
							<SimpleLink
								className="inline-block border-dark-border border-b pb-1 text-secondary-foreground/80 text-sm no-underline transition-colors hover:border-dark-foreground/30 hover:text-secondary-foreground hover:no-underline lg:text-base"
								href="/#services"
							>
								Read more about us
							</SimpleLink>
						</StaggerItem>
					</StaggerText>
				</div>
			</div>

			<div className="mt-16 -mr-8 grid w-auto grid-cols-1 lg:mt-40 lg:-mr-16 lg:grid-cols-2">
				<div className="flex min-h-[50dvh] flex-col p-8 md:p-12 lg:pl-16">
					<StaggerText className="h-full" delay={0.15} triggerOnView>
						<StaggerItem>
							<h2 className="font-normal text-3xl text-foreground tracking-[-0.04em] md:text-3xl lg:text-5xl">
								Our Vision
							</h2>
						</StaggerItem>

						<StaggerItem>
							<p className="mt-8 max-w-xl text-foreground text-lg leading-relaxed md:text-2xl">
								Our vision is to empower businesses to grow with clarity and
								purpose. We partner with clients to understand their goals and
								values, then create digital experiences that truly represent who
								they are and connect with the people they serve.
							</p>
						</StaggerItem>

						<StaggerItem>
							<div className="mt-8 flex items-center gap-4">
								<div className="flex flex-col">
									<span className="text-base text-foreground">Spandan</span>
									<span className="text-foreground/60 text-sm">
										Founder, Hetairoi
									</span>
								</div>
							</div>
						</StaggerItem>

						<StaggerItem>
							<div className="mt-auto pt-14">
								<div className="mb-3 flex items-center gap-3 text-base text-foreground">
									<span className="font-mono text-brand">■■■■■■■ ■■ ■■ ■■</span>
								</div>
								<p className="max-w-sm text-base text-foreground italic leading-relaxed">
									We&apos;ve guided many businesses toward success, and
									we&apos;re ready for yours.
								</p>
							</div>
						</StaggerItem>
					</StaggerText>
				</div>

				<StaggerText className="h-full min-h-[460px]" delay={0.2} triggerOnView>
					<StaggerItem className="h-full">
						<div className="relative h-full min-h-[460px] overflow-hidden rounded-l-2xl">
							<video
								autoPlay
								className="absolute inset-0 h-full w-full object-cover"
								loop
								muted
								playsInline
								src="/videos/our-vision.webm"
							/>
						</div>
					</StaggerItem>
				</StaggerText>
			</div>
		</Section>
	);
}
