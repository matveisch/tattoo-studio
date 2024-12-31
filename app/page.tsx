import { ArtistsShowcase } from '../components/ArtistShowcase';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <ArtistsShowcase />
      </main>
    </div>
  );
}
