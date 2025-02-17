import Image from 'next/image';

const coreValues = [
  {
    title: 'Eleganz und Präzision',
    description:
      'Wir spezialisieren uns auf Fine Line, Miniatur-Realistic und Micro-Realism Tattoos.',
  },
  {
    title: 'Persönliche Geschichten',
    description:
      'Jedes Tattoo erzählt eine einzigartige Geschichte, die wir gemeinsam mit dir gestalten.',
  },
  {
    title: 'Menschlichkeit',
    description: 'Unser Atelier ist ein Ort voller Liebe, wo der Mensch im Mittelpunkt steht.',
  },
  {
    title: 'Professionalität',
    description:
      'Wir begleiten dich mit Feingefühl und Expertise bei jedem Schritt deiner Tattoo-Reise.',
  },
];

export function AboutUs() {
  return (
    <section className="py-16 bg-background w-full" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Über Uns</h2>

        <div className="grid gap-8 items-center mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Die Philosophie von La Rosel Tattoo Atelier
            </h3>
            <p className="text-muted-foreground mb-4">
              Bei La Rosel Tattoo Atelier geht es um weit mehr als nur Tattoos – es geht um
              Geschichten, Persönlichkeit und Kunst.
            </p>
            <p className="text-muted-foreground mb-4">
              Unsere Leidenschaft liegt in der Eleganz und Präzision: Fine Line, Miniatur-Realistic
              und Micro-Realism sind unsere Spezialität. Mit filigranen Linien und detailverliebten
              Designs erschaffen wir kleine Kunstwerke, die so einzigartig sind wie du selbst.
            </p>
            <p className="text-muted-foreground mb-4">
              Wir glauben daran, dass jedes Tattoo eine Geschichte erzählt. Deshalb nehmen wir uns
              die Zeit, um deine Wünsche und deine Persönlichkeit zu verstehen. Gemeinsam verwandeln
              wir deine Ideen in ein Kunstwerk, das nicht nur schön, sondern auch bedeutungsvoll
              ist.
            </p>
            <p className="text-muted-foreground">
              Unser Atelier ist ein Ort voller Liebe und Menschlichkeit. Hier steht nicht nur die
              Kunst, sondern auch der Mensch im Mittelpunkt. Ob es dein erstes Tattoo ist oder ein
              weiteres Stück in deiner Sammlung – wir begleiten dich mit viel Feingefühl und
              Professionalität.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Image
              src="/studio-2.jpeg"
              alt="La Rosel Tattoo Atelier Innenraum"
              width={400}
              height={500}
              className="shadow-md h-[300px] w-full object-cover"
            />
            <Image
              src="/studio-3.jpeg"
              alt="Tätowierer bei der Arbeit an einem Fine Line Tattoo"
              width={400}
              height={500}
              className="shadow-md h-[300px] w-full object-cover"
            />
            <Image
              src="/studio-4.jpeg"
              alt="Detailaufnahme eines Miniatur-Realistic Tattoos"
              width={400}
              height={500}
              className="shadow-md h-[300px] w-full object-cover"
            />
            <Image
              src="/studio-5.jpeg"
              alt="Kundenberatung für ein personalisiertes Tattoo-Design"
              width={400}
              height={500}
              className="shadow-md h-[300px] w-full object-cover"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Unsere Kernwerte</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-card p-6 shadow-md">
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-lg font-semibold">
          Elegant. Persönlich. Liebevoll. Das ist La Rosel.
        </p>
      </div>
    </section>
  );
}
