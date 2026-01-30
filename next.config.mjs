import nextPwa from "next-pwa";

/** @type {import('next').NextConfig} */
const withPWA = nextPwa({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const isGithubActor = process.env.NEXT_PUBLIC_GITHUB_ACTOR === "upsidedownlabs" || process.env.NEXT_PUBLIC_GITHUB_ACTOR === undefined

const config = {
  reactStrictMode: true,
  output: "export", // Ensures it works with static export
  basePath:"",
  assetPrefix: "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  ...withPWA,
};

export default config;