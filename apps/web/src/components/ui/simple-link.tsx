import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SimpleLinkProps {
	children: React.ReactNode;
	className?: string;
	href: string;
	onClick?: () => void;
}

export function SimpleLink({
	href,
	children,
	className,
	onClick,
}: SimpleLinkProps) {
	return (
		<Link
			className={cn(
				"text-foreground underline-offset-4 transition-colors hover:text-muted-foreground hover:underline",
				className
			)}
			href={href as Route}
			onClick={onClick}
		>
			{children}
		</Link>
	);
}
