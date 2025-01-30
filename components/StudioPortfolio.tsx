import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';

export async function StudioPortfolio() {
  const supabase = await createClient();

  const { data, error } = await supabase.storage.from('artist-images').list('studio');

  return (
    <section className="py-16 bg-background w-full" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Unser Portfolio</h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground mb-4">
            Entdecke unsere vielfältige Sammlung an Tattoo-Kunst, die das einzigartige Talent und
            die verschiedenen Stile unserer erfahrenen Künstler präsentiert. Von filigranen Designs
            bis hin zu ausdrucksstarken Statements spiegelt unser Portfolio unser Engagement für
            Qualität und Kreativität wider.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {!error &&
            data &&
            data.map((file, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <button className="relative group">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/artist-images/studio/${file.name}`}
                      alt={`tattoo`}
                      width={400}
                      height={600}
                      className="shadow-md transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl h-full">
                  <div className="grid grid-cols-1 gap-4">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/artist-images/studio/${file.name}`}
                      alt={`tattoo`}
                      width={300}
                      height={300}
                      className="shadow-md w-full h-full object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
        </div>
      </div>
    </section>
  );
}
