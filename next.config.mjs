/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root: "." },
  outputFileTracingRoot: process.cwd(),
  experimental: {},
};

export default nextConfig;
