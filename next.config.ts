/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/portfolio',
    assetPrefix: '/portfolio/',
    trailingSlash: true, // helps ensure consistent URL structure
    images: {
      unoptimized: true, // disable image optimization for static export
    },
};

module.exports = nextConfig;