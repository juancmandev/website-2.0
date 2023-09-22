import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.juancman.dev'],
  },
};

export default withContentlayer(nextConfig);
