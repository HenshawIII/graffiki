'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import AnimatedContent from '@/app/components/AnimatedContent'
import emailjs from '@emailjs/browser'

const ContactClient = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  
  // Form validation errors
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  // EmailJS configuration
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_50tgqws';
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_6jeou1q';
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'iW5UoFek4IKyF4CrD';

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, [EMAILJS_PUBLIC_KEY]);

  // Form validation
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');
    
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: 'info@grafiki.com.ng'
      };
      
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      console.log(result);
      if (result.status === 200) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-riamo">Let's Connect</h1>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8 font-riamo">Contact us</h2>
                </AnimatedContent>
                <div className="space-y-6">
                  <div>
                    <AnimatedContent delay={400}>
                    <p className="text-gray-300 mb-2">Email:</p>
                    </AnimatedContent>
                    <AnimatedContent delay={500}>
                    <div className="relative inline-block">
                      <a 
                        href="mailto:info@grafiki.com.ng" 
                        className="text-xl hover:text-yellow-400 transition-colors duration-300"
                      
                      >
                        info@grafiki.com.ng
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
                
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-[#098A50] text-white ">
                    {submitMessage}
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-[#EA4042] text-white ">
                    {submitMessage}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-transparent border transition-colors focus:outline-none ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-white focus:border-yellow-400'
                      }`}
                      placeholder="Your name"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-transparent border transition-colors focus:outline-none ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-white focus:border-yellow-400'
                      }`}
                      placeholder="your@email.com"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-3 bg-transparent border transition-colors focus:outline-none resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-white focus:border-yellow-400'
                      }`}
                      placeholder="Tell us about your project..."
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-bold py-4 px-8 transition-colors text-lg ${
                      isSubmitting
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-yellow-400 text-black hover:bg-yellow-300'
                    }`}
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND'}
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
