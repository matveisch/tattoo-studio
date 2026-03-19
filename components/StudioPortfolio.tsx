import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import fs from 'fs/promises';
import path from 'path';

export async function StudioPortfolio() {
  let images: string[] = [];
  try {
    const directoryPath = path.join(process.cwd(), 'public', 'studio');
    const files = await fs.readdir(directoryPath);
    images = files.filter(file => file.match(/\.(jpg|jpeg|png|webp|gif)$/i));
  } catch (error) {
    console.error('Failed to read studio directory:', error);
  }

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
          {images.map((fileName, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <button className="relative group flex justify-center items-center">
                  <Image
                    src={`/studio/${fileName}`}
                    alt={`tattoo`}
                    width={400}
                    height={600}
                    className="shadow-md transition-transform duration-300 group-hover:scale-105 h-48 w-48 object-cover"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <div className="flex justify-center">
                  <Image
                    src={`/studio/${fileName}`}
                    alt={`tattoo`}
                    width={800}
                    height={800}
                    className="shadow-md object-contain max-h-[80vh] w-auto"
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
