import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Victor Lis Bronzo Portfolio',
    short_name: 'VLB Portfolio',
    description: 'Portfolio showcasing Victor Lis Bronzo, a Web/Full-Stack Developer from Brazil.',
    start_url: '/',
    display: 'standalone',
    background_color: '#2a2c41',
    theme_color: '#34df8b',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '192x192',
        type: 'image/x-icon',
      },
    ],
  }
}