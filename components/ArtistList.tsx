import Image from 'next/image';

interface ArtistListProps {
  artists: any[];
  onEdit: (artist: any) => void;
  onDelete: (id: string) => void;
}

export function ArtistList({ artists, onEdit, onDelete }: ArtistListProps) {
  return (
    <ul className="space-y-4">
      {artists.map((artist) => (
        <li key={artist.id} className="border p-4 rounded-md">
          <h3 className="text-lg font-semibold">{artist.name}</h3>
          {artist.image && (
            <Image
              width={50}
              height={50}
              src={`https://xrkjikypmvonnjzzswbu.supabase.co/storage/v1/object/public/artist-images/${artist.image}`}
              alt="artist-image"
              className="object-cover"
            />
          )}
          <p className="text-sm text-gray-600">
            {artist.style} – {artist.instagram}
          </p>
          <p className="text-sm text-gray-600">{artist.bio}</p>
          <div className="mt-2 flex space-x-2">
            <button
              onClick={() => onEdit(artist)}
              className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(artist.id)}
              className="bg-red-500 text-white px-2 py-1 rounded text-sm"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
