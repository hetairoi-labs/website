import { ImageResponse } from "next/og";

export const alt =
	"Hetairoi® Consulting LLC - Blockchain & Software Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return new ImageResponse(
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				height: "100%",
				background: "linear-gradient(135deg, #111111 0%, #1a1a1a 100%)",
				fontFamily: "system-ui, sans-serif",
			}}
		>
			<div
				style={{
					fontSize: 64,
					fontWeight: 400,
					color: "white",
					letterSpacing: "-0.04em",
					marginBottom: 16,
				}}
			>
				Hetairoi® Consulting LLC
			</div>
			<div
				style={{
					fontSize: 24,
					color: "rgba(255, 255, 255, 0.8)",
					fontWeight: 300,
					textAlign: "center",
					maxWidth: 800,
					lineHeight: 1.4,
				}}
			>
				US-registered consulting firm · Globally distributed engineering
				delivery · Local client coordination
			</div>
			<div
				style={{
					display: "flex",
					gap: 16,
					marginTop: 32,
					fontSize: 14,
					color: "#ff5914",
					fontWeight: 500,
					letterSpacing: "0.1em",
					textTransform: "uppercase",
				}}
			>
				<span>Blockchain</span>
				<span>·</span>
				<span>Web3</span>
				<span>·</span>
				<span>AI</span>
				<span>·</span>
				<span>Full Stack</span>
			</div>
		</div>,
		{ ...size }
	);
}
