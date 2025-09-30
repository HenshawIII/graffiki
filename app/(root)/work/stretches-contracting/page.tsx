import { Metadata } from 'next';
import SCLClient from './SCLClient';

export const metadata: Metadata = {
  title: 'SCL - Stretches Contracting Limited',
  description: 'SCL Stretches Contracting Limited - A custom-build construction company brand identity project. Creating a logo that embodies deliberate thought and attention to detail.',
  openGraph: {
    title: 'SCL - Stretches Contracting Limited | Grafiki Studios',
    description: 'SCL Stretches Contracting Limited - A custom-build construction company brand identity project. Creating a logo that embodies deliberate thought and attention to detail.',
    url: 'https://grafiki.com.ng/work/stretches-contracting',
    images: [
      {
        url: '/SCL/1.png',
        width: 1200,
        height: 630,
        alt: 'SCL - Stretches Contracting Limited Brand Identity',
      },
    ],
  },
  twitter: {
    title: 'SCL - Stretches Contracting Limited | Grafiki Studios',
    description: 'SCL Stretches Contracting Limited - A custom-build construction company brand identity project.',
    images: ['/SCL/1.png'],
  },
  alternates: {
    canonical: '/work/stretches-contracting',
  },
};

export default function SCLPage() {
  return <SCLClient />;
}
