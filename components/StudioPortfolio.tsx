'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { useState } from 'react';
// This would typically come from a database or API
const portfolioItems = [
  {
    id: 1,
    image: '/tattoo.jpeg',
    artist: 'Alex Johnson',
    style: 'Black & Grey Realism',
  },
  {
    id: 2,
    image: '/tattoo.jpeg',
    artist: 'Sam Lee',
    style: 'Japanese Traditional',
  },
  {
    id: 3,
    image: '/tattoo.jpeg',
    artist: 'Maria Garcia',
    style: 'Colorful Neo-Traditional',
  },
  {
    id: 4,
    image: '/tattoo.jpeg',
    artist: 'Alex Johnson',
    style: 'Black & Grey Realism',
  },
  {
    id: 5,
    image: '/tattoo.jpeg',
    artist: 'Sam Lee',
    style: 'Japanese Traditional',
  },
  {
    id: 6,
    image: '/tattoo.jpeg',
    artist: 'Maria Garcia',
    style: 'Colorful Neo-Traditional',
  },
  {
    id: 7,
    image: '/tattoo.jpeg',
    artist: 'Alex Johnson',
    style: 'Black & Grey Realism',
  },
  {
    id: 8,
    image: '/tattoo.jpeg',
    artist: 'Sam Lee',
    style: 'Japanese Traditional',
  },
];

export function StudioPortfolio() {
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null);

  return (
    <section className="py-16 bg-background w-full" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Our Portfolio</h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground mb-4">
            Explore our diverse collection of tattoo artistry, showcasing the unique talents and
            styles of our skilled artists. From intricate designs to bold statements, our portfolio
            reflects our commitment to quality and creativity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <button className="relative group" onClick={() => setSelectedItem(item)}>
                  <Image
                    src={item.image}
                    alt={`Tattoo by ${item.artist}`}
                    width={400}
                    height={600}
                    className="shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <p className="font-semibold">{item.artist}</p>
                      <p>{item.style}</p>
                    </div>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl h-full">
                {selectedItem && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image
                      src={selectedItem.image}
                      alt={`Tattoo by ${selectedItem.artist}`}
                      width={300}
                      height={300}
                      className="shadow-md w-full h-full object-cover"
                    />
                    <div className="flex flex-col justify-center">
                      <DialogTitle className="text-2xl font-semibold mb-2">
                        {selectedItem.artist}
                      </DialogTitle>
                      <DialogDescription className="text-lg mb-4">
                        {selectedItem.style}
                      </DialogDescription>
                      <Button asChild>
                        <a href={`/artists/${selectedItem.artist.toLowerCase().replace(' ', '-')}`}>
                          View Artist Profile
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
