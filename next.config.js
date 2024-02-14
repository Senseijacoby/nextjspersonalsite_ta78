/** @type {import('next').NextConfig} */
const nextConfig = {


    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.clerk.com",
            },
            {
                protocol: "https",
                hostname: "github.com",
            },
            {
                protocol: "https",
                hostname: "private-user-images.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "user-images.githubusercontent.com",
            },
        ],

    },
}

module.exports = nextConfig
