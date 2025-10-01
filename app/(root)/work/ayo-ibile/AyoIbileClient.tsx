'use client'

import Image from 'next/image';
import AnimatedContent from '@/app/components/AnimatedContent';

export default function AyoIbileClient() {

  return (
    <>
    <div className="min-h-screen bg-black text-white flex flex-col py-6 px-6 xl:px-24">
      {/* Image 3 */}
      <section className="pt-16 font-fahkwang">
        <div className="">
          <AnimatedContent delay={500}>
            <div className="space-y-6">
              <div className="relative w-full aspect-[3/2]  overflow-hidden group">
                <Image
                  src="/Ayo Ibile/3.jpg"
                  alt="Ayo Ibile - Visual Identity Design"
                  fill
                  className="object-cover transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                />
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-8">
        <div className="">
          <AnimatedContent delay={300}>
            <div className="text-left ">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl font-fahkwang">
                What began as a collection of images and the idea for a photography exhibition on the streets evolved into a cultural initiative celebrating the richness of Lagos carnival traditions.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Image Gallery - First Set */}
      <section className="pb-2 font-fahkwang">
        <div className="">
          <AnimatedContent delay={400}>
            <div className="space-y-6">
              {/* Image 1 */}
              <div className="relative w-full aspect-[3/2]  overflow-hidden group">
                <Image
                  src="/Ayo Ibile/1.jpg"
                  alt="Ayo Ibile - Photography Exhibition Setup"
                  fill
                  className="object-cover transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                  priority
                />
              </div>
              
              {/* Image 2 */}
              <div className="relative w-full aspect-[3/2]  overflow-hidden group">
                <Image
                  src="/Ayo Ibile/2.jpg"
                  alt="Ayo Ibile - Street Exhibition Display"
                  fill
                  className="object-cover transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                />
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Design Concept Section */}
      <section className="py-6">
        <div className="">
          <AnimatedContent delay={400}>
            <div className="text-left mb-0">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-5xl font-fahkwang">
                We created a visual identity based on earthy greens to represent growth and connection to the land. A minimalist approach allowed the vibrancy of the carnival imagery to shine, while Tac One, a Nigerian typeface inspired by Festac '77, grounded the project in local cultural history.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

     

     

       {/* Video Section */}
       <section className="pb-0 ">
        <div className="flex justify-end">
          <AnimatedContent delay={300}>
            <div className="mb-6">
              <video
                src="/Ayo Ibile/1 video.mp4"
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

      {/* Image 4 */}
      <section className="pb-2 font-fahkwang">
        <div className="">
          <AnimatedContent delay={500}>
            <div className="space-y-6">
              <div className="relative w-full aspect-[3/2]  overflow-hidden group">
                <Image
                  src="/Ayo Ibile/4.jpg"
                  alt="Ayo Ibile - Community Integration"
                  fill
                  className="object-cover transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                />
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Community Collaboration Section */}
      <section className="pt-6">
        <div className="">
          <AnimatedContent delay={400}>
            <div className="text-left mb-8">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-5xl font-fahkwang">
                In collaboration with the host community, Big Valley, we ensured that the project belonged to the people as well as the artists. By bringing art to the streets, we liberated the images from the confines of galleries, making the exhibition a communal experience for all.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Final Image Gallery */}
      <section className="pb-2 font-fahkwang">
        <div className="">
          <div className="space-y-6">
            {/* Image 5 */}
            <AnimatedContent delay={500}>
              <div className="relative w-full aspect-[3/2]  overflow-hidden group">
                <Image
                  src="/Ayo Ibile/5.jpg"
                  alt="Ayo Ibile - Street Art Exhibition"
                  fill
                  className="object-cover transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                />
              </div>
            </AnimatedContent>
            
            {/* Image 6 */}
            <AnimatedContent delay={500}>
              <div className="relative w-full aspect-[3/2]  overflow-hidden group">
                <Image
                  src="/Ayo Ibile/6.jpg"
                  alt="Ayo Ibile - Community Engagement"
                  fill
                  className="object-cover transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                />
              </div>
            </AnimatedContent>
            
            {/* Image 7 */}
            <AnimatedContent delay={600}>
              <div className="relative w-full aspect-[3/2]  overflow-hidden group">
                <Image
                  src="/Ayo Ibile/7.jpg"
                  alt="Ayo Ibile - Final Exhibition View"
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
