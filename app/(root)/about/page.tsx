'use client'

import React from 'react'
import People from '../../components/people'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <>
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Full Screen Header Section */}
      <section className="md:h-screen h-[50vh] flex px-4 pb-20 md:pb-0 items-end justify-start overflow-x-hidden">
        <div className="text-left">
          <h1 className="text-4xl lg:text-6xl md:text-[10rem] lg:text-[12rem] font-bold leading-tight">
            Curious <br />
            and Driven.
          </h1>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-6 font-fahkwang font-bold overflow-x-hidden">
        <div className=" space-y-32">
          {/* First Content Block */}
          <div className="grid md:grid-cols-5 gap-16 items-start justify-end">
            <div className='col-span-1 hidden xl:block'></div>
            <div className="xl:text-right text-left  md:col-span-2 xl:col-span-1">
              <h2 className="whitespace-nowrap  md:text-xl leading-tight text-[#ffffff] font-extrabold md:no-underline underline underline-offset-8 decoration-yellow-500 decoration-1">
                We're curious and driven
              </h2>
            </div>
            <div className='col-span-3'>
              <p className="text-lg md:text-xl leading-relaxed text-[#ffffff]">
                We always wonder what's next. Driven by curiosity and ambition, we explore new possibilities in creative coding, motion, sound, AI and create proprietary tech tools ourselves. Only by looking ahead, we can create the best solutions in the now.
              </p>
            </div>
          </div>

          {/* Second Content Block */}
          <div className="grid md:grid-cols-5 gap-16 items-start justify-end">
            <div className='col-span-1 hidden xl:block'></div>
            <div className="xl:text-right text-left md:col-span-2 xl:col-span-1">
              <h2 className="whitespace-nowrap md:text-xl leading-tight text-[#ffffff] font-semibold md:no-underline underline underline-offset-8 decoration-yellow-500 decoration-1">
                We're a team
              </h2>
            </div>
            <div className='col-span-3'>
              <p className="text-lg md:text-xl leading-relaxed text-[#ffffff]"> 
                We are a group of individual characters that enjoy working together. We have a common spirit that we hold dear. The studio is formed by a diverse group of nationalities, personalities, and specialists; from creative coders to sound designers, project managers, motion designers, strategists and visual designers. Collaboration is at the core of how we work, in the studio and together with clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* People Section */}
      <People />

      {/* Third Content Section */}
      <section className="py-32 px-6 font-fahkwang font-bold overflow-x-hidden">
        <div className=" space-y-32">
          {/* First Content Block */}
          <div className="grid md:grid-cols-5 gap-16 items-start justify-end">
            <div className='col-span-1 hidden xl:block'></div>
            <div className="xl:text-right text-left md:col-span-2 xl:col-span-1">
              <h2 className="whitespace-nowrap md:text-xl leading-tight text-[#ffffff] font-semibold md:no-underline underline underline-offset-8 decoration-yellow-500 decoration-1">
                We're curious and driven
              </h2>
            </div>
            <div className='col-span-3'>
              <p className="text-lg md:text-xl leading-relaxed text-[#ffffff]">
                We always wonder what's next. Driven by curiosity and ambition, we explore new possibilities in creative coding, motion, sound, AI and create proprietary tech tools ourselves. Only by looking ahead, we can create the best solutions in the now.
              </p>
            </div>
          </div>

          {/* Second Content Block */}
          <div className="grid md:grid-cols-5 gap-16 items-start justify-end">
            <div className='col-span-1 hidden xl:block'></div>
            <div className="xl:text-right text-left md:col-span-2 xl:col-span-1">
              <h2 className="whitespace-nowrap md:text-xl leading-tight text-[#ffffff] font-semibold md:no-underline underline underline-offset-8 decoration-yellow-500 decoration-1">
                We're a team
              </h2>
            </div>
            <div className='col-span-3'>
              <p className="text-lg md:text-xl leading-relaxed text-[#ffffff]">
                We are a group of individual characters that enjoy working together. We have a common spirit that we hold dear. The studio is formed by a diverse group of nationalities, personalities, and specialists; from creative coders to sound designers, project managers, motion designers, strategists and visual designers. Collaboration is at the core of how we work, in the studio and together with clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
    <section className="h-auto w-[100%] overflow-x-hidden">
    <Image src="/aboutpic.png" alt="About" width={1000} height={1000} className='w-full h-full object-cover' />
  </section>

  <section className="py-32 px-6 font-fahkwang font-bold overflow-x-hidden">
        <div className=" space-y-32">
          {/* First Content Block */}
          <div className="grid md:grid-cols-5 gap-16 items-start justify-end">
            <div className='col-span-1 hidden xl:block'></div>
            <div className="xl:text-right text-left md:col-span-2 xl:col-span-1">
              <h2 className="whitespace-nowrap md:text-xl leading-tight text-[#ffffff] font-semibold md:no-underline underline underline-offset-8 decoration-yellow-500 decoration-1">
                We're curious and driven
              </h2>
            </div>
            <div className='col-span-3'>
              <p className="text-lg md:text-xl leading-relaxed text-[#ffffff]">
                We always wonder what's next. Driven by curiosity and ambition, we explore new possibilities in creative coding, motion, sound, AI and create proprietary tech tools ourselves. Only by looking ahead, we can create the best solutions in the now.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='md:text-4xl text-2xl max-w-5xl text-left leading-tight p-6  bg-black font-fahkwang font-bold overflow-x-hidden'>
      We are always happy to meet new people. Give us a call <span className='text-slate-700 font-bold'>+234 813 300 0000</span>, email <span className='text-slate-700 font-bold'>hello@graffikistudio.com</span> or visit us.
      </div>
  </>
  )
}

export default AboutPage 