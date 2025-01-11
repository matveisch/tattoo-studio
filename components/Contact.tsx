'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formular gesendet:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="py-16 bg-background w-full" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Kontakt</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Unsere Adresse</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.761816214505!2d9.1682918!3d48.786437299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db0f1010a559%3A0x64fd8bde7f41ef7f!2sLa%20Rosel%20Tattoo%20Atelier!5e0!3m2!1sde!2sde!4v1736589215426!5m2!1sde!2sde"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Öffnungszeiten</h3>
              <ul className="space-y-2">
                <li>Montag - Freitag: 10:00 - 20:00 Uhr</li>
                <li>Samstag: 11:00 - 18:00 Uhr</li>
                <li>Sonntag: Geschlossen</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Schreib uns eine Nachricht</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="rounded-none border-secondary"
                  placeholder="Dein Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail
                </label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-none border-secondary"
                  placeholder="deine@email.de"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Nachricht
                </label>
                <Textarea
                  id="message"
                  className="rounded-none border-secondary"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Deine Nachricht hier..."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full rounded-none">
                Nachricht Senden
              </Button>
              <Button className="w-full rounded-none border-secondary" asChild variant="outline">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>{' '}
                  Bei WhatsApp chatten
                </a>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
