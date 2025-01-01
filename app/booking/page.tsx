'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle, Loader2, Upload, PhoneIcon as WhatsappIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function Loader() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}

function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [file, setFile] = useState<File | null>(null);
  const [tattooIdea, setTattooIdea] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const artist = searchParams.get('artist');
    if (artist) {
      setTattooIdea(`Booking request for ${artist}: `);
    }
  }, [searchParams]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically handle the form submission
    alert("Booking request submitted! We'll contact you to confirm your appointment.");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <section id="booking" className="w-full py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-center text-4xl font-bold text-primary">Book Your Appointment</h2>

        <div className="mx-auto max-w-3xl rounded-lg bg-neutral p-8 shadow-lg">
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-secondary">How to Book</h3>
            <ol className="list-inside list-decimal space-y-2 text-primary">
              <li>Choose your preferred date</li>
              <li>Fill out the booking form with your details and tattoo idea</li>
              <li>Upload a reference picture if you have one</li>
              <li>Submit your request, and we&apos;ll contact you to confirm your appointment</li>
            </ol>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-secondary">
                Name
              </Label>
              <Input
                id="name"
                required
                className="border-secondary focus:border-primary rounded-none"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-secondary">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                className="border-secondary focus:border-primary rounded-none"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-secondary">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                className="border-secondary focus:border-primary rounded-none"
              />
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="flex-1">
                <Label className="text-secondary">Preferred Date</Label>
                <Calendar
                  classNames={{
                    cell: 'rounded-md',
                    months:
                      'flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1',
                    month: 'space-y-4 w-full flex flex-col',
                    table: 'w-full h-full border-collapse space-y-1',
                    head_row: '',
                    row: 'w-full mt-2',
                  }}
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="mt-2 flex items-center justify-center"
                />
              </div>

              <div className="flex-1">
                <Label htmlFor="tattoo-idea" className="text-secondary">
                  Tattoo Idea
                </Label>
                <Textarea
                  id="tattoo-idea"
                  value={tattooIdea}
                  onChange={(e) => setTattooIdea(e.target.value)}
                  required
                  className="mt-2 border-secondary focus:border-primary sm:h-[287.2px] sm:resize-none rounded-none"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="reference-picture" className="text-secondary">
                Reference Picture
              </Label>
              <div className="mt-2 flex items-center">
                <Input
                  id="reference-picture"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('reference-picture')?.click()}
                  className="w-full sm:w-auto rounded-none px-8 font-normal text-foreground border border-foreground"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Image
                </Button>
                {file && <span className="text-sm text-primary">{file.name}</span>}
              </div>
            </div>

            <Button type="submit" className="w-full hover:bg-secondary rounded-none">
              Request Booking
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              className="w-full mt-4 hover:bg-secondary rounded-none"
            >
              <WhatsappIcon className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </form>

          <div className="mt-8 p-4 border border-secondary">
            <h3 className="mb-2 text-xl font-semibold text-primary">Booking Policies</h3>
            <ul className="list-inside list-disc space-y-2 text-primary">
              <li>A €50 deposit is required to secure your booking</li>
              <li>
                Deposits are non-refundable but can be transferred to a new date with 48 hours
                notice
              </li>
              <li>Full cancellations must be made at least 48 hours in advance</li>
              <li>Late arrivals may result in shortened tattoo time or rebooking</li>
            </ul>
          </div>

          <div className="mt-4 flex items-start space-x-2 text-secondary">
            <AlertCircle className="mt-0.5 h-5 w-5" />
            <p className="text-sm">
              Please note that submission of this form does not guarantee an appointment. We will
              contact you to confirm availability and discuss your tattoo idea in detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AppointmentBooking() {
  return (
    <Suspense fallback={<Loader />}>
      <BookingForm />
    </Suspense>
  );
}
