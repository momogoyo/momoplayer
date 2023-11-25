const { withKumaUI } = require("@kuma-ui/next-plugin")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@momoplayer/core",
    "@momoplayer/react",
    "@momoplayer/vue"
  ]
}

module.exports = withKumaUI(nextConfig)