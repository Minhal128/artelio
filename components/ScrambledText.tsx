"use client"

import React, { useEffect, useState, useCallback, useRef } from 'react'

export interface ScrambledTextProps {
  radius?: number
  duration?: number
  scrambleChars?: string
  className?: string
  style?: React.CSSProperties
  children: string
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 0.8,
  scrambleChars = 'ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+',
  className = '',
  style = {},
  children
}) => {
  const [displayText, setDisplayText] = useState(children)
  const rootRef = useRef<HTMLSpanElement | null>(null)
  const originalText = children
  const isAnimating = useRef(false)
  const animationFrameId = useRef<number | null>(null)
  
  const chars = scrambleChars.split('')
  
  const startAnimation = useCallback(() => {
    if (isAnimating.current) return
    isAnimating.current = true
    
    const startTime = performance.now()
    const totalDuration = duration * 1000

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / totalDuration, 1)

      const scrambled = originalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' '
          
          // Determine if this character should be revealed
          const charProgress = (index / originalText.length) * 0.5
          if (progress > 0.5 + charProgress) {
            return originalText[index]
          }
          
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join('')

      setDisplayText(scrambled)

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animate)
      } else {
        setDisplayText(originalText)
        isAnimating.current = false
      }
    }

    animationFrameId.current = requestAnimationFrame(animate)
  }, [originalText, chars, duration])

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (!rootRef.current || isAnimating.current) return
      
      const rect = rootRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY)

      if (dist < radius) {
        startAnimation()
      }
    }

    window.addEventListener('pointermove', handleMove)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }
  }, [radius, startAnimation])

  return (
    <span
      ref={rootRef}
      className={`inline-block whitespace-pre transition-colors duration-300 ${className}`}
      style={{ 
        ...style,
        minWidth: `${originalText.length}ch`, // Help maintain layout
        fontVariantNumeric: 'tabular-nums' // Ensure numbers don't shift
      }}
    >
      {displayText}
    </span>
  )
}

export default ScrambledText
