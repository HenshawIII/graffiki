import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://grafiki.com.ng'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/studio/',
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: [
          '/studio/',
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: [
          '/studio/',
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: [
          '/studio/',
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: [
          '/studio/',
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
