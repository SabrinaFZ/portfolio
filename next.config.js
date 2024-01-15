const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? process.env.NEXT_PUBLIC_BASE_PATH : undefined,
  assetPrefix: isProduction ? process.env.NEXT_PUBLIC_ASSET_PREFIX : undefined,
}

module.exports = nextConfig
