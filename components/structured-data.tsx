import Script from 'next/script';

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TattooShop',
    name: 'Tattoo Studio',
    image: 'https://www.tattoostudio.com/tattoo-studio-image.jpg',
    '@id': 'https://www.tattoostudio.com',
    url: 'https://www.tattoostudio.com',
    telephone: '+11234567890',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Ink Street',
      addressLocality: 'Tattoo City',
      postalCode: '12345',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.006,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '11:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/TattooStudio',
      'https://www.instagram.com/TattooStudio',
      'https://twitter.com/TattooStudio',
    ],
  };

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
}
