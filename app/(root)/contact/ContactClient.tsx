'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import AnimatedContent from '@/app/components/AnimatedContent'

const ContactClient = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('');

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setTooltipText('Copied!');
      setShowTooltip(true);
      
      // Hide tooltip after 2 seconds
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    } catch (err) {
      setTooltipText('Failed to copy');
      setShowTooltip(true);
      
      // Hide tooltip after 2 seconds
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    }
  };
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-fahkwang font-bold">
      {/* Main Content */}
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Blue border container */}
          <div className="p-8 md:p-12">
            {/* Title Section */}
            <header className="text-center mb-16">
              <AnimatedContent delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Connect</h1>
              </AnimatedContent>
              <AnimatedContent delay={200}>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                We're always open to bold ideas, fresh collaborations, and great coffee. Drop us a message.
                </p>
              </AnimatedContent>
            </header>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Left Column - Contact Info */}
              <section>
                <AnimatedContent delay={300}>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact us</h2>
                </AnimatedContent>
                <div className="space-y-6">
                  <div>
                    <AnimatedContent delay={400}>
                    <p className="text-gray-300 mb-2">Email:</p>
                    </AnimatedContent>
                    <AnimatedContent delay={500}>
                    <div className="relative inline-block">
                      <a 
                        href="mailto:grafikidesign.ng@gmail.com" 
                        className="text-xl hover:text-yellow-400 transition-colors duration-300"
                      
                      >
                        grafikidesign.ng@gmail.com
                      </a>
                    </div>
                    </AnimatedContent>
                  </div>
                  <div>
                    <AnimatedContent delay={500}>
                    <p className="text-gray-300 mb-2">Phone:</p>
                    </AnimatedContent>
                    <AnimatedContent delay={600}>
                    <div className="relative inline-block">
                      <p 
                        className="text-xl cursor-pointer hover:text-yellow-400 transition-colors duration-300 select-none"
                        onClick={() => copyToClipboard('+234 916 108 4705')}
                      >
                        +234 916 108 4705
                      </p>
                      
                      {/* Tooltip */}
                      {showTooltip && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap z-50 animate-pulse">
                          {tooltipText}
                          {/* Tooltip arrow */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-yellow-400"></div>
                        </div>
                      )}
                    </div>
                    </AnimatedContent>
                  </div>
                </div>
              </section>

              {/* Right Column - Contact Form */}
              <section>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 sr-only">Send us a message</h2>
                <form className="space-y-6 max-w-2xl mx-auto">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-transparent border border-white focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-transparent border border-white  focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-transparent border border-white  focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-black font-bold py-4 px-8  hover:bg-yellow-300 transition-colors text-lg"
                  >
                    SEND
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
            Built by <a href="https://www.x.com/Devansa01/" target='_blank' rel='noopener noreferrer' className="text-white hover:text-yellow-400 transition-colors">HIC-Tech</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ContactClient
