import Image from 'next/image';

export function StudioPortfolioList({
  images,
  onDelete,
}: {
  images: string[];
  onDelete: (filePath: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((filePath) => (
        <div key={filePath} className="relative group">
          <Image
            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/artist-images/${filePath}`}
            alt="Studio work"
            width={300}
            height={300}
            className="rounded-lg object-cover aspect-square"
          />
          <button
            onClick={() => onDelete(filePath)}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-md p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
