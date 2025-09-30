'use client'
import Image from 'next/image';
import AnimatedContent from '@/app/components/AnimatedContent';

export default function SMIClient() {

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col py-6 px-6 xl:px-24">
        {/* Project Description */}
        <section className="pt-16">
          <div className="">
            <AnimatedContent delay={300}>
              <div className="text-left mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                  SMI's World
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl font-fahkwang">
                  Most SMEs lack a clear visual identity, limiting their ability to scale and connect meaningfully with customers. However, SMI World broke that jinx when they contacted us.
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
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden group">
                  <Image
                    src="/Smi/1.png"
                    alt="SMI's World - Hair Care Brand Identity"
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                    priority
                  />
                </div>
                
                {/* Image 2 */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden group">
                  <Image
                    src="/Smi/2.png"
                    alt="SMI's World - Natural Hair Care Branding"
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                  />
                </div>
              </div>
            </AnimatedContent>
          </div>
        </section>

        {/* Mission Description Section */}
        <section className="py-6">
          <div className="">
            <AnimatedContent delay={400}>
              <div className="text-left mb-0">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-5xl font-fahkwang">
                  Many Black women struggle to maintain their natural hair, and SMI was founded to make hair care specifically designed for this purpose more accessible.
                </p>
              </div>
            </AnimatedContent>
          </div>
        </section>

        {/* Hero Video Section */}
        <section className="xl:h-screen mt-1 mb-6 relative overflow-hidden">
          <video
            src={"/Smi/1 Video.mp4"}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label="SMI's World - Hair Care Brand Video"
          />
        </section>

        {/* Final Image Gallery */}
        <section className="pb-2 font-fahkwang">
          <div className="">
            <div className="space-y-6">
              {/* Image 3 */}
              <AnimatedContent delay={500}>
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden group">
                  <Image
                    src="/Smi/3.png"
                    alt="SMI's World - Earthy Color Palette Design"
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                  />
                </div>
              </AnimatedContent>
              
              {/* Image 4 */}
              <AnimatedContent delay={500}>
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden group">
                  <Image
                    src="/Smi/4.png"
                    alt="SMI's World - African Beauty Traditions Branding"
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
                  />
                </div>
              </AnimatedContent>
            </div>
          </div>
        </section>

        {/* Design Philosophy Section */}
        <section className="py-6">
          <div className="">
            <AnimatedContent delay={400}>
              <div className="text-left mb-0">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-5xl font-fahkwang">
                  We chose a subdued, earthy colour palette inspired by natural elements, soft textures, and African beauty traditions. Then, we paired it with delicate, flowing type that exuded ease. Collectively, these aesthetic choices resulted in an identity that reflected SMI World's goal of providing accessible hair care.
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
