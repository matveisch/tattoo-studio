import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.laroselatelier.de',
      lastModified: new Date(),
    },
    {
      url: 'https://www.laroselatelier.de/agb',
      lastModified: new Date(),
    },
  ];
}
