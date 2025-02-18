import { AboutUs } from '@/components/AboutUs';
import { Contact } from '@/components/Contact';
import { StudioOwner } from '@/components/StudioOwner';
import { Metadata } from 'next';
import { ClientCare } from '../components/ClientCare';
import Hero from '../components/Hero';
import { StudioPortfolio } from '../components/StudioPortfolio';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to Tattoo Studio - where art meets skin. Explore our talented artists, diverse portfolio, and book your tattoo session today.',
  openGraph: {
    title: 'Tattoo Studio | Premium Tattoo Artistry',
    description:
      'Discover exceptional tattoo artistry at Tattoo Studio. View our portfolio, meet our artists, and book your consultation today.',
    url: 'https://www.tattoostudio.com',
    siteName: 'Tattoo Studio',
    images: [
      {
        url: 'https://www.tattoostudio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tattoo Studio - Premium Tattoo Artistry',
      },
    ],
    locale: 'en_US',
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
