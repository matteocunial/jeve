/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // GitHub Pages publica il progetto "github.com/user/jeve" → serve il basePath.
  // Per il deploy lì: BASE_PATH=/jeve NEXT_PUBLIC_SITE_URL=https://matteocunial.github.io/jeve next build
  basePath: process.env.BASE_PATH || "",
};

export default nextConfig;
