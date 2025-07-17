const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: 'export',
  basePath: isProd ? '/deck14-frontend' : '',
  assetPrefix: isProd ? '/deck14-frontend/' : '',
  publicRuntimeConfig: {
    assetPrefix: isProd ? '/deck14-frontend/' : '',
  },
};