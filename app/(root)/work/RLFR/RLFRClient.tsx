'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import AnimatedContent from '@/app/components/AnimatedContent';

export default function RLFRClient() {
 

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col py-6 px-6 xl:px-24">
        {/* Project Description */}
        <section className="pt-16">
          <div className="">
            <AnimatedContent delay={300}>
              <div className="text-left mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                  Redlight Fashion Room
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl font-fahkwang">
                  Our partnership with the EDM fashion rave Redlight Fashion Room demonstrated our commitment to telling stories over all pulses.
                </p>
              </div>
            </AnimatedContent>
          </div>
        </section>

        {/* Hero Video Section */}
        <section className="xl:h-screen mt-1 relative overflow-hidden">
          <video
            src={'/RLFR/1 Video.mp4'}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Redlight Fashion Room - EDM Fashion Rave Video"
          />
        </section>

        {/* Image 1 */}
        <section className="pb-2 font-fahkwang">
          <div className="">
            <AnimatedContent delay={400}>
              <div className="space-y-6">
                <div className="relative w-full aspect-[3/2]  overflow-hidden group">
                  <Image
                    src="/RLFR/1.png"
                    alt="Redlight Fashion Room - EDM Fashion Rave Branding"
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

        {/* Campaign Description Section */}
        <section className="py-6">
          <div className="">
            <AnimatedContent delay={400}>
              <div className="text-left mb-0">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-5xl font-fahkwang">
                  We branded campaigns for three event editions, including a collaboration with Ile Ijo and Raveyard, where Lady Donli performed.
                </p>
              </div>
            </AnimatedContent>
          </div>
        </section>

        {/* Final Image Gallery */}
        <section className="pb-2 font-fahkwang">
          <div className="">
            <div className="space-y-6">
              {/* Image 2 */}
              <AnimatedContent delay={500}>
                <div className="relative w-full aspect-[3/2]  overflow-hidden group">
                  <Image
                    src="/RLFR/2.png"
                    alt="Redlight Fashion Room - Event Campaign Design"
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                  />
                </div>
              </AnimatedContent>
              
              {/* Image 3 */}
              <AnimatedContent delay={500}>
                <div className="relative w-full aspect-[3/2]  overflow-hidden group">
                  <Image
                    src="/RLFR/3_.png"
                    alt="Redlight Fashion Room - Lady Donli Performance Collaboration"
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                  />
                </div>
              </AnimatedContent>
            </div>
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
