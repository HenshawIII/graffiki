import { Metadata } from 'next';
import SoloverdeClient from './SoloverdeClient';

export const metadata: Metadata = {
  title: 'Soloverde Farm - Agricultural Brand Identity',
  description: 'Soloverde Farm - A youth-led agricultural farm in Ibadan rebranded with a visual identity that embodies resilience and growth. Paying homage to cassava roots while introducing innovation and sustainability.',
  openGraph: {
    title: 'Soloverde Farm - Agricultural Brand Identity | Grafiki Studios',
    description: 'Soloverde Farm - A youth-led agricultural farm in Ibadan rebranded with a visual identity that embodies resilience and growth. Paying homage to cassava roots while introducing innovation and sustainability.',
    url: 'https://grafiki.com.ng/work/soloverde',
    images: [
      {
        url: '/Solo verde/1.png',
        width: 1200,
        height: 630,
        alt: 'Soloverde Farm - Agricultural Brand Identity',
      },
    ],
  },
  twitter: {
    title: 'Soloverde Farm - Agricultural Brand Identity | Grafiki Studios',
    description: 'Soloverde Farm - A youth-led agricultural farm rebranded with resilience and growth-focused visual identity.',
    images: ['/Solo verde/1.png'],
  },
  alternates: {
    canonical: '/work/soloverde',
  },
};

export default function SoloverdePage() {
  return <SoloverdeClient />;
}
