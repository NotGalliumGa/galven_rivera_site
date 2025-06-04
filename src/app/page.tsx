'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Galven Rivera
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Software Developer. I am Developer yes. If i were to ask myself what am I, I would say developer probably.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="mailto:galven.rivera@gmail.com"
            className="hover:text-blue-500 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>

          <a
            href="https://github.com/NotGalliumGa/galven_rivera_site"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.385 7.86 10.907.574.107.785-.25.785-.554 0-.274-.01-1.002-.015-1.967-3.197.696-3.872-1.54-3.872-1.54-.522-1.323-1.275-1.675-1.275-1.675-1.042-.712.08-.698.08-.698 1.15.08 1.754 1.182 1.754 1.182 1.024 1.754 2.688 1.247 3.343.954.104-.742.4-1.247.727-1.534-2.553-.29-5.237-1.277-5.237-5.682 0-1.256.448-2.284 1.182-3.09-.12-.288-.513-1.452.112-3.028 0 0 .963-.308 3.157 1.176.914-.254 1.894-.38 2.867-.385.973.005 1.953.13 2.87.385 2.19-1.484 3.15-1.176 3.15-1.176.627 1.576.234 2.74.114 3.028.737.806 1.18 1.834 1.18 3.09 0 4.415-2.688 5.387-5.253 5.672.41.353.772 1.05.772 2.115 0 1.528-.014 2.762-.014 3.14 0 .307.207.665.79.552C20.713 21.38 24 17.084 24 12c0-6.352-5.148-11.5-12-11.5z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </main>
  )
}
