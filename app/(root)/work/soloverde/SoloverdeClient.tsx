'use client'

import Image from 'next/image';
import AnimatedContent from '@/app/components/AnimatedContent';

export default function SoloverdeClient() {

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col py-6 px-6 xl:px-24">
        

        {/* Project Description */}
        <section className="pt-16">
          <div className="">
            <AnimatedContent delay={300}>
              <div className="text-left mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                  Soloverde Farms
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl font-fahkwang">
                  Owing to our strong interest in agriculture, we approached Soloverde Farms, a youth-led farm in Ibadan. During our conversation with its founder, he was candid about the challenges of running a farm in Nigeria today. Following that conversation, it became clear that our role was to translate that spirit into a visual identity that embodied the resilience required for growth.
                </p>
              </div>
            </AnimatedContent>
          </div>
        </section>

        {/* Hero Video Section */}
        <section className="xl:h-screen mt-1 relative overflow-hidden">
          <video
            src={'/videos/solDeskNe.mp4'}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Soloverde Farm - Agricultural Brand Identity Video"
          />
        </section>

        {/* Image Gallery - First Set */}
        <section className="pb-2 font-fahkwang">
          <div className="">
            <AnimatedContent delay={400}>
              <div className="space-y-6">
                {/* Image 1 */}
                <div className="relative w-full aspect-[3/2]  overflow-hidden group">
                  <Image
                    src="/Solo verde/1.png"
                    alt="Soloverde Farm - Brand Identity Design"
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                    priority
                  />
                </div>
                
                {/* Image 2 */}
                <div className="relative w-full aspect-[3/2]  overflow-hidden group">
                  <Image
                    src="/Solo verde/2.png"
                    alt="Soloverde Farm - Agricultural Branding"
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                  />
                </div>
                
                {/* Image 3 */}
                <div className="relative w-full aspect-[3/2]  overflow-hidden group">
                  <Image
                    src="/Solo verde/3.png"
                    alt="Soloverde Farm - Visual Identity Application"
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                  />
                </div>
              </div>
            </AnimatedContent>
          </div>
        </section>

        {/* Brand Concept Section */}
        <section className="py-6">
          <div className="">
            <AnimatedContent delay={400}>
              <div className="text-left mb-0">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-5xl font-fahkwang">
                  We developed a new identity that pays homage to the farm's cassava roots while also introducing new possibilities. Soloverde's rebrand positions the company for innovation, sustainability, and untapped agricultural potential.
                </p>
              </div>
            </AnimatedContent>
          </div>
        </section>

        {/* Final Image Gallery */}
        <section className="pb-2 font-fahkwang">
          <div className="">
            <div className="space-y-6">
              {/* Image 4 */}
              <AnimatedContent delay={500}>
                <div className="relative w-full aspect-[3/2]  overflow-hidden group">
                  <Image
                    src="/Solo verde/4.png"
                    alt="Soloverde Farm - Cassava-Inspired Design"
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                  />
                </div>
              </AnimatedContent>
              
              {/* Image 5 */}
              <AnimatedContent delay={500}>
                <div className="relative w-full aspect-[3/2]  overflow-hidden group">
                  <Image
                    src="/Solo verde/5.png"
                    alt="Soloverde Farm - Sustainable Agriculture Branding"
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
