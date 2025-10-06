"use client";
import Link from 'next/link'
import { FaHome, FaArrowLeft } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-indigo-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            <FaHome />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="block w-full flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
} 