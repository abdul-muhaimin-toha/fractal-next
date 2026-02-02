/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    minimumCacheTTL: 31536000, // 1 year browser + CDN cache

    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "headless-toha-startup.local",
      },

      // Staging
      {
        protocol: "https",
        hostname: "staging.hellonotionhive.com",
      },

      // Headless WP media
      {
        protocol: "https",
        hostname: "dashboard.sentrysecuritybd.com",
        pathname: "/wp-content/uploads/**",
      },

      // YouTube thumbnails
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
