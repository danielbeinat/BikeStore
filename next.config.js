/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true,
        domains: [],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Allow generation of pages with dynamic content during builds
    experimental: {
        isrMemoryCacheSize: 0,
    },
}

module.exports = nextConfig
