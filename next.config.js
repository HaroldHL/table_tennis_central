/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // 适用于静态部署到Netlify
  distDir: 'out',
}

module.exports = nextConfig