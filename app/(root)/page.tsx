'use client'
import { useState, useEffect,useRef } from 'react';
import Image from 'next/image';

// List of available video filenames (add new filenames here to add new videos)
const VIDEO_FILES = [
  'SCL.mp4',
  'solo.mp4',
  'video3.mp4',
  'video4.mp4',
];

// Generate URLs from filenames
const VIDEO_URLS = VIDEO_FILES.map(name => `/videos/${name}`);

// Example links for each video (customize as needed)
const VIDEO_LINKS = [
  { href: '#work', label: 'SCL' },
  { href: '#about', label: 'SoloVerde' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Home() {
  const sectionRefs = useRef<any>(null);

  return (
    <div className="w-full overflow-y-auto bg-black flex flex-col gap-0">
      {VIDEO_URLS.map((src, idx) => (
        <div key={src} className="relative w-full scroll-smooth h-screen overflow-hidden">
          <video
            src={src}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <a
            href={VIDEO_LINKS[idx]?.href || '#'}
            className="absolute text-xl bottom-6 right-6 bg-transparent text-white px-6 py-3  font-bold hover:text-black hover:bg-yellow-500 transition-colors duration-300"
            target={VIDEO_LINKS[idx]?.href?.startsWith('http') ? '_blank' : undefined}
            rel={VIDEO_LINKS[idx]?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {VIDEO_LINKS[idx]?.label || 'View Details'}
          </a>
        </div>
      ))}
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
