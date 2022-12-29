/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'build',
    serverRuntimeConfig: {
        // Will only be available on the server side
        apiUrl: 'http://signup-api:1984',
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        apiUrl: 'http://localhost:1984',
    },
}

module.exports = nextConfig
