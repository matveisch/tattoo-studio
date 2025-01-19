import { Instagram } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background border-t border-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">La Rosel Tattoo Atelier</h3>
            <p className="text-sm text-muted-foreground">Zeitlose Tätowierkunst seit 2010.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/#artists" className="text-sm hover:underline">
                  Künstler
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-sm hover:underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#client-care" className="text-sm hover:underline">
                  Kundenbetreuung
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm hover:underline">
                  Über Uns
                </Link>
              </li>
              {/* <li>
                <Link href="/booking" className="text-sm hover:underline">
                  Jetzt Buchen
                </Link>
              </li> */}
              <li>
                <Link href="/agb" className="text-sm hover:underline">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>Seestraße 63</p>
              <p>70174 Stuttgart</p>
              <p>Telefon: 01520 7638402</p>
              <p>E-Mail: Laroseltattooatelier@gmail.com</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Folge Uns</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/laroseltattooatelier?igsh=aGU1czFtcW0zODQ1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="-mx-4 mt-8 pt-8 border-t border-secondary text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} La Rosel Tattoo Atelier. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
