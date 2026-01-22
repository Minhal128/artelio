"use client"

import React, { useEffect, useState, useCallback, useRef } from 'react'

export interface ScrambledTextProps {
  radius?: number
  duration?: number
  speed?: number
  scrambleChars?: string
  className?: string
  style?: React.CSSProperties
  children: string
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:*#$@',
  className = '',
  style = {},
  children
}) => {
  const [displayText, setDisplayText] = useState(children)
  const rootRef = useRef<HTMLSpanElement | null>(null)
  const originalText = children
  const isScrambling = useRef(false)
  const timeoutIds = useRef<NodeJS.Timeout[]>([])

  const scramble = useCallback(() => {
    if (isScrambling.current) return
    isScrambling.current = true

    const chars = scrambleChars.split('')
    const textArray = originalText.split('')
    let iteration = 0
    const totalIterations = Math.floor(duration * 20) // Adjust for duration

    const interval = setInterval(() => {
      setDisplayText(
        textArray
          .map((char, index) => {
            if (char === ' ') return ' '
            if (iteration > (totalIterations / textArray.length) * index) {
              return originalText[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )

      iteration += speed

      if (iteration >= totalIterations) {
        clearInterval(interval)
        setDisplayText(originalText)
        isScrambling.current = false
      }
    }, 30)

    return () => clearInterval(interval)
  }, [originalText, scrambleChars, duration, speed])

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (!rootRef.current) return
      
      const { left, top, width, height } = rootRef.current.getBoundingClientRect()
      const dx = e.clientX - (left + width / 2)
      const dy = e.clientY - (top + height / 2)
      const dist = Math.hypot(dx, dy)

      if (dist < radius && !isScrambling.current) {
        scramble()
      }
    }

    window.addEventListener('pointermove', handleMove)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      timeoutIds.current.forEach(clearTimeout)
    }
  }, [radius, scramble])

  return (
    <span
      ref={rootRef}
      className={`inline-block cursor-default select-none ${className}`}
      style={style}
    >
      {displayText}
    </span>
  )
}

export default ScrambledText
