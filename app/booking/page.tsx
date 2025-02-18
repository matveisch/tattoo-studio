import BookingForm from '@/components/BookingForm';
import { Loader2 } from 'lucide-react';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Buche Deine Tattoo-Sitzung',
  description:
    'Vereinbare deinen Tattoo-Termin mit unseren erfahrenen Künstlern. Wähle deinen Wunschtermin, beschreibe deine Tattoo-Idee und starte deine Reise zum Wunsch-Tattoo.',
  openGraph: {
    title: 'Tattoo-Termin Buchen | La Rosel Tattoo Atelier',
    description:
      'Bereit für dein nächstes Tattoo? Buche einen Termin mit unseren talentierten Künstlern im La Rosel Tattoo Atelier. Beschreibe deine Idee und wähle einen passenden Termin.',
    url: 'https://www.laroseltattoo.com/booking',
    siteName: 'La Rosel Tattoo Atelier',
    images: [
      {
        url: 'https://www.laroseltattoo.com/booking-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'La Rosel Tattoo Atelier Buchungsseite',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
};

function Loader() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}

export default function AppointmentBooking() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Buche Deinen Termin</h1>
        <div className="max-w-2xl mx-auto">
          <Suspense fallback={<Loader />}>
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
