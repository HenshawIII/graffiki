import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedContent from '@/app/components/AnimatedContent';

export const metadata: Metadata = {
  title: 'Editorial',
  description: 'Read the latest insights from Grafiki Studios - A creative agency dedicated to honoring Afrikan artistry. Explore our thoughts on design, branding, and creative storytelling.',
  openGraph: {
    title: 'Editorial - Grafiki Studios Creative Agency',
    description: 'Read the latest insights from Grafiki Studios - A creative agency dedicated to honoring Afrikan artistry. Explore our thoughts on design, branding, and creative storytelling.',
    url: 'https://graffikistudios.com/editorial',
    images: [
      {
        url: '/Logowhite.png',
        width: 1200,
        height: 630,
        alt: 'Editorial - Grafiki Studios Creative Agency',
      },
    ],
  },
  twitter: {
    title: 'Editorial - Grafiki Studios Creative Agency',
    description: 'Read the latest insights from Grafiki Studios - A creative agency dedicated to honoring Afrikan artistry. Explore our thoughts on design, branding, and creative storytelling.',
    images: ['/Logowhite.png'],
  },
  alternates: {
    canonical: '/editorial',
  },
};

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
  views?: number;
}

// Fetch posts from Sanity
async function getPosts(): Promise<Post[]> {
  const query = groq`
    *[_type == "post"] | order(_createdAt desc) {
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
      views
    }
  `;
  
  return client.fetch(query);
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-black text-white pt-24 flex flex-col">
      {/* Header Section */}
      <div className="flex-1 max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <AnimatedContent delay={100}>
          <h1 className="text-3xl md:text-5xl  font-bold mb-6">
            The latest from our world and beyond.
          </h1>
          </AnimatedContent>
          <AnimatedContent delay={200}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-fahkwang">
            Read, watch and go deeper on what's happening with us and our work.
            </p>
          </AnimatedContent>
        </div>

        <hr className="border-gray-700 my-16" />

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post._id} className="group">
                <Link href={`/editorial/${post.slug.current}`}>
                  <div className="  overflow-hidden transition-all duration-500 ">
                    {/* Post Image */}
                    {post.image && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image.asset.url}
                          alt={`${post.title} - Blog post by Grafiki Studios`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    
                    {/* Post Content */}
                    <div className="py-6">
                      <div className="flex items-center justify-between mb-3">
                        
                        <span className="text-sm text-gray-500 font-fahkwang font-medium">
                          {post.category}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-bold mb-3 group-hover:text-[#F4C42E] transition-colors duration-300 flex-1">
                          {post.title}
                        </h2>
                      
                      {/* {post.description && (
                        <p className="text-gray-100 font-fahkwang mb-4 line-clamp-3">
                          {post.description}
                        </p>
                      )} */}
                      
                      <div className="flex items-center font-fahkwang justify-between text-sm text-gray-500">
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-fahkwang font-bold mb-4">No posts yet</h3>
            <p className="text-gray-400">Check back soon for our latest updates.</p>
          </div>
        )}
      </div>
      <footer className="mt-auto bg-black backdrop-blur-md border-t max-h-[100px] border-gray-900">
        <div className="container mx-auto px-6 py-4 flex items-center  justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src="/Logowhite.png" alt="Grafiki Studios Logo" width={100} height={100} />
          </div>
          
          {/* Social Media Icons */}    
          <div className="flex items-center space-x-6">
               <a href="https://www.linkedin.com/company/grafikidesignng" target='_blank' rel='noopener noreferrer' className="text-white hover:text-yellow-400 transition-colors pb-1">
             <Image src="/link1.png" alt="LinkedIn - Grafiki Studios" width={24} height={24} />
            </a>
            <a href="https://x.com/grafiki_ng" target='_blank' rel='noopener noreferrer' className="text-white hover:text-yellow-400 transition-colors">
              {/* <span className="text-xl">🐦</span> */}
              <Image src={"/footX.png"} alt='X (Twitter) - Grafiki Studios' width={24} height={20}/>
            </a>
            <a href="https://www.instagram.com/grafiki_ng?igsh=c2Y5NGN2dm5uaDUx" target='_blank' rel='noopener noreferrer' className="text-white hover:text-yellow-400 transition-colors">
              {/* <span className="text-xl">📷</span> */}
              <Image src={"/footIg.png"} alt='Instagram - Grafiki Studios' width={24} height={20}/>
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
