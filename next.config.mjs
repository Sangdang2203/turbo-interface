/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false;
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
		],
	},
};

export default nextConfig;
