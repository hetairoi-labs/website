import { cn } from "@/lib/utils";

interface SectionProps {
	alt?: boolean;
	children: React.ReactNode;
	className?: string;
	id?: string;
}

export function Section({
	children,
	id,
	className,
	alt = false,
}: SectionProps) {
	return (
		<section
			className={cn(
				"w-full px-4 py-24 md:px-8 md:py-32 lg:px-16 lg:py-40",
				alt ? "bg-card" : "bg-background",
				className
			)}
			id={id}
		>
			<div className="mx-auto w-full max-w-[1920px]">{children}</div>
		</section>
	);
}
