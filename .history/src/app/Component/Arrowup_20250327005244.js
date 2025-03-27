"use client"

import { FaArrowUp } from 'react-icons/fa'

export default function ArrowUpButton() {
  return (
    <button
      className="fixed bottom-4 left-4 z-50 p-2 bg-red-600 text-white rounded shadow-md hover:bg-red-700 transition"
      onClick={() => window.scrollTo({ top: 12, behavior: 'smooth' })}
    >
      <FaArrowUp className="w-4 h-4" />
    </button>
  )
}
