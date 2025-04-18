// next.config.js
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH, // Use the env variable
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;