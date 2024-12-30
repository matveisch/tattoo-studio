"use client"

import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/about', label: 'About', isButton: false },
    { href: '/services', label: 'Services', isButton: false },
    { href: '/gallery', label: 'Gallery', isButton: false },
    { href: '/contact', label: 'Contact', isButton: true }
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold text-foreground">
            Tattoo Studio
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item.href} className="flex items-center">
                  {item.isButton ? (
                    <Button asChild variant="outline" size="sm">
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ) : (
                    <Link href={item.href} className="text-foreground hover:text-foreground/80">
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
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-background md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col bg-background h-screen">
          <div className="flex justify-between items-center px-4 h-16">
            <Link href="/" className="text-xl font-semibold text-foreground" onClick={toggleMenu}>
              Tattoo Studio
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex-grow flex items-start justify-center bg-background">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.href} className="text-center">
                  {item.isButton ? (
                    <Button asChild variant="outline" size="lg" className="w-full" onClick={toggleMenu}>
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-foreground/80 text-2xl"
                      onClick={toggleMenu}
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
  )
}
