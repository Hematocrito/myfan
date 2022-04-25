/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
    localeDetection: false
  },
  images: {
    domains: [
      'randomuser.me',
      'i.imgur.com',
      'upload.wikimedia.org',
      'restcountries.eu',
      'flagcdn.com',
    ],
  },
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8080' // development api
        : 'http://localhost:3000/api', // production api
  },
};
