// next.config.mjs
import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
  dest: 'public'
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
  // FIX: Add this line to fix Turbopack error
  turbopack: {},
};

export default withPWA({
  ...nextConfig
})