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
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{specialty}</p>
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {portfolio.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt={`${name}'s work ${index + 1}`}
              width={60}
              height={60}
              className="rounded-sm object-cover"
            />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Button
            asChild
            variant="outline"
            className="rounded-none text-foreground border border-foreground"
          >
            <Link
              href={`/artists/${name.toLowerCase().replace(' ', '-')}`}
              className="text-primary"
            >
              View Full Portfolio
            </Link>
          </Button>
          <Button asChild className="rounded-none">
            <Link href={`/booking/${name.toLowerCase().replace(' ', '-')}`}>Book Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
