import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import markdownit from 'markdown-it';

// Define the Work type based on actual schema
interface Work {
  _id: string;
  title: string;
  slug: { current: string };
  image: {
    asset: {
      url: string;
    };
  };
  content?: string;
  _createdAt: string;
}

const md = new markdownit();

// Fetch a single work by slug
async function getWork(slug: string): Promise<Work | null> {
  const query = groq`
    *[_type == "work" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      slug,
      image {
        asset-> {
          url
        }
      },
      content
    }
  `;
  
  return client.fetch(query, { slug });
}

// Fetch all work slugs for static generation
export async function generateStaticParams() {
  const query = groq`
    *[_type == "work"] {
      slug
    }
  `;
  
  const works = await client.fetch(query);
  
  return works.map((work: { slug: { current: string } }) => ({
    id: work.slug.current,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { id } = await params;
  const work = await getWork(id);

  if (!work) {
    notFound();
  }
  
  // Render markdown content
  const htmlContent = md.render(work.content || '');

  return (
    <div className="min-h-screen bg-black text-white pt-24 flex flex-col">
      <div className="flex-1 max-w-4xl mx-auto px-6 py-16">
        {/* Article Header */}
        <article>
          {work.image && (
            <div className="relative h-96 md:h-[500px] mb-4 overflow-hidden">
              <Image
                src={work.image.asset.url}
                alt={work.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          )}

          <header className="mb-24">
            <div className="flex items-center font-fahkwang justify-between text-gray-400 mb-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Project</span>
              </div>
              <p className="text-sm leading-relaxed">
                {new Date(work._createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold leading-tight">
              {work.title}
            </h1>
          </header>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            {work.content && (
              <div 
                dangerouslySetInnerHTML={{ __html: htmlContent }} 
                className="text-gray-300 font-fahkwang leading-relaxed space-y-6 prose prose-invert prose-lg max-w-none"
              />
            )}
          </div>
        </article>
      </div>
      <footer className="mt-auto bg-black backdrop-blur-md border-t max-h-[100px] border-gray-900">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
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
              <Image src={"/footX.png"} alt='X' width={24} height={20}/>
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
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
