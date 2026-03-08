/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    minimumCacheTTL: 31536000, // 1 year browser + CDN cache

    remotePatterns: [
      // Headless WP media
      {
        protocol: "https",
        hostname: "cms.fractalcommunications.ca",
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
