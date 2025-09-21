import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Grafiki Studios - A creative agency dedicated to honoring Afrikan artistry. Contact us for brand strategy, visual identity, web design, and creative services.',
  openGraph: {
    title: 'Contact Grafiki Studios - Creative Agency',
    description: 'Get in touch with Grafiki Studios - A creative agency dedicated to honoring Afrikan artistry. Contact us for brand strategy, visual identity, web design, and creative services.',
    url: 'https://grafiki.com.ng/contact',
    images: [
      {
        url: '/Logowhite.png',
        width: 1200,
        height: 630,
        alt: 'Contact Grafiki Studios - Creative Agency',
      },
    ],
  },
  twitter: {
    title: 'Contact Grafiki Studios - Creative Agency',
    description: 'Get in touch with Grafiki Studios - A creative agency dedicated to honoring Afrikan artistry. Contact us for brand strategy, visual identity, web design, and creative services.',
    images: ['/Logowhite.png'],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}