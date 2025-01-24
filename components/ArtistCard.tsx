import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface ArtistCardProps {
  name: string;
  specialty: string;
  image: string;
  portfolio: string[];
}

export function ArtistCard({ name, specialty, image, portfolio }: ArtistCardProps) {
  return (
    <div className="bg-card overflow-hidden shadow-md">
      <div className="relative h-64">
        <Link href={`/artists/${name.toLowerCase().replace(' ', '-')}`} className="text-primary">
          <Image
            src={`https://xrkjikypmvonnjzzswbu.supabase.co/storage/v1/object/public/artist-images/${image}`}
            alt={`${name} - Tätowierer`}
            fill
            className="object-cover"
          />
        </Link>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{specialty}</p>
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {portfolio.map((item, index) => (
            <Image
              key={index}
              src={`https://xrkjikypmvonnjzzswbu.supabase.co/storage/v1/object/public/artist-images/${item}`}
              alt={`${name}'s Arbeit ${index + 1}`}
              width={60}
              height={60}
              className="object-cover"
            />
          ))}
        </div>
        <div>
          <Button
            asChild
            variant="outline"
            className="rounded-none text-foreground border border-foreground flex"
          >
            <Link
              href={`/artists/${name.toLowerCase().replace(' ', '-')}`}
              className="text-primary"
            >
              Portfolio Ansehen
            </Link>
          </Button>
          {/* <Button asChild className="rounded-none">
            <Link href={`/booking?artist=${encodeURIComponent(name)}`}>Jetzt Buchen</Link>
          </Button> */}
        </div>
      </div>
    </div>
  );
}
