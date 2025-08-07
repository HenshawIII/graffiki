import { client } from '@/sanity/lib/client';
import { writeClient } from '@/sanity/lib/writeClient';
import { groq } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import markdownit from 'markdown-it';

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

const md = new markdownit();

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
  
  return client.fetch(query, { slug });
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

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  // Increment view count
  await incrementViews(post._id, post.views || 0);
  
  // Render markdown content
  const htmlContent = md.render(post.content || '');

  return (
    <div className="min-h-screen bg-black text-white pt-24 flex flex-col">
      <div className="flex-1 max-w-4xl mx-auto px-6 py-16">
        {/* Back to Blog Link */}
        {/* <Link 
          href="/blog" 
          className="inline-flex items-center text-[#F4C42E] hover:text-white transition-colors duration-300 mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link> */}

        {/* Article Header */}
        <article>

        {post.image && (
            <div className="relative h-96 md:h-[500px] mb-4  overflow-hidden">
              <Image
                src={post.image.asset.url}
                alt={post.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          )}

          <header className="mb-24">
            
            <div className="flex items-center font-fahkwang justify-between text-gray-400 mb-4">
              <div className="flex items-center space-x-4">
                <span className=" font-medium">{post.author}</span>
              </div>
              <p className="text-sm  leading-relaxed">
                {new Date(post._createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            

            <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold  leading-tight">
              {post.title}
            </h1>
            
          </header>

          {/* Featured Image */}
         

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content && (
              <div 
                dangerouslySetInnerHTML={{ __html: htmlContent }} 
                className="text-gray-300 leading-relaxed space-y-6 prose prose-invert prose-lg max-w-none"
              />
            )}
          </div>
        </article>

                 {/* Back to Blog Button */}
         {/* <div className="mt-16 pt-8 border-t border-gray-800"> */}
           {/* <Link 
             href="/blog" 
             className="inline-flex items-center px-6 py-3 bg-[#F4C42E] text-black font-fahkwang font-bold rounded-lg hover:bg-white transition-colors duration-300"
           >
             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
             </svg>
             Back to Blog
           </Link> */}
         {/* </div> */}

                   {/* Fixed View Counter */}
          <div className="fixed bottom-18 right-6 z-40">
            <div className="bg-black/80 backdrop-blur-md border border-gray-700 rounded-full px-4 py-2 flex items-center space-x-2 animate-ping-slow">
              <div className="w-2 h-2 bg-[#F4C42E] rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-fahkwang font-medium">
                {(post.views || 0) + 1} {(post.views || 0) + 1 === 1 ? 'view' : 'views'}
              </span>
            </div>
          </div>
        </div>
        <footer className="mt-auto bg-black backdrop-blur-md border-t max-h-[100px] border-gray-900">
        <div className="container mx-auto px-6 py-4 flex items-center  justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src="/Logowhite.png" alt="Logo" width={100} height={100} />
          </div>
          
          {/* Social Media Icons */}    
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
             <Image src="/footFb.png" alt="" width={24} height={20} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
              {/* <span className="text-xl">🐦</span> */}
              <Image src={"/footX.png"} alt='X' width={24} height={20}/>
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
              {/* <span className="text-xl">📷</span> */}
              <Image src={"/footIg.png"} alt='X' width={24} height={20}/>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-300 hidden md:block">
            2025 All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
