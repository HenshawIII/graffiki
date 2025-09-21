import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Grafiki Studios - A creative agency dedicated to honoring Afrikan artistry through thoughtful design, branding, and storytelling. Discover our approach, culture, and services.',
  openGraph: {
    title: 'About Grafiki Studios - Creative Agency',
    description: 'Learn about Grafiki Studios - A creative agency dedicated to honoring Afrikan artistry through thoughtful design, branding, and storytelling.',
    url: 'https://grafiki.com.ng/about',
    images: [
      {
        url: '/Logowhite.png',
        width: 1200,
        height: 630,
        alt: 'About Grafiki Studios - Creative Agency',
      },
    ],
  },
  twitter: {
    title: 'About Grafiki Studios - Creative Agency',
    description: 'Learn about Grafiki Studios - A creative agency dedicated to honoring Afrikan artistry through thoughtful design, branding, and storytelling.',
    images: ['/Logowhite.png'],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
} 