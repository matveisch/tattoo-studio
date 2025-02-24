import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { StructuredData } from '@/components/structured-data';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    default: 'La Rosel Tattoo Atelier | Erstklassige Tätowierkunst',
    template: '%s | La Rosel Tattoo Atelier',
  },
  description:
    'Premium Tattoo Studio mit erstklassiger Handwerkskunst und einer großen Auswahl an Stilen. Buchen Sie noch heute Ihre Beratung.',
  keywords: ['tätowierung', 'tattoo studio', 'körperkunst', 'tinte', 'tätowierer'],
  authors: [{ name: 'La Rosel Tattoo Atelier' }],
  creator: 'La Rosel Tattoo Atelier',
  publisher: 'La Rosel Tattoo Atelier',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.laroselatelier.de'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
