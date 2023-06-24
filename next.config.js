/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.juancman.dev'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
  env: {
    EMAIL_JS_SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    MAILER_LITE_KEY: process.env.MAILER_LITE_KEY,
  },
  async rewrites() {
    return [
      {
        source: '/*',
        destination: 'https://connect.mailerlite.com/*',
      },
    ];
  },
};

module.exports = nextConfig;
