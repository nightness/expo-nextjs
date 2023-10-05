const { withExpo } = require("@expo/next-adapter");

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    "react-native",
    "expo",
    "react-native-svg",
    "react-native-safe-area-context",
    // Add more React Native / Expo packages here...
  ],
  experimental: {
    forceSwcTransforms: true,
  },
});

module.exports = nextConfig;
