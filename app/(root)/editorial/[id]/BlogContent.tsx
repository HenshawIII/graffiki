'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import markdownit from 'markdown-it';
import ThemeToggle from './ThemeToggle';

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

interface BlogContentProps {
  post: Post;
}

export default function BlogContent({ post }: BlogContentProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Render markdown content
  const htmlContent = md.render(post.content || '');

  return (
    <div className={`min-h-screen pt-24 flex flex-col transition-colors duration-300 ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      {/* Theme Toggle Icon */}
      <ThemeToggle 
        isDarkMode={isDarkMode} 
        onToggle={setIsDarkMode} 
      />

      <div className="flex-1 max-w-4xl mx-auto px-6 py-16">
        {/* Article Header */}
        <article>
          {post.image && (
            <div className="relative h-96 md:h-[500px] mb-4 overflow-hidden">
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
            <div className={`flex flex-col-reverse md:flex-row items-start md:items-center font-fahkwang justify-between mb-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-800'
            }`}>
              <div className="flex items-center space-x-4">
                <span className=" font-medium">{post.author}</span>
              </div>
              <p className="text-sm leading-relaxed">
                {new Date(post._createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Article Body */}
          <div className={`prose prose-lg max-w-none ${
            isDarkMode ? 'prose-invert' : ''
          }`}>
            {post.content && (
              <div 
                dangerouslySetInnerHTML={{ __html: htmlContent }} 
                className={`font-fahkwang leading-relaxed space-y-6 prose prose-lg max-w-none ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-800'
                }`}
              />
            )}
          </div>
        </article>

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
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src="/Logowhite.png" alt="Logo" width={100} height={100} />
          </div>
          
          {/* Social Media Icons */}    
          <div className="flex items-center space-x-6">
            <a href="https://www.linkedin.com/company/grafikidesignng" target='_blank' rel='noopener noreferrer' className="text-white hover:text-yellow-400 transition-colors pb-1">
              <Image src="/link1.png" alt="linkedin" width={24} height={24} />
            </a>
            <a href="https://x.com/grafiki_ng" target='_blank' rel='noopener noreferrer' className="text-white hover:text-yellow-400 transition-colors">
              <Image src={"/footX.png"} alt='X' width={24} height={20}/>
            </a>
            <a href="https://www.instagram.com/grafiki_ng?igsh=c2Y5NGN2dm5uaDUx" target='_blank' rel='noopener noreferrer' className="text-white hover:text-yellow-400 transition-colors">
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
