/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false,
  },
  allowedDevOrigins: [
    '*.replit.dev',
    '*.sisko.replit.dev',
    '42962344-2f9a-42c2-ae7f-d50379562371-00-1lgx6sxq5jwiv.sisko.replit.dev',
    '127.0.0.1',
    'localhost',
  ],
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
