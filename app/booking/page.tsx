import BookingForm from '@/components/BookingForm';
import { Loader2 } from 'lucide-react';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Book Your Tattoo Session',
  description:
    'Schedule your tattoo appointment with our expert artists. Choose your preferred date, describe your tattoo idea, and start your journey to getting inked.',
  openGraph: {
    title: 'Book Your Tattoo Session | Tattoo Studio',
    description:
      'Ready for your next tattoo? Book an appointment with our skilled artists at Tattoo Studio. Describe your idea and choose a date that works for you.',
    url: 'https://www.tattoostudio.com/booking',
    siteName: 'Tattoo Studio',
    images: [
      {
        url: 'https://www.tattoostudio.com/booking-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tattoo Studio Booking Page',
      },
    ],
    locale: 'en_US',
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
    <Suspense fallback={<Loader />}>
      <BookingForm />
    </Suspense>
  );
}
