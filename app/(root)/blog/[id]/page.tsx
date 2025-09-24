import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { writeClient } from '@/sanity/lib/writeClient';
import { groq } from 'next-sanity';
import { notFound } from 'next/navigation';
import BlogContent from './BlogContent';

// Define the Post type based on actual schema
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  description?: string;
  category: string;
  image: {
    asset: {
      url: string;
    };
  };
  content?: string;
  views?: number;
  _createdAt: string;
}


// Fetch a single post by slug
async function getPost(slug: string): Promise<Post | null> {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      slug,
      author,
      description,
      category,
      image {
        asset-> {
          url
        }
      },
      content,
      views
    }
  `;
  
  return client.fetch(query, { 
    slug,
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
}

// Increment view count for a post
async function incrementViews(postId: string, currentViews: number = 0) {
  try {
    await writeClient
      .patch(postId)
      .set({ views: currentViews + 1 })
      .commit();
  } catch (error) {
    console.error('Failed to increment view count:', error);
  }
}

// Fetch all post slugs for static generation
export async function generateStaticParams() {
  const query = groq`
    *[_type == "post"] {
      slug
    }
  `;
  
  const posts = await client.fetch(query);
  
  return posts.map((post: { slug: { current: string } }) => ({
    id: post.slug.current,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.description || `Read ${post.title} on Grafiki Studios blog - A creative agency dedicated to honoring Afrikan artistry.`,
    openGraph: {
      title: post.title,
      description: post.description || `Read ${post.title} on Grafiki Studios blog.`,
      url: `https://grafiki.com.ng/blog/${id}`,
      type: 'article',
      publishedTime: post._createdAt,
      authors: [post.author],
      images: post.image ? [
        {
          url: post.image.asset.url,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : ['/grafLogo.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || `Read ${post.title} on Grafiki Studios blog.`,
      images: post.image ? [post.image.asset.url] : ['/grafLogo.png'],
    },
    alternates: {
      canonical: `/blog/${id}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  // Increment view count
  await incrementViews(post._id, post.views || 0);

  return <BlogContent post={post} />;
}
