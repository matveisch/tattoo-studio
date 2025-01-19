import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tables } from '@/utils/supabase/supabase';
import { Instagram, X } from 'lucide-react';
import Image from 'next/image';

interface ArtistListProps {
  artists: Tables<'artists'>[];
  onEdit: (artist: Tables<'artists'>) => void;
  onDelete: (id: number) => void;
  onDeleteImage: (artistId: number, imageName: string) => Promise<void>;
}

export function ArtistList({ artists, onEdit, onDelete, onDeleteImage }: ArtistListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {artists.map((artist) => (
        <Card key={artist.id} className="overflow-hidden">
          <CardHeader className="pb-0">
            <div className="flex items-center space-x-4">
              {artist.image && (
                <Image
                  width={80}
                  height={80}
                  src={`https://xrkjikypmvonnjzzswbu.supabase.co/storage/v1/object/public/artist-images/${artist.image}`}
                  alt={`${artist.name}'s profile`}
                  className="object-cover rounded-md w-24 h-24"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold">{artist.name}</h3>
                <p className="text-sm text-muted-foreground">{artist.style}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground mb-4">{artist.bio}</p>
            {artist.instagram && (
              <a
                href={`https://instagram.com/${artist.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-blue-500 hover:underline"
              >
                <Instagram className="w-4 h-4 mr-1" />@{artist.instagram}
              </a>
            )}
            {artist.portfolio.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Portfolio</h4>
                <div className="grid grid-cols-3 gap-2">
                  {artist.portfolio.map((image, index) => (
                    <div key={index} className="relative group">
                      <Image
                        width={100}
                        height={100}
                        alt={`${artist.name}'s portfolio image ${index + 1}`}
                        src={`https://xrkjikypmvonnjzzswbu.supabase.co/storage/v1/object/public/artist-images/${image}`}
                        className="rounded-md object-cover w-full h-24"
                      />
                      <button
                        onClick={() => onDeleteImage(artist.id, image)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label={`Delete ${artist.name}'s portfolio image ${index + 1}`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                onEdit(artist);
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              Edit
            </Button>
            <Button variant="destructive" onClick={() => onDelete(artist.id)}>
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
