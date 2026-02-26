import nextDynamic from "next/dynamic";
import { ScrollSmootherLayout } from "@/components/animations/scroll-smoother";
import { About } from "@/components/landing/about";
import { Hero } from "@/components/landing/hero";
import { Navigation } from "@/components/layout/navigation";

const HowWeDeliver = nextDynamic(
	() =>
		import("@/components/landing/how-we-deliver").then((m) => ({
			default: m.HowWeDeliver,
		})),
	{
		ssr: true,
		loading: () => <section className="min-h-[600px] w-full py-24 md:py-32" />,
	}
);

const Works = nextDynamic(
	() =>
		import("@/components/landing/works").then((m) => ({
			default: m.Works,
		})),
	{
		ssr: true,
		loading: () => (
			<section className="min-h-[400px] w-full bg-card py-24 md:py-32" />
		),
	}
);

const Footer = nextDynamic(
	() =>
		import("@/components/layout/footer").then((m) => ({
			default: m.Footer,
		})),
	{
		ssr: true,
		loading: () => <footer className="min-h-[300px] w-full bg-dark" />,
	}
);

const FAQ = nextDynamic(
	() =>
		import("@/components/landing/faq").then((m) => ({
			default: m.FAQ,
		})),
	{
		ssr: true,
		loading: () => <section className="min-h-[500px] w-full py-24 md:py-32" />,
	}
);

export const dynamic = "force-static";

export default function Home() {
	return (
		<div className="min-h-screen bg-background font-sans text-foreground antialiased">
			<ScrollSmootherLayout>
				<Navigation />
				<main>
					<Hero />
					<About />
					<HowWeDeliver />
					<Works />
					<FAQ />
					<Footer />
				</main>
			</ScrollSmootherLayout>
		</div>
	);
}
