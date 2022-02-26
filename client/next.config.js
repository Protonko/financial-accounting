const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
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
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/expenses',
        permanent: true,
      },
    ]
  },
})
