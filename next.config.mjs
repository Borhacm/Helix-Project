/** @type {import('next').NextConfig} */
const nextConfig = {
  // Web estática: GitHub Pages publica la carpeta out/ (.github/workflows/pages.yml).
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig