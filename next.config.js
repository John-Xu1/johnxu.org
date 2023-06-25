/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: [
    {
      source: "/(.*)",
      destination: "/$1",
    },
  ],
};

module.exports = nextConfig;
