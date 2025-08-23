'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// List of available video filenames with mobile and desktop versions
const VIDEO_FILES = [
  {
    mobile: 'grafMob.mp4',
    desktop: 'grafDesk.mp4',
    fallback: 'SCL.mp4' // fallback if mobile version doesn't exist
  },
  {
    mobile: 'soloMob.mp4',
    desktop: 'soloDesk.mp4',
    fallback: 'solo.mp4'
  },
  {
    mobile: 'video3.mp4', // Using existing video3 as mobile version
    desktop: 'video3.mp4',
    fallback: 'video3.mp4'
  },
  {
    mobile: 'SCL.mp4', // Using existing video4 as mobile version
    desktop: 'SCL.mp4',
    fallback: 'SCL.mp4'
  },
];

// Example links for each video (customize as needed)
const VIDEO_LINKS = [
  { href: '#work', label: 'SCL' },
  { href: '#about', label: 'SoloVerde' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Home() {
  const sectionRefs = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if screen is mobile
    const checkIfMobile = () => {
      const width = window.innerWidth;
      // Use a more standard mobile breakpoint
      const mobileBreakpoint = 768;
      setIsMobile(width <= mobileBreakpoint);
      
      // Debug logging (remove in production)
      console.log(`Screen width: ${width}px, isMobile: ${width <= mobileBreakpoint}`);
    };

    // Check on initial load
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Function to get the appropriate video source
  const getVideoSource = (videoConfig: typeof VIDEO_FILES[0]) => {
    const basePath = '/videos/';
    if (isMobile) {
      // Try mobile version first, fallback to desktop if mobile doesn't exist
      return basePath + (videoConfig.mobile || videoConfig.fallback);
    }
    return basePath + (videoConfig.desktop || videoConfig.fallback);
  };

  return (
    <div className="w-full overflow-y-auto bg-black flex flex-col gap-0">
      {VIDEO_FILES.map((videoConfig, idx) => (
        <div key={videoConfig.desktop} className="relative w-full scroll-smooth h-screen overflow-hidden">
          <video
            src={getVideoSource(videoConfig)}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          
          {/* Debug indicator - shows which video version is being used */}
          {/* <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 text-xs rounded">
            {isMobile ? 'Mobile' : 'Desktop'} Video
          </div> */}
          
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
