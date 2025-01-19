import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type ArtistParams = {
  params: { slug: string };
};

async function fetchArtist(slug: string) {
  const supabase = await createClient();

  const formattedName = slug.replace('-', ' ');
  const { data: artist, error } = await supabase
    .from('artists')
    .select('*')
    .ilike('name', formattedName) // Case-insensitive search
    .single();

  if (error) {
    console.error('Error fetching artist:', error);
    return null;
  }

  return artist;
}

export async function generateMetadata({ params }: ArtistParams): Promise<Metadata> {
  const artist = await fetchArtist(params.slug);

  if (!artist) {
    return {
      title: 'Künstler nicht gefunden',
    };
  }

  return {
    title: `${artist.name} - ${artist.specialty}`,
    description: `Entdecke die einzigartige Tattookunst von ${artist.name}, spezialisiert auf ${artist.specialty}. Sieh dir das Portfolio an und buche noch heute deinen Termin.`,
    openGraph: {
      title: `${artist.name} | Tätowierer bei La Rosel Tattoo Atelier`,
      description: `Entdecke ${artist.name}'s Portfolio mit ${artist.specialty} Tätowierungen. Buche noch heute deinen individuellen Termin bei diesem talentierten Künstler.`,
      url: `https://www.laroseltattoo.com/artists/${params.slug}`,
      siteName: 'La Rosel Tattoo Atelier',
      images: [
        {
          url: artist.image,
          width: 300,
          height: 400,
          alt: `${artist.name} - Tätowierer`,
        },
      ],
      locale: 'de_DE',
      type: 'profile',
    },
  };
}

export default async function ArtistPage({ params }: ArtistParams) {
  const artist = await fetchArtist(params.slug);

  if (!artist) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="h-full">
            <Image
              src={`https://xrkjikypmvonnjzzswbu.supabase.co/storage/v1/object/public/artist-images/${artist.image}`}
              alt={artist.name}
              width={400}
              height={600}
              className="shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between h-full gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{artist.name}</h1>
              <p className="text-xl text-muted-foreground mb-4">{artist.specialty}</p>
              <p>{artist.bio}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* <Button asChild className="rounded-none">
                <Link href={`/booking?artist=${encodeURIComponent(artist.name)}`}>
                  Jetzt Buchen
                </Link>
              </Button> */}
              <Button variant="outline" asChild className="rounded-none border-foreground">
                <a href={artist.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-12 mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {artist.portfolio.map((item, index) => (
            // todo: add dialog viewer here for photos
            <Image
              key={index}
              src={`https://xrkjikypmvonnjzzswbu.supabase.co/storage/v1/object/public/artist-images/${item}`}
              alt={`${artist.name}'s Arbeit ${index + 1}`}
              width={400}
              height={600}
              className="shadow-md hover:shadow-lg transition-shadow duration-300 w-[400px] h-[600px] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
