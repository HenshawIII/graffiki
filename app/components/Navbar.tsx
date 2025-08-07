'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  const navLinks = [
    { href: '/work', label: 'Our Work' },
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Editorial' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex fixed top-0 left-0 w-full z-50 bg-black text-white px-6 py-4 items-center justify-between transition-colors duration-500">
        {/* Logo/Icon on the left */}
        <div className="flex items-center">
          <Link href="/">
          <Image
            src="/Logowhite.png"
            alt="Logo"
            width={150}
            height={150}
            className="mr-2"
          /></Link>
          {/* <span className="text-xl font-bold">Graffiki Studios</span> */}
        </div>

        {/* Navigation links on the right */}
        <div className="flex w-[50%] justify-around gap-6  text-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-[#F4C42E] duration-500 ${
                isActive(link.href) 
                  ? 'text-[#F4C42E]' 
                  : 'text-gray-50 hover:text-[#F4C42E]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed top-0 left-0 w-full z-50 bg-black text-white px-4 py-3 flex items-center justify-between transition-colors duration-500">
        {/* Logo/Icon */}
        <div className="flex items-center">
          <Link href="/">
          <Image
            src="/Logowhite.png"
            alt="Logo"
            width={150}
            height={150}
            className="mr-2"
          /></Link>
          {/* <span className="text-lg font-bold">Graffiki Studios</span> */}
        </div>

        {/* Hamburger menu button */}
        <button
          onClick={toggleSidebar}
          className="text-gray-500 font-light focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Sidebar - Full screen overlay */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black">
          <div className="flex items-center absolute top-4 left-4">
            <Link href="/">
            <Image
              src="/Logowhite.png"
              alt="Logo"
              width={150}
              height={150}
              className="mr-2"
            /></Link>
            {/* <span className="text-lg font-bold">Graffiki Studios</span> */}
          </div>
          {/* Close button positioned at top right */}

          <div className="absolute top-4 right-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 font-light focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation links positioned at bottom left */}
          <div className="absolute bottom-8 left-8">
            <div className="space-y-6">
              <Link href={"/"} className={`block text-3xl md:text-3xl font-light transition-all duration-500 animate-slide-in ${
                isActive('/') 
                  ? 'text-[#F4C42E] font-semibold' 
                  : 'text-gray-300 hover:text-white font-bold hover:font-semibold'
              }`}
                  onClick={toggleSidebar}
                >Home</Link>
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block text-3xl md:text-3xl font-light transition-all duration-500 animate-slide-in ${
                    isActive(link.href) 
                      ? 'text-[#F4C42E] ' 
                      : 'text-gray-300 hover:text-white font-bold hover:font-semibold'
                  }`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: 'both'
                  }}
                  onClick={toggleSidebar}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar; 