import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://grafiki.com.ng'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/editorial`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Fetch blog posts
  const blogQuery = groq`
    *[_type == "post"] | order(_createdAt desc) {
      slug,
      _updatedAt
    }
  `
  
  const blogPosts = await client.fetch(blogQuery)
  const blogPages = blogPosts.map((post: { slug: { current: string }, _updatedAt: string }) => ({
    url: `${baseUrl}/editorial/${post.slug.current}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Fetch work items
  const workQuery = groq`
    *[_type == "work"] | order(_createdAt desc) {
      slug,
      _updatedAt
    }
  `
  
  const workItems = await client.fetch(workQuery)
  const workPages = workItems.map((work: { slug: { current: string }, _updatedAt: string }) => ({
    url: `${baseUrl}/work/${work.slug.current}`,
    lastModified: new Date(work._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages, ...workPages]
}
