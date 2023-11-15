/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.acmutsa.org",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
