import { Metadata } from 'next';
import AyoIbileClient from './AyoIbileClient';

export const metadata: Metadata = {
  title: 'Ayo Ibile - Cultural Photography Exhibition',
  description: 'Ayo Ibile - A cultural initiative celebrating the richness of Lagos carnival traditions through street photography exhibition. Bringing art to the community with earthy green visual identity.',
  openGraph: {
    title: 'Ayo Ibile - Cultural Photography Exhibition | Grafiki Studios',
    description: 'Ayo Ibile - A cultural initiative celebrating the richness of Lagos carnival traditions through street photography exhibition. Bringing art to the community with earthy green visual identity.',
    url: 'https://grafiki.com.ng/work/ayo-ibile',
    images: [
      {
        url: '/Ayo Ibile/1.png',
        width: 1200,
        height: 630,
        alt: 'Ayo Ibile - Cultural Photography Exhibition',
      },
    ],
  },
  twitter: {
    title: 'Ayo Ibile - Cultural Photography Exhibition | Grafiki Studios',
    description: 'Ayo Ibile - A cultural initiative celebrating Lagos carnival traditions through street photography exhibition.',
    images: ['/Ayo Ibile/1.png'],
  },
  alternates: {
    canonical: '/work/ayo-ibile',
  },
};

export default function AyoIbilePage() {
  return <AyoIbileClient />;
}
