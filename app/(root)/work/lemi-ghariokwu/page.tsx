import { Metadata } from 'next';
import LemiGhariokwuClient from './LemiGhariokwuClient';

export const metadata: Metadata = {
  title: 'Lemi Ghariokwu in Ghana - Afrikan Design Legend Event Branding',
  description: 'Lemi Ghariokwu in Ghana - Grafiki had a rare chance to brand an Afrikan design legend\'s event. Creating animations, flyers, and design assets that accurately reflected the movement represented by his art.',
  openGraph: {
    title: 'Lemi Ghariokwu in Ghana - Afrikan Design Legend Event Branding | Grafiki Studios',
    description: 'Lemi Ghariokwu in Ghana - Grafiki had a rare chance to brand an Afrikan design legend\'s event. Creating animations, flyers, and design assets that accurately reflected the movement represented by his art.',
    url: 'https://grafiki.com.ng/work/lemi-ghariokwu',
    images: [
      {
        url: '/Lemi in ghana/1.png',
        width: 1200,
        height: 630,
        alt: 'Lemi Ghariokwu in Ghana - Event Branding Design',
      },
    ],
  },
  twitter: {
    title: 'Lemi Ghariokwu in Ghana - Afrikan Design Legend Event Branding | Grafiki Studios',
    description: 'Lemi Ghariokwu in Ghana - Branding an Afrikan design legend\'s event with WCE Hosts.',
    images: ['/Lemi in ghana/1.png'],
  },
  alternates: {
    canonical: '/work/lemi-ghariokwu',
  },
};

export default function LemiGhariokwuPage() {
  return <LemiGhariokwuClient />;
}
