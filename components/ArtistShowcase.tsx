import { ArtistCard } from '@/components/ArtistCard';

const artists = [
  {
    name: 'Alex Johnson',
    specialty: 'Schwarz & Grau Realismus',
    image: '/tattoo-artist.jpeg',
    portfolio: ['/tattoo.jpeg', '/tattoo.jpeg', '/tattoo.jpeg', '/tattoo.jpeg'],
  },
  {
    name: 'Sam Lee',
    specialty: 'Japanischer Traditioneller Stil',
    image: '/tattoo-artist-2.jpeg',
    portfolio: ['/tattoo.jpeg', '/tattoo.jpeg', '/tattoo.jpeg', '/tattoo.jpeg'],
  },
  {
    name: 'Maria Garcia',
    specialty: 'Farbiger Neo-Traditioneller Stil',
    image: '/tattoo-artist.jpeg',
    portfolio: ['/tattoo.jpeg', '/tattoo.jpeg', '/tattoo.jpeg', '/tattoo.jpeg'],
  },
];

export function ArtistsShowcase() {
  return (
    <section className="py-16 bg-background w-full" id="artists">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
          Unsere Talentierten Künstler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <ArtistCard key={artist.name} {...artist} />
          ))}
        </div>
      </div>
    </section>
  );
}
