'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import AnimatedContent from '@/app/components/AnimatedContent';

export default function LemiGhariokwuClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if screen is mobile
    const checkIfMobile = () => {
      const width = window.innerWidth;
      const mobileBreakpoint = 768;
      setIsMobile(width <= mobileBreakpoint);
    };

    // Check on initial load
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Function to get the appropriate video source
  const getVideoSource = () => {
    const basePath = '/videos/';
    if (isMobile) {
      return basePath + 'mobLemiGhariokwu.mp4'; // Mobile version
    }
    return basePath + 'Lemi Ghariokwu pc.mp4'; // Desktop version
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col py-6 px-6 xl:px-24">
        {/* Project Description */}
        <section className="pt-16">
          <div className="">
            <AnimatedContent delay={300}>
              <div className="text-left mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                  Lemi Ghariokwu in Ghana
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl font-fahkwang">
                  With Lemi Ghariokwu set to tour Ghana with WCE Hosts, Grafiki had a rare chance to brand an Afrikan design legend's event.
                </p>
              </div>
            </AnimatedContent>
          </div>
        </section>

        {/* Image 1 */}
        <section className="pb-2 font-fahkwang">
          <div className="">
            <AnimatedContent delay={400}>
              <div className="">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[3/2] overflow-hidden group">
                  <Image
                    src="/Lemi in ghana/1.png"
                    alt="Lemi Ghariokwu in Ghana - Event Branding Design"
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                    priority
                  />
                </div>
              </div>
            </AnimatedContent>
          </div>
        </section>

        {/* Experience Description Section */}
        <section className="py-6">
          <div className="">
            <AnimatedContent delay={400}>
              <div className="text-left mb-0">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-5xl font-fahkwang">
                  It was a defining experience for us to create for Lemi. The event visuals included animations, flyers, and design assets that accurately reflected the movement represented by his art.
                </p>
              </div>
            </AnimatedContent>
          </div>
        </section>

        {/* Hero Video Section */}
        <section className="xl:h-screen mt-1 relative overflow-hidden">
          <video
            src={'/Lemi in ghana/1 Video.mp4'}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Lemi Ghariokwu in Ghana - Event Visuals Video"
          />
        </section>

        {/* Message Section */}
        <section className="py-6">
          <div className="">
            <AnimatedContent delay={400}>
              <div className="text-left mb-0">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-5xl font-fahkwang">
                  We wanted every glance at the visuals to convey two clear messages: this is Lemi, and this is Ghana.
                </p>
              </div>
            </AnimatedContent>
          </div>
        </section>

        {/* Final Image */}
        <section className="pb-2 font-fahkwang">
          <div className="">
            <AnimatedContent delay={500}>
              <div className="space-y-6">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden group">
                  <Image
                    src="/Lemi in ghana/2.png"
                    alt="Lemi Ghariokwu in Ghana - Final Event Visuals"
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                  />
                </div>
              </div>
            </AnimatedContent>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <footer className="mt-auto bg-black backdrop-blur-md border-t max-h-[100px] border-gray-900">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
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
              <Image src={"/footX.png"} alt='X (Twitter) - Grafiki Studios' width={24} height={20}/>
            </a>
            <a href="https://www.instagram.com/grafiki_ng?igsh=c2Y5NGN2dm5uaDUx" target='_blank' rel='noopener noreferrer' className="text-white hover:text-yellow-400 transition-colors">
              <Image src={"/footIg.png"} alt='Instagram - Grafiki Studios' width={24} height={20}/>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-300 hidden md:block">
            2025 All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
