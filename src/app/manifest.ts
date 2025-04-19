import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Victor Lis Bronzo Portfolio',
    short_name: 'VLB Portfolio',
    description: 'Portfolio showcasing Victor Lis Bronzo, a Web/Full-Stack Developer from Brazil.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1e40af',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '192x192',
        type: 'image/x-icon',
      },
    ],
  }
}