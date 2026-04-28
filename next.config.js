/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.cal.eu https://cal.eu;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
