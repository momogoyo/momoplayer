// const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
// const withVanillaExtract = createVanillaExtractPlugin();

// module.exports = withVanillaExtract()

module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    "@momoplayer/core",
    "@momoplayer/react",
    "@momoplayer/vue"
  ]
}