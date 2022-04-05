/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['unsplash.com'],
  },
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
