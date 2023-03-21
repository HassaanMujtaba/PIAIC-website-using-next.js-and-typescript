/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains:['i.ytimg.com']
 }
}

module.exports = nextConfig
