// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable webpack 5 behavior
  webpack5: true,
  // Add transpilation configuration if needed
  transpilePackages: ["@chakra-ui/react", "@chakra-ui/theme"],
};

module.exports = nextConfig;