/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.resolve.alias['react-slick'] = require.resolve('react-slick/lib/index.js');
      return config;
    },
  };
  
  module.exports = nextConfig;
  