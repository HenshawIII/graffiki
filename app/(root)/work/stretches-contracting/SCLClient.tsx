'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import AnimatedContent from '@/app/components/AnimatedContent';

export default function SCLClient() {
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
      return basePath + 'mobScl.mp4'; // Mobile version
    }
    return basePath + 'SCL.mp4'; // Desktop version
  };

  return (
    <>
    <div className="min-h-screen bg-black text-white  flex flex-col py-6 px-6 xl:px-24">
      {/* Hero Video Section */}
      <section className="  xl:h-screen mt-24 relative overflow-hidden">
        <video
          src={'/videos/SCL.mp4'}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          aria-label="SCL Stretches Contracting Limited - Brand Identity Video"
        />
        
      </section>

      {/* Project Description */}
      <section className="pt-16  ">
        <div className="">
          <AnimatedContent delay={300}>
            <div className="text-left mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
               Stretches Contracting Limited
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl font-fahkwang">
                Stretches Contracting Limited (SCL), a custom-build construction company, approached us about creating a brand identity that reflected the most important aspect of their craft: attention to detail. We responded with a logo that embodies deliberate thought.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/*Video Section*/}
      <section className="pb-2 ">
        <div className=" flex justify-end">
          <AnimatedContent delay={300}>
            <div className=" mb-16">
              <video
                src="/SCL/1 video.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Concept Section */}
      <section className="pb-2 ">
        <div className="">
          <AnimatedContent delay={400}>
            <div className="text-left mb-16">
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-5xl font-fahkwang">
                SCL's new identity is based on the idea of a "stretched house", a visual metaphor for pushing the limits of design, innovation, and quality craftsmanship.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-2 font-fahkwang">
        <div className="">
          
            <div className="space-y-6">
              
              
              {/* Image 2 */}
              <AnimatedContent delay={500}>
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]  overflow-hidden group">
                <Image
                  src="/SCL/2.png"
                  alt="SCL Brand Identity - Application"
                  fill
                  className="object-cover transition-transform duration-500 "
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                />
              </div>
              </AnimatedContent>
              {/* Image 3 */}
              <AnimatedContent delay={500}>
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]  overflow-hidden group">
                <Image
                  src="/SCL/3.png"
                  alt="SCL Brand Identity - Stationery"
                  fill
                  className="object-cover transition-transform duration-500 "
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                />
              </div>
              </AnimatedContent>
              {/* Image 4 */}
              <AnimatedContent delay={500}>
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]  overflow-hidden group">
                <Image
                  src="/SCL/4.png"
                  alt="SCL Brand Identity - Digital Application"
                  fill
                  className="object-cover transition-transform duration-500 "
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                />
              </div>
              </AnimatedContent>
              {/* Image 5 */}
              <AnimatedContent delay={600}>
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]  overflow-hidden group">
                <Image
                  src="/SCL/5.png"
                  alt="SCL Brand Identity - Brand Guidelines"
                  fill
                  className="object-cover transition-transform duration-500 "
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                />
              </div>
              </AnimatedContent>
              {/* Image 6 */}
              <AnimatedContent delay={600}>
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]  overflow-hidden group">
                <Image
                  src="/SCL/6.png"
                  alt="SCL Brand Identity - Final Applications"
                  fill
                  className="object-cover transition-transform duration-500 "
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                />
              </div>
              </AnimatedContent>
            </div>
         
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 font-fahkwang">
        <div className="">
          <AnimatedContent delay={600}>
            <div className="text-left">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-5xl font-fahkwang">
                With a brand system that struck a balance between precision and refinement, our goal was to present SCL as an exemplar of accessible luxury. Our collaboration with SCL serves as a reminder of our commitment to listening carefully to each client's story and transforming their ideas into visually compelling content.
              </p>
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
