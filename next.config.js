/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/deck14-frontend', // 👈 required for GitHub Pages
    trailingSlash: true, // 👈 required for static hosting
    assetPrefix: '/deck14-frontend/'
  };
  
  module.exports = nextConfig;