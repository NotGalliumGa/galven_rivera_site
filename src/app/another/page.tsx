'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [selected, setSelected] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-16 text-gray-800 dark:text-gray-100">
      {/* 1. Delayed Text Reveal */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">👨‍💻 Galven Rivera</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          Building elegant interfaces and smooth interactions.
        </p>
      </motion.section>

      {/* 2. Hover Card Animation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Hover Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Frontend', 'Backend', 'Design'].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 bg-white dark:bg-gray-800 shadow rounded-xl text-center cursor-pointer"
            >
              <Sparkles className="mx-auto mb-2 text-blue-500" />
              <h3 className="font-semibold">{item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Animated Tabs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Animated Tabs</h2>
        <div className="flex space-x-4">
          {['Bio', 'Skills', 'Goals'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelected(tab)}
              className={`px-4 py-2 rounded ${
                selected === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-4 min-h-[80px]">
          <AnimatePresence mode="wait">
            {selected && (
              <motion.div
                key={selected}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded"
              >
                {selected === 'Bio' && <p>I’m a developer focused on UX and performance.</p>}
                {selected === 'Skills' && <p>React, Tailwind, Next.js, Framer Motion, APIs.</p>}
                {selected === 'Goals' && <p>Grow as a designer-developer and contribute to open source.</p>}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Button Entrance Animation */}
      <section className="text-center">
        <motion.a
          href="/resume.pdf"
          download
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, type: 'spring' }}
          className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Download Resume <ArrowRight className="ml-2 w-4 h-4" />
        </motion.a>
      </section>
    </main>
  )
}
