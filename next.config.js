/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();
const { withContentlayer } = require('next-contentlayer');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(withNextIntl(withContentlayer({})));
