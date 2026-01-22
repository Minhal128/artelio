"use client"

import React, { useEffect, useState, useCallback, useRef } from 'react'

export interface ScrambledTextProps {
  radius?: number
  scrambleChars?: string
  className?: string
  style?: React.CSSProperties
  children: string
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 120,
  scrambleChars = '.:*#$@',
  className = '',
  style = {},
  children
}) => {
  const [displayText, setDisplayText] = useState(children)
  const rootRef = useRef<HTMLSpanElement | null>(null)
  const originalText = children
  const chars = scrambleChars.split('')
  
  const mousePos = useRef({ x: -1000, y: -1000 })
  const isAnimating = useRef(false)
  const revealProgress = useRef(1) // 1 = fully revealed, 0 = fully scrambled/scrambling
  
  const animate = useCallback(() => {
    if (!rootRef.current) return

    const rect = rootRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const dist = Math.hypot(mousePos.current.x - centerX, mousePos.current.y - centerY)

    const isWithinRadius = dist < radius

    if (isWithinRadius) {
      // Scrambling state
      revealProgress.current = Math.max(0, revealProgress.current - 0.1)
      
      const scrambled = originalText
        .split('')
        .map((char) => {
          if (char === ' ') return ' '
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join('')
      
      setDisplayText(scrambled)
      requestAnimationFrame(animate)
    } else {
      // Reveal state
      if (revealProgress.current < 1) {
        revealProgress.current += 0.08 // Control reveal speed
        
        const currentProgress = revealProgress.current
        const scrambled = originalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            
            // Randomly decide to reveal based on progress
            // We use a threshold that increases with progress
            const threshold = index / originalText.length
            if (currentProgress > threshold * 0.8 + 0.2) {
              return char
            }
            
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
        
        setDisplayText(scrambled)
        requestAnimationFrame(animate)
      } else {
        setDisplayText(originalText)
        isAnimating.current = false
      }
    }
  }, [originalText, chars, radius])

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      
      if (!rootRef.current) return
      const rect = rootRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY)

      if (dist < radius && !isAnimating.current) {
        isAnimating.current = true
        requestAnimationFrame(animate)
      }
    }

    window.addEventListener('pointermove', handleMove)
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [radius, animate])

  return (
    <span
      ref={rootRef}
      className={`inline-block whitespace-pre transition-colors duration-300 select-none ${className}`}
      style={{ 
        ...style,
        minWidth: `${originalText.length}ch`,
        fontVariantNumeric: 'tabular-nums'
      }}
    >
      {displayText}
    </span>
  )
}

export default ScrambledText
