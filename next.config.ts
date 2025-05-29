import type { NextConfig } from 'next'

const repoName = 'HorKahYee2304' 

const nextConfig: NextConfig = {
  output: 'export', 
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true, 
  },
}

export default nextConfig

