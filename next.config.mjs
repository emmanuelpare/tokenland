/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    // add any external domains you use for images here
    // domains: ['example.com'],
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;
