import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  // Ukloni ili zakomentariši experimental: { appDir: true } ako se pojavljuje greška
};

export default nextConfig;

// next.config.js
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
