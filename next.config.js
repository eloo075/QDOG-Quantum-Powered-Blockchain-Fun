/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Completely disable webpack caching
    config.cache = false;
    
    // Additional cache-related configurations
    if (dev) {
      // Disable persistent caching in development
      config.infrastructureLogging = {
        level: 'warn',
      };
      
      // Force webpack to run in memory-only mode
      config.optimization = {
        ...config.optimization,
        moduleIds: 'named',
        chunkIds: 'named',
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      };
    }
    
    return config;
  },
  // Ensure output is properly handled
  output: 'standalone',
  // Disable image optimization during development to reduce filesystem operations
  images: {
    unoptimized: process.env.NODE_ENV === 'development'
  },
  // Add additional safeguards for development
  reactStrictMode: true,
  poweredByHeader: false,
  // Disable automatic static optimization to prevent caching issues
  experimental: {
    isrMemoryCacheSize: 0,
  }
}

module.exports = nextConfig