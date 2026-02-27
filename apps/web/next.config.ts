import "@next/env/web";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typedRoutes: false,
	reactCompiler: true,
	output: "export",
};

export default nextConfig;
