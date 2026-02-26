"use client";

import Image from "next/image";
import { useState } from "react";
import { StaggerItem, StaggerText } from "@/components/animations/stagger-text";
import { Section } from "@/components/layout/section";
import { CursorArrow } from "@/components/ui/cursor-arrow";
import { SimpleLink } from "@/components/ui/simple-link";

interface Project {
	accentColor: string;
	description: string;
	id: string;
	image: string;
	link: string;
	tags: string[];
	title: string;
}

const projects: Project[] = [
	{
		id: "01",
		title: "Replycorp",
		description:
			"Turn reach into revenue. Link social activity to outcomes with a revolution in referral systems, transforming social media into a true viral sales channel. A way to directly connect social activity to outcomes.",
		tags: ["Social Media", "Referral System", "Viral Marketing"],
		link: "https://replycorp.io",
		image: "/images/works/replycorp.png",
		accentColor: "#FF0013",
	},
	{
		id: "02",
		title: "Filosign",
		description:
			"Production-grade system build, Decentralized digital signature platform with blockchain verification and post-quantum cryptography, delivered from concept to production-ready MVP",
		tags: ["Blockchain", "Security", "React"],
		link: "https://app.filosign.xyz",
		image: "/images/works/filosign.png",
		accentColor: "#4E9964",
	},
	{
		id: "03",
		title: "Haithe",
		description:
			"Backend performance and infrastructure hardening. Optimized transaction processing and database performance for live Web3 marketplace.",
		tags: ["Backend", "Web3", "Performance"],
		link: "https://haithe.hetairoi.xyz",
		image: "/images/works/haithe.png",
		accentColor: "#010101",
	},
];

export function Works() {
	const [hoveredImageId, setHoveredImageId] = useState<string | null>(null);
	const [initialMousePos, setInitialMousePos] = useState<{
		x: number;
		y: number;
	} | null>(null);

	const hoveredProject = projects.find((p) => p.id === hoveredImageId);

	return (
		<Section alt className="py-24 md:py-32">
			<CursorArrow
				accentColor={hoveredProject?.accentColor}
				initialPosition={initialMousePos}
				isVisible={hoveredImageId !== null}
			/>
			<div className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:gap-24">
				<div className="w-full">
					<StaggerText
						className="mb-12 flex w-full justify-center md:mb-16"
						delay={0.2}
						triggerOnView
					>
						<StaggerItem>
							<h2 className="text-start font-normal text-6xl text-foreground leading-none tracking-[-0.04em] md:text-8xl lg:text-[120px]">
								Works
							</h2>
						</StaggerItem>
					</StaggerText>
					<div className="h-px w-full bg-border/60" />
				</div>

				<div className="flex flex-col gap-32 md:gap-40">
					{projects.map((project) => (
						<div
							className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[350px_1fr] lg:gap-16"
							key={project.id}
						>
							<StaggerText
								className="flex h-full flex-col justify-between gap-8 lg:gap-0"
								delay={0.2}
								triggerOnView
							>
								<StaggerItem>
									<span className="block w-fit border-border border-b pb-4 font-mono text-muted-foreground text-sm">
										{project.id}
									</span>
								</StaggerItem>

								<StaggerItem className="flex flex-col gap-6 lg:mt-32">
									<h3 className="font-normal text-4xl text-foreground md:text-5xl">
										{project.title}
									</h3>
									<p className="max-w-lg text-muted-foreground text-xl leading-relaxed">
										{project.description}
									</p>
								</StaggerItem>
							</StaggerText>

							<StaggerText
								className="flex justify-end"
								delay={0.4}
								triggerOnView
							>
								<StaggerItem>
									<a
										className="flex w-full max-w-2xl cursor-pointer overflow-hidden rounded-3xl border border-foreground/5 shadow-sm transition-transform duration-700"
										href={project.link}
										rel="noopener noreferrer"
										target="_blank"
									>
										<Image
											alt={project.title}
											className="h-auto w-full object-cover"
											height={600}
											onMouseEnter={(e) => {
												setInitialMousePos({ x: e.clientX, y: e.clientY });
												setHoveredImageId(project.id);
											}}
											onMouseLeave={() => {
												setHoveredImageId(null);
												setInitialMousePos(null);
											}}
											sizes="(max-width: 1024px) 100vw, 800px"
											src={project.image}
											width={800}
										/>
									</a>
								</StaggerItem>
							</StaggerText>
						</div>
					))}
				</div>

				<div className="flex items-start pt-8">
					<SimpleLink href="/works">View all works</SimpleLink>
				</div>
			</div>
		</Section>
	);
}
