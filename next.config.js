const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? process.env.BASE_PATH : undefined,
  assetPrefix: isProduction ? process.env.ASSET_PREFIX : undefined,
}

module.exports = nextConfig
