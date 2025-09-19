'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Sparkles, ArrowRight, Linkedin } from 'lucide-react'
import IntroAnimation from '@/components/titleAnimation'

export default function Home() {
  const [selected, setSelected] = useState('')
  const [mounted, setMounted] = useState(false)
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const cards = [
    {
      title: 'Projects',
      front: 'Explore my portfolio of web applications and tools.',
      back: 'Built with Next.js, Tailwind CSS, and Node.js. Check out my GitHub for code samples.',
      link: '/projects',
    },
    {
      title: 'Cybersecurity',
      front: 'Learn about my security research and interests.',
      back: 'I enjoy ethical hacking, CTF challenges, and secure coding practices.',
      link: '/cybersecurity',
    },
    {
      title: 'Trading Bots',
      front: 'Discover my stock trading automation projects.',
      back: 'Python-based bots that analyze markets and execute trades.',
      link: '/trading',
    },
  ]

  return (
    <main className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black text-green-400 px-4">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center min-h-screen text-center gap-8 max-w-4xl mx-auto"
      >
        <AnimatePresence>{mounted && <IntroAnimation />}</AnimatePresence>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          Software Developer and cybersecurity enthusiast. I love building interfaces, automating workflows, and exploring security.
        </p>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-32 max-w-4xl mx-auto pb-16">
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center">Explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                className="relative w-72 h-60 perspective cursor-grab active:cursor-grabbing select-none"
                drag
                dragElastic={0.5}
                dragMomentum
                dragConstraints={{ top: -400, bottom: 400, left: -500, right: 500 }}
                onTap={() =>
                  setFlippedIndex(flippedIndex === index ? null : index)
                }
              >
                <motion.div
                  className="relative w-full h-full transform-style-preserve-3d"
                  animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Front */}
                  <div className="absolute inset-0 bg-gray-900 border border-green-700 rounded-xl flex flex-col items-center justify-center p-4 backface-hidden overflow-hidden">
                    <Sparkles className="mb-2 text-blue-500" />
                    <h3 className="font-semibold">{card.title}</h3>
                    <p className="text-sm text-gray-400 mt-2 text-center line-clamp-3">
                      {card.front}
                    </p>
                  </div>
                  {/* Back */}
                  <a
                    href={card.link}
                    className="absolute inset-0 bg-gray-800 border border-green-700 rounded-xl flex flex-col items-center justify-center p-4 rotate-y-180 backface-hidden overflow-hidden hover:bg-gray-700 transition-colors"
                  >
                    <p className="text-sm text-gray-300 text-center line-clamp-4">
                      {card.back}
                    </p>
                    <span className="mt-2 text-blue-500 underline">Learn more</span>
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* About Me Tabs */}
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center">About Me</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Bio', 'Skills', 'Goals'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelected(tab)}
                className={`px-4 py-2 rounded ${
                  selected === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-white'
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
                  className="bg-gray-800 p-4 rounded border border-green-700 text-center"
                >
                  {selected === 'Bio' && (
                    <p>
                      I am a software developer and cybersecurity enthusiast. I love trading stocks and going for hikes.
                    </p>
                  )}
                  {selected === 'Skills' && (
                    <p>
                      JavaScript, TypeScript, React, Next.js, Tailwind CSS, Framer Motion, Node.js, Security Practices.
                    </p>
                  )}
                  {selected === 'Goals' && (
                    <p>
                      Build secure, accessible, and performant apps. Contribute to open source and master ethical hacking.
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Resume Download */}
        <section className="text-center">
          <motion.a
            href="/files/resume.pdf"
            download
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: 'spring' }}
            className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Download Resume <ArrowRight className="ml-2 w-4 h-4" />
          </motion.a>
        </section>
      </div>

      {/* Footer */}
      <footer className="flex justify-center items-center gap-8 py-8 border-t border-green-700 text-green-600">
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
          className="hover:text-white transition-colors"
          aria-label="GitHub"
        >
          {/* GitHub Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.385 7.86 10.907.574.107.785-.25.785-.554 0-.274-.01-1.002-.015-1.967-3.197.696-3.872-1.54-3.872-1.54-.522-1.323-1.275-1.675-1.275-1.675-1.042-.712.08-.698.08-.698 1.15.08 1.754 1.182 1.754 1.182 1.024 1.754 2.688 1.247 3.343.954.104-.742.4-1.247.727-1.534-2.553-.29-5.237-1.277-5.237-5.682 0-1.256.448-2.284 1.182-3.09-.12-.288-.513-1.452.112-3.028 0 0 .963-.308 3.157 1.176.914-.254 1.894-.38 2.867-.385.973.005 1.953.13 2.87.385 2.19-1.484 3.15-1.176 3.15-1.176.627 1.576.234 2.74.114 3.028.737.806 1.18 1.834 1.18 3.09 0 4.415-2.688 5.387-5.253 5.672.41.353.772 1.05.772 2.115 0 1.528-.014 2.762-.014 3.14 0 .307.207.665.79.552C20.713 21.38 24 17.084 24 12c0-6.352-5.148-11.5-12-11.5z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/galvenrivera/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </footer>
    </main>
  )
}
