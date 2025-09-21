import type { Metadata } from "next";
import "./globals.css";

import { riamo, fahkwang } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "Grafiki Studios - Creative Agency | Brand Strategy & Design",
    template: "%s | Grafiki Studios"
  },
  description: "Grafiki Studios is a creative agency dedicated to honoring Afrikan artistry through thoughtful design, branding, and storytelling. We create stories and visuals that inspire you to stop and reflect.",
  keywords: [
    "creative agency",
    "brand strategy",
    "visual identity",
    "design studio",
    "Afrikan artistry",
    "branding",
    "graphic design",
    "web design",
    "social media",
    "content creation",
    "art direction",
    "production"
  ],
  authors: [{ name: "Grafiki Studios" }],
  creator: "Grafiki Studios",
  publisher: "Grafiki Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://grafiki.com.ng'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://grafiki.com.ng',
    title: 'Grafiki Studios - Creative Agency | Brand Strategy & Design',
    description: 'Grafiki Studios is a creative agency dedicated to honoring Afrikan artistry through thoughtful design, branding, and storytelling.',
    siteName: 'Grafiki Studios',
    images: [
      {
        url: '/Logowhite.png',
        width: 1200,
        height: 630,
        alt: 'Grafiki Studios Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grafiki Studios - Creative Agency | Brand Strategy & Design',
    description: 'Grafiki Studios is a creative agency dedicated to honoring Afrikan artistry through thoughtful design, branding, and storytelling.',
    images: ['/Logowhite.png'],
    creator: '@grafiki_ng',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Grafiki Studios",
    "description": "A creative agency dedicated to honoring Afrikan artistry through thoughtful design, branding, and storytelling.",
    "url": "https://grafiki.com.ng",
    "logo": "https://grafiki.com.ng/Logowhite.png",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-916-108-4705",
      "contactType": "customer service",
      "email": "grafikidesign.ng@gmail.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/grafikidesignng",
      "https://x.com/grafiki_ng",
      "https://www.instagram.com/grafiki_ng"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 6.5244,
        "longitude": 3.3792
      },
      "geoRadius": "1000000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Creative Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Strategy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Visual Identity"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web & Digital Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content & Editorial"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Art Direction & Curation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Production"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/grafLogo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${riamo.variable} ${fahkwang.variable} antialiased`}
      >
         
            {children}
      </body>
    </html>
  );
}
