import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://autoescuelachantada.com', lastModified: new Date() },
    { url: 'https://autoescuelachantada.com/aviso-legal', lastModified: new Date() },
    { url: 'https://autoescuelachantada.com/cookies', lastModified: new Date() },
    { url: 'https://autoescuelachantada.com/privacidad', lastModified: new Date() },
  ]
}
