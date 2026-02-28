import Image from "next/image";
import { StaggerItem, StaggerText } from "@/components/animations/stagger-text";
import { WorkCollageCard } from "@/components/landing/collage-card";
import { Section } from "@/components/layout/section";
import { Input } from "@/components/ui/input";

export function Contact() {
	return (
		<Section className="-mt-32" id="contact">
			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 lg:grid-cols-2">
				<div className="flex flex-col gap-6">
					<StaggerText delay={0.1} triggerOnView>
						<StaggerItem>
							<div className="grid grid-cols-1 gap-4 rounded-4xl bg-secondary p-4 md:grid-cols-[150px_1fr] md:p-5">
								<div className="relative aspect-square overflow-hidden rounded-3xl">
									<Image
										alt="Mike, client success manager"
										className="object-cover object-top"
										fill
										priority
										src="/images/contact/logo.webp"
									/>
								</div>
								<div className="flex flex-col gap-2 py-1 md:pr-4">
									<h3 className="max-w-lg font-normal text-foreground text-lg leading-tight md:text-xl">
										Need more information?
									</h3>
									<p className="max-w-xl text-base text-foreground/60 leading-relaxed">
										If you&apos;ve got any questions or just want to talk things
										through, i&apos;m always happy to chat.
									</p>
									<a
										className="w-fit border-foreground/70 border-b pb-1 text-base text-foreground transition-colors hover:border-foreground hover:text-foreground"
										href="mailto:hello@hetairoi.xyz"
									>
										Talk directly to us
									</a>
								</div>
							</div>
						</StaggerItem>
					</StaggerText>

					<StaggerText delay={0.2} triggerOnView>
						<StaggerItem>
							<WorkCollageCard
								backgroundSrc="/images/contact/checkout-work-bg.jpg"
								href="/#case-studies"
								subtitle="View all works"
								title="Checkout our work"
							/>
						</StaggerItem>
					</StaggerText>
				</div>

				<StaggerText className="h-full" delay={0.1} triggerOnView>
					<StaggerItem className="h-full">
						<div className="flex h-full flex-col justify-center rounded-4xl bg-secondary p-6 md:p-8">
							<h2 className="mb-7 font-normal text-4xl text-foreground leading-[0.95] tracking-[-0.03em] md:text-5xl">
								Contact us
							</h2>

							<form className="space-y-4" method="post">
								<Input
									autoComplete="given-name"
									className="h-auto rounded-none border-0 border-border border-b bg-transparent px-0 py-2 text-base text-foreground placeholder:text-foreground/45 focus-visible:border-foreground/20 focus-visible:ring-0 md:text-lg"
									name="firstName"
									placeholder="First Name"
									required
								/>
								<Input
									autoComplete="family-name"
									className="h-auto rounded-none border-0 border-border border-b bg-transparent px-0 py-2 text-base text-foreground placeholder:text-foreground/45 focus-visible:border-foreground/20 focus-visible:ring-0 md:text-lg"
									name="lastName"
									placeholder="Last Name"
									required
								/>
								<Input
									autoComplete="email"
									className="h-auto rounded-none border-0 border-border border-b bg-transparent px-0 py-2 text-base text-foreground placeholder:text-foreground/45 focus-visible:border-foreground/20 focus-visible:ring-0 md:text-lg"
									name="email"
									placeholder="Email"
									required
									type="email"
								/>
								<textarea
									className="min-h-[120px] w-full resize-y border-0 border-border border-b bg-transparent px-0 py-2 text-base text-foreground outline-none transition-colors placeholder:text-foreground/45 focus-visible:border-foreground/20 md:text-lg"
									name="message"
									placeholder="Message"
									required
								/>
								<button
									className="h-10 w-full rounded-2xl bg-foreground font-medium text-background text-base transition-colors hover:bg-foreground/90 md:h-11 md:text-lg"
									type="submit"
								>
									Submit
								</button>
							</form>

							<p className="mt-4 text-center text-foreground/60 text-sm md:text-base">
								By submitting, you agree to our{" "}
								<a className="underline hover:text-foreground" href="#terms">
									Terms
								</a>{" "}
								and{" "}
								<a className="underline hover:text-foreground" href="#privacy">
									Privacy Policy
								</a>
								.
							</p>
						</div>
					</StaggerItem>
				</StaggerText>
			</div>
		</Section>
	);
}
