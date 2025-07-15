'use client'

import { useEffect, useState } from 'react'

// List of titles to cycle through
const Descriptions = ['Galven Rivera', 'a Software Engineer', 'a Game Developer', 'an Occasional Gambler']

export default function IntroAnimation() {
  // Current string that is being built up or deleted
  const [displayedText, setDisplayedText] = useState('')

  // Index of the current string in the Descriptions array
  const [descIndex, setDescIndex] = useState(0)

  // Index of the current character being typed/deleted
  const [charIndex, setCharIndex] = useState(0)

  // Whether we are currently deleting text
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing speed in milliseconds
  const typingSpeed = 100
  const deletingSpeed = 50
  const delayBetweenWords = 2500

  useEffect(() => {
    // Current full word we're working on
    const currentWord = Descriptions[descIndex % Descriptions.length]

    let timeout: NodeJS.Timeout

    if (!isDeleting && charIndex <= currentWord.length) {
      // Typing forward: add one more letter
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex))
        setCharIndex((prev) => prev + 1)
      }, typingSpeed)
    } else if (isDeleting && charIndex >= 0) {
      // Deleting: remove one letter at a time
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex))
        setCharIndex((prev) => prev - 1)
      }, deletingSpeed)
    } else if (!isDeleting && charIndex > currentWord.length) {
      // Once typing is done, wait, then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true)
        setCharIndex((prev) => prev - 1)
      }, delayBetweenWords)
    } else if (isDeleting && charIndex < 0) {
      // Once deleting is done, move to next word and start typing again
      setIsDeleting(false)
      setDescIndex((prev) => (prev + 1) % Descriptions.length)
      setCharIndex(0)
    }

    // Cleanup timer to avoid memory leaks
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, descIndex])

  return (
    <h2
        className="text-3xl md:text-5xl font-semibold tracking-wide text-transparent bg-clip-text 
            bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-md 
            flex items-center overflow-hidden whitespace-nowrap text-ellipsis">
        {"I am " + displayedText}
    </h2>
  )
}
