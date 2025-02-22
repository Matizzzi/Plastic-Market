import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ['i.postimg.cc', 'rimage.ripley.cl'],
    unoptimized: true,  // Deshabilitar la optimización de imágenes
  },
};

export default nextConfig;
