import { ArtistCard } from '@/components/ArtistCard'

const artists = [
  {
    name: "Alex Johnson",
    specialty: "Black & Grey Realism",
    image: "/tattoo-artist.jpeg",
    portfolio: [
      "/tattoo.jpeg",
      "/tattoo.jpeg",
      "/tattoo.jpeg",
      "/tattoo.jpeg"
    ]
  },
  {
    name: "Sam Lee",
    specialty: "Japanese Traditional",
    image: "/tattoo-artist-2.jpeg",
    portfolio: [
      "/tattoo.jpeg",
      "/tattoo.jpeg",
      "/tattoo.jpeg",
      "/tattoo.jpeg"
    ]
  },
  {
    name: "Maria Garcia",
    specialty: "Colorful Neo-Traditional",
    image: "/tattoo-artist.jpeg",
    portfolio: [
      "/tattoo.jpeg",
      "/tattoo.jpeg",
      "/tattoo.jpeg",
      "/tattoo.jpeg"
    ]
  }
]

export function ArtistsShowcase() {
  return (
    <section className="py-16 bg-background w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Our Talented Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <ArtistCard key={artist.name} {...artist} />
          ))}
        </div>
      </div>
    </section>
  )
}
