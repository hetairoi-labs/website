import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "../index.css";
import Providers from "@/components/providers";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: "Hetairoi Consulting LLC | Blockchain & Software Engineering",
		template: "%s | Hetairoi Consulting LLC",
	},
	description:
		"US-registered consulting firm. Globally distributed engineering delivery. Local client coordination. Production-grade systems for Web3, AI, and full-stack web.",
	keywords: [
		"consulting",
		"software engineering",
		"engineering delivery",
		"full stack development",
		"web development",
		"blockchain",
		"Web3",
		"decentralized",
		"AI",
		"machine learning",
		"production-grade systems",
		"software development",
		"globally distributed team",
		"remote engineering",
		"React",
		"TypeScript",
		"smart contracts",
		"digital signature",
		"MVP development",
		"product development",
		"referral systems",
		"viral marketing",
	],
	authors: [{ name: "Hetairoi Consulting LLC", url: SITE_URL }],
	creator: "Hetairoi Consulting LLC",
	publisher: "Hetairoi Consulting LLC",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	alternates: {
		canonical: SITE_URL,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: SITE_URL,
		siteName: "Hetairoi® Consulting LLC",
		title: "Hetairoi® Consulting LLC | Blockchain & Software Engineering",
		description:
			"US-registered consulting firm. Globally distributed engineering delivery. Local client coordination.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Hetairoi® Consulting LLC | Blockchain & Software Engineering",
		description:
			"US-registered consulting firm. Globally distributed engineering delivery. Local client coordination.",
	},
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Hetairoi Consulting LLC",
		url: SITE_URL,
		description:
			"US-registered consulting firm. Globally distributed engineering delivery. Local client coordination.",
	};

	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<script type="application/ld+json">
					{JSON.stringify(organizationSchema)}
				</script>
				<Providers>
					<div className="min-h-svh">{children}</div>
				</Providers>
			</body>
		</html>
	);
}
