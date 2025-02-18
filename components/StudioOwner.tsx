import Image from 'next/image';

export function StudioOwner() {
  return (
    <section className="py-16 bg-background w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <Image
              src="/sarah-photo.jpeg"
              alt="Sarah, Inhaberin von La Rosel Tattoo Atelier"
              width={400}
              height={400}
              className="shadow-lg object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-semibold mb-4">Eure Ansprechpartnerin</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Mein Name ist Sarah, und ich bin eure Ansprechpartnerin hier im Tattoo Atelier. Ob ihr
              euch persönlich vor Ort beraten lassen möchtet oder Fragen online habt - ich bin für
              euch da, um sicherzustellen, dass ihr euch wohlfühlen werdet und die beste Betreuung
              erhaltet.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Ich beantworte eure Nachrichten, helfe bei der Terminplanung und sorge dafür, dass
              alles reibungslos abläuft. Euer Vertrauen und eure Zufriedenheit stehen für mich an
              erster Stelle, damit eure Tattoo-Ideen so umgesetzt werden wie ihr euch das wünscht.
            </p>
            <p className="text-lg text-muted-foreground">
              Ich freue mich darauf, euch bei eurem nächsten Tattoo-Projekt zu begleiten!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
