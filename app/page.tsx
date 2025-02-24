import { AboutUs } from '@/components/AboutUs';
import { Contact } from '@/components/Contact';
import { StudioOwner } from '@/components/StudioOwner';
import { Metadata } from 'next';
import { ClientCare } from '../components/ClientCare';
import Hero from '../components/Hero';
import { StudioPortfolio } from '../components/StudioPortfolio';

export const metadata: Metadata = {
  title: 'La Rosel Tattoo Atelier',
  description:
    'Willkommen im La Rosel Tattoo Atelier - wo Kunst auf Haut trifft. Entdecke unsere talentierten Künstler, vielfältiges Portfolio und buche noch heute deinen Termin.',
  openGraph: {
    title: 'La Rosel Tattoo Atelier | Premium Tattoo Kunst',
    description:
      'Entdecke außergewöhnliche Tattoo-Kunst im La Rosel Tattoo Atelier. Sieh dir unser Portfolio an und vereinbare deine Beratung.',
    url: 'https://www.laroselatelier.de',
    siteName: 'La Rosel Tattoo Atelier',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ArtistsShowcase /> */}
      <StudioPortfolio />
      <ClientCare />
      <AboutUs />
      <StudioOwner />
      <Contact />
    </>
  );
}
