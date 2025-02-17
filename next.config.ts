import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.weatherapi.com'], // Adicione domínios de imagens externas, se necessário
  },
};

export default nextConfig;
