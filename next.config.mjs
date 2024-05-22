/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false;
			config.node = {
				global: true,
			};
		}
		return config;
	},
	reactStrictMode: true,
	output: "standalone",
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "dummyimage.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "th.bing.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "ecocloud.vn",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "turbo.vn",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
