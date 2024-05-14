/** @type {import('next').NextConfig} */
const nextConfig = {
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
