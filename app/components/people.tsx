'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

// Sample people data
const PEOPLE_DATA = [
  {
    id: 1,
    name: "Adeoluwa Henshaw",
    role: "Art Director",
    image: "/Adeoluwa.jpg"
  },
  {
    id: 2,
    name: "Amarachika Emele-Ralph",
    role: "Managing Editor",
    image: "/Amara.jpg"
  },
  {
    id: 4,
    name: "Olatunbosun Sampson",
    role: "Creative Director (Studio)",
    image: "/Bosun.jpg"
  },
  {
    id: 3,
    name: "Oyewole Lawal",
    role: "Photo Editor (Studio)",
    image: "/Wole.jpg"
  },

  {
    id: 5,
    name: "Ogonna Onuabuchi",
    role: "Design Associate (Architecture)",
    image: "/Ogonna.jpg"
  },
  {
    id: 6,
    name: "Sharon Adeigbe",
    role: "Editorial Ops Intern",
    image: "/sharon.jpg"
  },
  {
    id: 7,
    name: "Akande Oni",
    role: "Design Intern",
    image: "/Akande.jpg"
  }
]

// Create extended data by duplicating the array twice


const People = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [containerHeight, setContainerHeight] = useState('90vh')

  // Calculate container height
  useEffect(() => {
    const calculateHeight = () => {
      const navbarHeight = 112 // px
      const screenHeight = window.innerHeight
      const availableHeight = screenHeight - navbarHeight
      // For tablet screens, use a more conservative height to prevent overlap
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024
      const height = isTablet ? Math.min(availableHeight * 0.8, 600) : availableHeight
      setContainerHeight(`${height}px`)
    }

    calculateHeight()
    window.addEventListener('resize', calculateHeight)
    
    return () => window.removeEventListener('resize', calculateHeight)
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2 // Scroll speed multiplier
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <div className="my-12  w-full bg-black text-white overflow-x-hidden">
      {/* Horizontal Scroller Container */}
      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto cursor-grab active:cursor-grabbing no-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex gap-1 px-6 py-8 min-w-max select-none">
          {PEOPLE_DATA.map((person) => (
            <div
              key={person.id}
              className="flex-shrink-0 w-[50vw]  md:w-[35vw] max-h-[50vh] lg:max-h-[60vh] xl:max-h-[70vh] lg:w-[35vw] xl:w-[20vw] flex flex-col"
              style={{ height: containerHeight }}
            >
              {/* Card Container */}
              <div className="relative w-full h-full flex flex-col overflow-hidden">
                {/* Image */}
                <div className="flex-1 relative overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 100vw"
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 scale-90">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
                    {person.name}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-200 font-fahkwang leading-tight">
                    {person.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
        .no-scrollbar::-webkit-scrollbar-track {
          display: none;
        }
        .no-scrollbar::-webkit-scrollbar-thumb {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default People