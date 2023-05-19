/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  //https://github.com/Azure/static-web-apps/discussions/1066
  //https://nextjs.org/docs/pages/api-reference/next-config-js/output
  output:"standalone",
  images: {
    minimumCacheTTL: 12000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'publish-p81252-e700817.adobeaemcloud.com',
        // port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'publish-p64257-e147834-cmstg.adobeaemcloud.com',
        // port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
