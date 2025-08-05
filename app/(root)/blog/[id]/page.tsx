import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
}

// Fetch a single post by slug
async function getPost(slug: string): Promise<Post | null> {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
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
  
  return client.fetch(query, { slug });
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

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back to Blog Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-[#F4C42E] hover:text-white transition-colors duration-300 mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-12">
            {/* Category and Views */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#F4C42E] font-medium">
                {post.category}
              </span>
              {post.views && (
                <span className="text-gray-400 text-sm">
                  {post.views} views
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-fahkwang font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            {post.description && (
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                {post.description}
              </p>
            )}

            {/* Post Meta */}
            <div className="flex items-center justify-between text-gray-400 mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-[#F4C42E] font-medium">{post.author}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="relative h-96 md:h-[500px] mb-12 rounded-lg overflow-hidden">
              <Image
                src={post.image.asset.url}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content && (
              <div className="text-gray-300 leading-relaxed space-y-6">
                {post.content.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </article>

        {/* Back to Blog Button */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-[#F4C42E] text-black font-fahkwang font-bold rounded-lg hover:bg-white transition-colors duration-300"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
