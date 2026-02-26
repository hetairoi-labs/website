import Image from "next/image";
import { StaggerItem, StaggerText } from "@/components/animations/stagger-text";
import { Section } from "@/components/layout/section";
import { GraphLine } from "@/components/ui/graph-line";

export function HowWeDeliver() {
	return (
		<Section className="py-24 md:py-32">
			<div className="mx-auto flex max-w-7xl flex-col gap-16 md:gap-24">
				<StaggerText className="flex flex-col items-center gap-4" delay={0.2}>
					<StaggerItem>
						<span className="font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]">
							Why Us
						</span>
					</StaggerItem>
					<StaggerItem>
						<h2 className="text-center font-normal text-2xl text-foreground leading-[1.1] tracking-[-0.04em] md:text-3xl lg:text-5xl">
							How we deliver better
							<br />
							work <span className="text-muted-foreground">that lasts</span>
						</h2>
					</StaggerItem>
				</StaggerText>

				<div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-5">
					<div className="flex flex-col gap-4 md:gap-6 lg:col-span-2">
						<StaggerText className="h-full" delay={0.2}>
							<StaggerItem className="h-full">
								<div className="relative flex h-[600px] flex-col justify-between overflow-hidden rounded-3xl bg-muted p-6 md:p-8">
									<div className="relative z-10 flex max-w-sm flex-col gap-4">
										<h3 className="font-normal text-2xl text-foreground tracking-[-0.04em] md:text-3xl">
											Fast turnarounds
										</h3>
										<p className="text-base text-foreground leading-relaxed md:text-lg">
											Timelines are respected here. Expect quick handoffs, clear
											communication, and momentum that doesn&apos;t stall.
										</p>
									</div>
									<div className="absolute bottom-0 left-0 h-full w-full">
										<Image
											alt="Red sports car representing speed"
											className="object-cover object-bottom"
											fill
											priority
											sizes="(max-width: 1024px) 100vw, 40vw"
											src="/images/how-we-deliver/fast-turnarounds.png"
										/>
									</div>
								</div>
							</StaggerItem>
						</StaggerText>

						<StaggerText className="h-full" delay={0.3}>
							<StaggerItem className="h-full">
								<div className="relative flex h-[300px] flex-col items-start overflow-hidden rounded-3xl bg-card p-6 md:p-8">
									<div className="relative z-10 flex max-w-md flex-col gap-4">
										<h3 className="font-normal text-2xl text-foreground tracking-[-0.04em] md:text-3xl">
											Iteration until satisfaction
										</h3>
										<p className="text-base text-foreground leading-relaxed md:text-lg">
											Refinement is part of the process. We stay in the loop
											until you&apos;re genuinely happy with the outcome.
										</p>
									</div>
									<div className="pointer-events-none absolute right-0 bottom-0 h-full w-full">
										<Image
											alt="Gradient peach"
											className="rotate-180 object-cover object-center opacity-50"
											fill
											sizes="(max-width: 1024px) 100vw, 40vw"
											src="/images/how-we-deliver/gradient-peach.jpg"
										/>
									</div>
								</div>
							</StaggerItem>
						</StaggerText>
					</div>

					<div className="flex flex-col gap-4 md:gap-6 lg:col-span-3">
						<StaggerText delay={0.2}>
							<StaggerItem>
								<div className="relative flex h-[300px] flex-col overflow-hidden rounded-3xl bg-dark p-6 text-dark-foreground md:p-8">
									<div className="relative z-10 flex max-w-md flex-col gap-4">
										<h3 className="font-normal text-2xl text-dark-foreground tracking-[-0.04em] md:text-3xl">
											Conversion focused
										</h3>
										<p className="text-base text-dark-foreground leading-relaxed md:text-lg">
											Good design looks great, but it also works. Every decision
											is made with performance and user goals in mind.
										</p>
									</div>
									<GraphLine />
								</div>
							</StaggerItem>
						</StaggerText>

						<StaggerText className="grow" delay={0.3}>
							<StaggerItem className="h-full">
								<div className="group relative flex h-[600px] flex-col overflow-hidden rounded-3xl border border-border/50 bg-background p-6 md:p-8">
									<div className="absolute inset-0 z-0">
										<Image
											alt=""
											aria-hidden
											className="object-cover opacity-20"
											fill
											sizes="(max-width: 1024px) 100vw, 60vw"
											src="/images/how-we-deliver/gradient-peach.jpg"
										/>
									</div>
									<div className="relative z-20 mb-12 flex max-w-md flex-col gap-4">
										<h3 className="font-normal text-2xl text-foreground tracking-[-0.04em] md:text-3xl">
											Quality over quantity
										</h3>
										<p className="text-base text-foreground leading-relaxed md:text-lg">
											We take on fewer projects so each one gets the attention,
											detail, and care it deserves.
										</p>
									</div>

									<div className="absolute inset-0 h-full w-full overflow-hidden">
										<div className="absolute bottom-0 left-0 h-[65%] w-full">
											<div className="absolute top-[6%] left-[-5%] z-10 w-[65%] -rotate-6 rounded-xl border border-border/10 shadow-2xl lg:w-[50%]">
												<Image
													alt="Filosign project"
													className="h-auto w-full rounded-xl"
													height={600}
													sizes="(max-width: 1024px) 60vw, 30vw"
													src="/images/works/filosign.png"
													width={800}
												/>
											</div>

											<div className="absolute top-[1%] right-[-20%] z-10 w-[65%] -rotate-8 rounded-xl border border-border/10 shadow-2xl lg:right-[-10%] lg:w-[55%]">
												<Image
													alt="Haithe project"
													className="h-auto w-full rounded-xl"
													height={600}
													sizes="(max-width: 1024px) 60vw, 33vw"
													src="/images/works/haithe.png"
													width={800}
												/>
											</div>

											<div className="absolute top-[15%] left-[18%] z-20 w-[65%] -rotate-5 rounded-xl border border-border/10 shadow-2xl lg:w-[55%]">
												<Image
													alt="Replycorp project"
													className="h-auto w-full rounded-xl"
													height={600}
													sizes="(max-width: 1024px) 60vw, 33vw"
													src="/images/works/replycorp.png"
													width={800}
												/>
											</div>
										</div>
									</div>
								</div>
							</StaggerItem>
						</StaggerText>
					</div>
				</div>
			</div>
		</Section>
	);
}
