import { StaggerItem, StaggerText } from "@/components/animations/stagger-text";
import { Barcode } from "@/components/ui/barcode";
import { SimpleLink } from "@/components/ui/simple-link";

export function Footer() {
	const navLinks = [
		{ name: "Services", href: "/#services" },
		{ name: "Case Studies", href: "/#case-studies" },
		{ name: "How We Work", href: "/#how-we-work" },
		{ name: "Contact", href: "/#contact" },
	];

	const socialLinks = [
		{ name: "Instagram", href: "#" },
		{ name: "Twitter (X)", href: "#" },
		{ name: "Linkedin", href: "#" },
	];

	return (
		<footer className="w-full overflow-hidden bg-dark px-4 pt-24 pb-8 text-dark-foreground md:px-8 lg:px-16">
			<div className="flex w-full flex-col">
				<StaggerText className="mb-16" delay={0.05} triggerOnView>
					<StaggerItem>
						<h1 className="select-none font-medium text-[12vw] text-dark-foreground leading-[0.8] tracking-[-0.04em]">
							Hetairoi®
						</h1>
					</StaggerItem>
				</StaggerText>

				<StaggerText className="mb-16" delay={0.1} triggerOnView>
					<StaggerItem>
						<div className="h-px w-full bg-dark-border" />
					</StaggerItem>
				</StaggerText>

				<div className="mb-24 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
					<StaggerText
						className="mt-8 flex flex-col gap-8 lg:col-span-5"
						delay={0.1}
						triggerOnView
					>
						<StaggerItem>
							<Barcode className="w-32" />
						</StaggerItem>

						<StaggerItem>
							<div className="flex max-w-md flex-col gap-4">
								<p className="font-light text-dark-foreground/90 text-xl leading-relaxed md:text-2xl">
									Engineering delivery performed by globally distributed team.
									Client coordination and communication supported locally.
								</p>
							</div>
						</StaggerItem>

						<StaggerItem>
							<div className="mt-4 flex items-center gap-6">
								{socialLinks.map((link) => (
									<a
										className="font-medium text-dark-foreground/60 text-sm uppercase tracking-wide transition-colors hover:text-dark-foreground"
										href={link.href}
										key={link.name}
									>
										{link.name}
									</a>
								))}
							</div>
						</StaggerItem>
					</StaggerText>

					<StaggerText
						className="flex flex-col lg:col-span-7"
						delay={0.2}
						triggerOnView
					>
						{navLinks.map((link) => (
							<StaggerItem key={link.name}>
								<div className="group">
									<SimpleLink
										className="block py-6 font-light text-3xl text-dark-foreground/80 no-underline transition-colors hover:no-underline group-hover:text-dark-foreground md:text-4xl"
										href={link.href}
									>
										{link.name}
									</SimpleLink>
									<div className="h-px w-full bg-dark-border transition-colors group-hover:bg-dark-foreground/30" />
								</div>
							</StaggerItem>
						))}
					</StaggerText>
				</div>

				<StaggerText
					className="flex flex-col items-center justify-start gap-6 border-dark-border border-t pt-8 md:flex-row"
					delay={0.3}
					triggerOnView={false}
				>
					<StaggerItem>
						<div className="flex gap-6">
							<SimpleLink
								className="text-dark-foreground/40 text-xs underline decoration-dark-foreground/20 transition-colors hover:text-dark-foreground/60"
								href="/privacy"
							>
								Privacy policy
							</SimpleLink>
							<SimpleLink
								className="text-dark-foreground/40 text-xs underline decoration-dark-foreground/20 transition-colors hover:text-dark-foreground/60"
								href="/terms"
							>
								Terms of service
							</SimpleLink>
						</div>
					</StaggerItem>
				</StaggerText>
			</div>
		</footer>
	);
}
