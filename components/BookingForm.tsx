'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle, Upload, PhoneIcon as WhatsappIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [file, setFile] = useState<File | null>(null);
  const [tattooIdea, setTattooIdea] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const artist = searchParams.get('artist');
    if (artist) {
      setTattooIdea(`Buchungsanfrage für ${artist}: `);
    }
  }, [searchParams]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(
      'Buchungsanfrage gesendet! Wir werden uns mit dir in Verbindung setzen, um deinen Termin zu bestätigen.'
    );
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <section id="booking" className="w-full py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-8 text-center text-4xl font-bold text-primary">
          Buche Deinen Tattoo-Termin
        </h1>

        <div className="mx-auto max-w-3xl rounded-lg bg-neutral p-8 shadow-lg">
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-secondary">So Buchst Du</h2>
            <ol className="list-inside list-decimal space-y-2 text-primary">
              <li>Wähle deinen Wunschtermin</li>
              <li>Fülle das Formular mit deinen Daten und deiner Tattoo-Idee aus</li>
              <li>Lade ein Referenzbild hoch, falls du eines hast</li>
              <li>Sende deine Anfrage ab, und wir melden uns bei dir zur Terminbestätigung</li>
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
                placeholder="Dein vollständiger Name"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-secondary">
                E-Mail
              </Label>
              <Input
                id="email"
                type="email"
                required
                className="border-secondary focus:border-primary rounded-none"
                placeholder="deine@email.de"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-secondary">
                Telefon
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                className="border-secondary focus:border-primary rounded-none"
                placeholder="+49"
              />
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="flex-1">
                <Label className="text-secondary">Wunschtermin</Label>
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
                  Tattoo-Idee
                </Label>
                <Textarea
                  id="tattoo-idea"
                  value={tattooIdea}
                  onChange={(e) => setTattooIdea(e.target.value)}
                  required
                  className="mt-2 border-secondary focus:border-primary sm:h-[287.2px] sm:resize-none rounded-none"
                  placeholder="Beschreibe deine Tattoo-Idee, Größe und gewünschte Platzierung..."
                />
              </div>
            </div>

            <div>
              <Label htmlFor="reference-picture" className="text-secondary">
                Referenzbild
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
                  Bild Hochladen
                </Button>
                {file && <span className="text-sm text-primary">{file.name}</span>}
              </div>
            </div>

            <Button type="submit" className="w-full hover:bg-secondary rounded-none">
              Buchung Anfragen
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              className="w-full mt-4 hover:bg-secondary rounded-none border-secondary"
            >
              <WhatsappIcon className="mr-2 h-4 w-4" />
              WhatsApp Chat
            </Button>
          </form>

          <div className="mt-8 p-4 border border-secondary">
            <h3 className="mb-2 text-xl font-semibold text-primary">Buchungsrichtlinien</h3>
            <ul className="list-inside list-disc space-y-2 text-primary">
              <li>
                Eine Anzahlung von 20% des geschätzten Gesamtpreises ist erforderlich, um Ihren
                Termin zu sichern. Diese Anzahlung wird mit dem Endpreis der Tätowierung verrechnet.
              </li>
              <li>
                Anzahlungen sind grundsätzlich nicht in bar erstattungsfähig. Bei Absage oder
                Verschiebung wird die Anzahlung als Gutschein ausgestellt, der innerhalb von 12
                Monaten eingelöst werden kann.
              </li>
              <li>
                Absagen oder Verschiebungen müssen mindestens 48 Stunden vor dem vereinbarten Termin
                erfolgen. Bei kurzfristigeren Änderungen kann die Anzahlung einbehalten werden.
              </li>
              <li>
                Tätowierungen werden ausschließlich an Personen ab 18 Jahren durchgeführt. Ein
                gültiger Altersnachweis ist erforderlich.
              </li>
              <li>
                Bitte informieren Sie uns vor Ihrem Termin über gesundheitliche Einschränkungen,
                Allergien oder Hautkrankheiten.
              </li>
              <li>
                Die Bezahlung erfolgt nach Abschluss der Tätowierung in bar oder per EC-Karte.
                Gutscheine können ebenfalls eingelöst werden.
              </li>
            </ul>
          </div>

          <div className="mt-4 flex items-start space-x-2 text-secondary">
            <AlertCircle className="mt-0.5 h-5 w-5" />
            <p className="text-sm">
              Bitte beachte, dass das Absenden dieses Formulars keinen garantierten Termin
              darstellt. Wir werden dich kontaktieren, um die Verfügbarkeit zu bestätigen und deine
              Tattoo-Idee im Detail zu besprechen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;
