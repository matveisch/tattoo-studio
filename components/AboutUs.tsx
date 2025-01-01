import Image from 'next/image';

const coreValues = [
  {
    title: 'Artistry',
    description:
      'We believe in pushing the boundaries of tattoo art, constantly evolving our skills and techniques.',
  },
  {
    title: 'Safety',
    description:
      'Your health and safety are paramount. We maintain the highest standards of hygiene and use top-quality equipment.',
  },
  {
    title: 'Individuality',
    description:
      'Every tattoo is a unique expression. We work closely with you to bring your vision to life.',
  },
  {
    title: 'Community',
    description:
      "We're more than just a studio; we're a family that supports and inspires each other and our clients.",
  },
];

export function AboutUs() {
  return (
    <section className="py-16 bg-background w-full" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">About Us</h2>

        <div className="grid gap-8 items-center mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-4">
              Founded in 2010, Ink & Soul Tattoo Studio began as a small, passionate team of two
              artists with a shared vision: to create a space where creativity flourishes and
              clients receive exceptional, personalized tattoo experiences.
            </p>
            <p className="text-muted-foreground">
              Over the years, we&apos;ve grown into a diverse family of talented artists, each
              bringing their unique style and expertise to our studio. Today, we&apos;re proud to be
              recognized as one of the leading tattoo studios in the area, known for our commitment
              to quality, creativity, and client satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Image
              src="/environment-1.jpeg"
              alt="Ink & Soul Tattoo Studio interior"
              width={400}
              height={500}
              className="shadow-md h-[200px] w-full object-cover"
            />
            <Image
              src="/environment-2.jpeg"
              alt="Tattoo artist at work"
              width={400}
              height={500}
              className="shadow-md h-[200px] w-full object-cover"
            />
            <Image
              src="/environment-3.jpeg"
              alt="Studio reception area"
              width={400}
              height={500}
              className="shadow-md h-[200px] w-full object-cover"
            />
            <Image
              src="/environment-4.jpeg"
              alt="Tattoo design consultation"
              width={400}
              height={500}
              className="shadow-md h-[200px] w-full object-cover"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-card p-6 shadow-md">
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
