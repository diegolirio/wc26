/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true
  },
  transpilePackages: ["@wc26/ui", "@wc26/shared-front"]
};

export default nextConfig;
