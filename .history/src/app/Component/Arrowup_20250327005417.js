"use client"

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function ArrowUpButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 z-50 p-2 bg-red-600 text-white shadow-md hover:bg-red-700 transition"
        >
          <FaArrowUp className="w-4 h-4" />
        </button>
      )}
    </>
  )
}
