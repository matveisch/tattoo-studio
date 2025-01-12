'use client';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/#artists', label: 'Künstler', isButton: false },
    { href: '/#portfolio', label: 'Portfolio', isButton: false },
    { href: '/#client-care', label: 'Kundenbetreuung', isButton: false },
    { href: '/#about', label: 'Über Uns', isButton: false },
    { href: '/#contact', label: 'Kontakt', isButton: false },
    { href: '/booking', label: 'Jetzt Buchen', isButton: true },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold text-foreground">
            La Rosel Tattoo Atelier
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item.href} className="flex items-center">
                  {item.isButton ? (
                    <Button asChild variant="outline" size="sm" className="border-secondary">
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-foreground/80"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-background md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col bg-background h-screen">
          <div className="flex justify-between items-center px-4 h-16">
            <Link href="/" className="text-xl font-semibold text-foreground" onClick={toggleMenu}>
              La Rosel Tattoo Atelier
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menü schließen">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex-grow flex items-start justify-center bg-background">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.href} className="text-center">
                  {item.isButton ? (
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full border-secondary"
                      onClick={toggleMenu}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-foreground/80 text-2xl"
                      onClick={(e) => {
                        handleNavClick(e, item.href);
                        toggleMenu();
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
