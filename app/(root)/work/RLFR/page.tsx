import { Metadata } from 'next';
import RLFRClient from './RLFRClient';

export const metadata: Metadata = {
  title: 'Redlight Fashion Room - EDM Fashion Rave Branding',
  description: 'Redlight Fashion Room - EDM fashion rave branding campaigns including collaborations with Ile Ijo and Raveyard featuring Lady Donli. Demonstrating commitment to telling stories over all pulses.',
  openGraph: {
    title: 'Redlight Fashion Room - EDM Fashion Rave Branding | Grafiki Studios',
    description: 'Redlight Fashion Room - EDM fashion rave branding campaigns including collaborations with Ile Ijo and Raveyard featuring Lady Donli. Demonstrating commitment to telling stories over all pulses.',
    url: 'https://grafiki.com.ng/work/RLFR',
    images: [
      {
        url: '/RLFR/1.png',
        width: 1200,
        height: 630,
        alt: 'Redlight Fashion Room - EDM Fashion Rave Branding',
      },
    ],
  },
  twitter: {
    title: 'Redlight Fashion Room - EDM Fashion Rave Branding | Grafiki Studios',
    description: 'Redlight Fashion Room - EDM fashion rave branding campaigns with Lady Donli collaboration.',
    images: ['/RLFR/1.png'],
  },
  alternates: {
    canonical: '/work/RLFR',
  },
};

export default function RLFRPage() {
  return <RLFRClient />;
}
