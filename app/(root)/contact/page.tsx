'use client'

import React from 'react'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-fahkwang font-bold">
      {/* Header/Navbar */}
     

      {/* Main Content */}
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Blue border container */}
          <div className="p-8 md:p-12">
            {/* Title Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Connect</h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                We're always open to bold ideas, fresh collaborations, and great coffee. Drop us a message.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Left Column - Contact Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact us</h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-300 mb-2">Email:</p>
                    <p className="text-xl">grafiki@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-2">Phone:</p>
                    <p className="text-xl">+234 901 512 3876</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <form className="space-y-6">
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
                    SIGNUP
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
  )
}

export default ContactPage