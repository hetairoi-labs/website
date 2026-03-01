import { CTAButton } from "@/components/ui/cta-button";

export function Hero() {
	return (
		<div
			className="relative z-0 flex min-h-screen items-center pt-32 pb-16"
			data-speed="0.5"
		>
			<video
				autoPlay
				className="absolute inset-0 z-0 h-full w-full object-cover opacity-70"
				loop
				muted
				playsInline
				src="/videos/hero.webm"
			/>
			<div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-[100px_1fr] lg:gap-16">
				<div
					className="hidden translate-y-10 pt-4 opacity-0 lg:block"
					data-intro-item
					data-intro-order="3"
				>
					<p className="font-mono text-muted-foreground text-xs">
						©{new Date().getFullYear()}
					</p>
				</div>

				<div className="flex flex-col gap-4 px-8 pt-24 lg:gap-6">
					<h1
						className="translate-y-10 font-normal text-5xl text-foreground leading-[1.1] tracking-[-0.04em] opacity-0 md:text-7xl md:leading-none lg:text-[96px]"
						data-intro-item
						data-intro-order="4"
					>
						Hetairoi® Consulting LLC.
					</h1>

					<p
						className="max-w-2xl translate-y-10 font-normal text-2xl text-foreground opacity-0 md:text-3xl md:leading-relaxed"
						data-intro-item
						data-intro-order="5"
					>
						US-registered consulting firm{" "}
						<span className="mx-2 text-muted-foreground">|</span>
						High Quality Software Solutions{" "}
						<span className="mx-2 text-muted-foreground">|</span>
						Globally distributed delivery
					</p>

					<div
						className="translate-y-10 opacity-0"
						data-intro-item
						data-intro-order="6"
					>
						<CTAButton href="/#">Get Started</CTAButton>
					</div>
				</div>
			</div>
		</div>
	);
}
