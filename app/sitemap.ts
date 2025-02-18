import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.tattoostudio.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.tattoostudio.com/booking',
      lastModified: new Date(),
    },
    {
      url: 'https://www.tattoostudio.com/artists/alex-johnson',
      lastModified: new Date(),
    },
    // Add more URLs for other pages and artist profiles
  ];
}
