import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Grafiki Studios - A creative agency dedicated to honoring Afrikan artistry through thoughtful design, branding, and storytelling. Explore our portfolio and discover how we create stories and visuals that inspire reflection.',
  openGraph: {
    title: 'Grafiki Studios - Creative Agency | Brand Strategy & Design',
    description: 'Welcome to Grafiki Studios - A creative agency dedicated to honoring Afrikan artistry through thoughtful design, branding, and storytelling.',
    url: 'https://grafiki.com.ng',
    images: [
      {
        url: '/Logowhite.png',
        width: 1200,
        height: 630,
        alt: 'Grafiki Studios - Creative Agency',
      },
    ],
  },
  twitter: {
    title: 'Grafiki Studios - Creative Agency | Brand Strategy & Design',
    description: 'Welcome to Grafiki Studios - A creative agency dedicated to honoring Afrikan artistry through thoughtful design, branding, and storytelling.',
    images: ['/Logowhite.png'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <HomeClient />;
}
