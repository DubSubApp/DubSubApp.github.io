/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true,
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
