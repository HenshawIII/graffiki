'use client'

import React, { useState, useEffect } from 'react'
import People from '../../components/people'
import Image from 'next/image'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

import AnimatedContent from '@/app/components/AnimatedContent'

const AboutClient = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Video configuration for about page
  const aboutVideo = {
    mobile: 'GrfMobne.mp4',
    desktop: 'grafDesk.mp4',
    fallback: 'grafDesk.mp4'
  };

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
      return basePath + (aboutVideo.mobile || aboutVideo.fallback);
    }
    return basePath + (aboutVideo.desktop || aboutVideo.fallback);
  };

  useGSAP(() => {
    gsap.set('.hero-text', {opacity: 0, y: 50,filter: 'blur(100px)',scale: 0.5})

    gsap.to('.hero-text', {
      opacity: 1,
      y: 0,
      duration: 1.5,
      scale: 1,
      ease: 'power2.inOut',
      filter: 'blur(0px)'
    })
  })
  return (
    <>
    <div className="min-h-screen bg-black pt-20 text-white overflow-x-hidden">
      {/* Content Sections */}
      <main className="py-20 px-6 font-fahkwang font-bold overflow-x-hidden">
        <div className=" space-y-32">
          {/* First Content Block */}
          <section className="grid md:grid-cols-5 gap-16 items-start justify-end">
            <div className='col-span-5 max-w-5xl'>
            <AnimatedContent delay={300}>
              <h1 className="hero-text text-2xl md:text-4xl leading-relaxed text-[#ffffff] font-bold">
              Grafiki is a creative agency dedicated to honoring Afrikan artistry through thoughtful design, branding, and storytelling. We create stories and visuals that inspire you to stop and reflect. 
              </h1>
              </AnimatedContent>
                </div>
          </section>

          <section className="h-auto w-[100%] overflow-x-hidden">
            <video
              src={getVideoSource()}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </section>

          {/* Second Content Block */}
          <section className="grid md:grid-cols-5 gap-16 items-start justify-end">
            <div className='col-span-1 hidden xl:block'></div>
            <div className="xl:text-right text-left md:col-span-2 xl:col-span-1">
            <AnimatedContent delay={200}>
              <h2 className="whitespace-nowrap md:text-xl leading-tight text-[#ffffff] font-semibold md:no-underline underline underline-offset-8 decoration-yellow-500 decoration-1">
              Our Approach:
              </h2>
              </AnimatedContent>
            </div>
            <div className='col-span-3'>
            <AnimatedContent delay={300}>
              <p className="text-lg md:text-xl leading-relaxed text-[#ffffff]"> 
              Our process is deliberate.We design to convey the rich narrative you envision for your brand, making your work matter to us as much as it matters to you. When you entrust us with your work, you can be confident that your vision will be realized in an impactful way.
              </p>
              </AnimatedContent>
            </div>
          </section>
        </div>
      </main>

      {/* Third Content Section */}
      <section className="pb-32 px-6 font-fahkwang font-bold overflow-x-hidden">
        <div className=" space-y-20">
          {/* First Content Block */}
          <div className="grid md:grid-cols-5 gap-16 items-start justify-end">
            <div className='col-span-1 hidden xl:block'></div>
            <div className="xl:text-right text-left md:col-span-2 xl:col-span-1">
            <AnimatedContent delay={200}>
              <h2 className="whitespace-nowrap md:text-xl leading-tight text-[#ffffff] font-semibold md:no-underline underline underline-offset-8 decoration-yellow-500 decoration-1">
              Our Culture:
              </h2>
              </AnimatedContent>
            </div>
            <div className='col-span-3'>
            <AnimatedContent delay={300}>
              <p className="text-lg md:text-xl leading-relaxed text-[#ffffff]">
              Grafiki believes that design should make you feel at home. Our logo, the Sankofa bird, represents this mission. Sankofa, based on Akan tradition, teaches that the future is stronger when we build on past wisdom and our history and remember who we truly are.
              </p>
              </AnimatedContent>
            </div>
          </div>

          {/* Second Content Block */}
          <div className="grid md:grid-cols-5 gap-16 items-start justify-end">
            <div className='col-span-1 hidden xl:block'></div>
            <div className="xl:text-right text-left md:col-span-2 xl:col-span-1">
            <AnimatedContent delay={200}>
              <h2 className="whitespace-nowrap md:text-xl leading-tight text-[#ffffff] font-semibold md:no-underline underline underline-offset-8 decoration-yellow-500 decoration-1">
                Our Services:
              </h2>
              </AnimatedContent>
            </div>
            <div className='col-span-3'>
            <AnimatedContent delay={300}>
              <ul className="text-lg md:text-xl leading-relaxed text-[#ffffff] list-none">
                • Brand Strategy{" "}
                • Spatial & Set Design{" "}
                • Visual Identity{" "}
                • Content & Editorial{" "}
                • Social Media{" "}
                • Web & Digital Design{" "}
                • Art Direction & Curation{" "}
                • Production (via Grafiki Studios)
              </ul>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>
       {/* People Section */}
       <People />
    </div>
   


      <AnimatedContent delay={300}>
      <div className='md:text-4xl mb-20 text-2xl max-w-5xl text-left leading-relaxed p-6  bg-black font-fahkwang font-bold overflow-x-hidden'>
      We are proud to have an intentional team and a broad network of creatives whose contributions amplify our vision. Grafiki projects benefit from this shared commitment.
      </div>
      </AnimatedContent>
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
  </>
  )
}

export default AboutClient
