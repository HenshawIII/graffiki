'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

// Sample people data
const PEOPLE_DATA = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Motion Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Sound Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop"
  },
  {
    id: 6,
    name: "Alex Martinez",
    role: "Visual Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop"
  }
]

// Create extended data by duplicating the array twice
const EXTENDED_PEOPLE_DATA = [
  ...PEOPLE_DATA,
  ...PEOPLE_DATA.map(person => ({
    ...person,
    id: person.id + 6 // Ensure unique IDs
  })),
  ...PEOPLE_DATA.map(person => ({
    ...person,
    id: person.id + 12 // Ensure unique IDs
  }))
]

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
    <div className="mt-12 w-full bg-black text-white overflow-x-hidden">
      {/* Horizontal Scroller Container */}
      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex space-x-1 px-6 py-8 min-w-max select-none">
          {EXTENDED_PEOPLE_DATA.map((person) => (
            <div
              key={person.id}
              className="flex-shrink-0 w-[50vw] md:w-[35vw] max-h-[50vh] lg:max-h-[100vh] lg:w-[25vw] xl:w-[20vw] flex flex-col"
              style={{ height: containerHeight }}
            >
              {/* Card Container */}
              <div className="relative w-full h-full flex flex-col">
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
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                    {person.name}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-200">
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
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default People