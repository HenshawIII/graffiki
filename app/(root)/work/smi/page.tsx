import { Metadata } from 'next';
import SMIClient from './SMIClient';

export const metadata: Metadata = {
  title: 'SMI\'s World - Natural Hair Care Brand Identity',
  description: 'SMI\'s World - Breaking the visual identity jinx for SMEs. Creating accessible hair care branding specifically designed for Black women\'s natural hair with earthy color palettes and African beauty traditions.',
  openGraph: {
    title: 'SMI\'s World - Natural Hair Care Brand Identity | Grafiki Studios',
    description: 'SMI\'s World - Breaking the visual identity jinx for SMEs. Creating accessible hair care branding specifically designed for Black women\'s natural hair with earthy color palettes and African beauty traditions.',
    url: 'https://grafiki.com.ng/work/smi',
    images: [
      {
        url: '/Smi/1.png',
        width: 1200,
        height: 630,
        alt: 'SMI\'s World - Natural Hair Care Brand Identity',
      },
    ],
  },
  twitter: {
    title: 'SMI\'s World - Natural Hair Care Brand Identity | Grafiki Studios',
    description: 'SMI\'s World - Creating accessible hair care branding for Black women\'s natural hair.',
    images: ['/Smi/1.png'],
  },
  alternates: {
    canonical: '/work/smi',
  },
};

export default function SMIPage() {
  return <SMIClient />;
}
