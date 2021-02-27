const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['logo.clearbit.com']
  }
}

module.exports = withPlugins([[withImages]], nextConfig)