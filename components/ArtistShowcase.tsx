import { ArtistCard } from '@/components/ArtistCard';
import { createClient } from '@/utils/supabase/server';

export async function ArtistsShowcase() {
  const supabase = await createClient();

  const { data: artists, error } = await supabase.from('artists').select('*');

  if (error) {
    console.error('Error fetching artists:', error);

    return (
      <section className="py-16 bg-background w-full text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Unsere Talentierten Künstler</h2>
        <p className="text-red-500">
          Fehler beim Laden der Künstler. Bitte versuchen Sie es später erneut.
        </p>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background w-full" id="artists">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
          Unsere Talentierten Künstler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists?.map((artist) => <ArtistCard key={artist.name} {...artist} />)}
        </div>
      </div>
    </section>
  );
}
