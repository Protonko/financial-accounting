const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles')],
  },
  i18n: {
    locales: ['EN', 'RU'],
    defaultLocale: 'RU',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}
