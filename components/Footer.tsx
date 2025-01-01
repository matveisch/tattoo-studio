import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Tattoo Studio</h3>
            <p className="text-sm text-muted-foreground">
              Crafting timeless artistry in ink since 2010.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#artists" className="text-sm hover:underline">
                  Artists
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-sm hover:underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#client-care" className="text-sm hover:underline">
                  Client Care
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-sm hover:underline">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>123 Ink Street</p>
              <p>Tattoo City, TC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@tattoostudio.com</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tattoo Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
