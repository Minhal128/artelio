"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export interface ScrambledTextProps {
  radius?: number
  scrambleChars?: string
  className?: string
  style?: React.CSSProperties
  children: string
}

export const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 120,
  scrambleChars = '.:*#$@',
  className = '',
  style = {},
  children
}) => {
  const rootRef = useRef<HTMLSpanElement | null>(null)
  const charRefs = useRef<(HTMLSpanElement | null)[]>([])
  const originalText = children
  const chars = scrambleChars.split('')

  useEffect(() => {
    if (!rootRef.current) return

    const handleMove = (e: PointerEvent) => {
      charRefs.current.forEach((charEl, i) => {
        if (!charEl) return
        
        const rect = charEl.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY)

        if (dist < radius) {
          // Slowly scramble while mouse is near
          // We use a low probability to change the character to make it "slow"
          if (Math.random() > 0.92) {
             charEl.innerText = chars[Math.floor(Math.random() * chars.length)]
          }
          
          gsap.to(charEl, {
            opacity: 0.7,
            scale: 1.05,
            duration: 0.8,
            ease: "power1.out",
            overwrite: 'auto'
          })
        } else {
          // Smoothly restore when mouse moves away
          if (charEl.innerText !== originalText[i]) {
            gsap.to(charEl, {
              opacity: 1,
              scale: 1,
              duration: 2, // Slow and smooth restoration
              ease: "power3.out",
              overwrite: 'auto',
              onUpdate: function() {
                const progress = this.progress()
                // As progress increases, the chance of showing original char increases
                if (progress > 0.85) {
                  charEl.innerText = originalText[i]
                } else if (Math.random() > progress * 0.5 + 0.5) {
                  charEl.innerText = chars[Math.floor(Math.random() * chars.length)]
                }
              },
              onComplete: () => {
                charEl.innerText = originalText[i]
              }
            })
          }
        }
      })
    }

    window.addEventListener('pointermove', handleMove)
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [radius, originalText, chars])

  return (
    <span
      ref={rootRef}
      className={`inline-block whitespace-pre select-none font-mono ${className}`}
      style={{ 
        ...style,
        fontVariantNumeric: 'tabular-nums'
      }}
    >
      {originalText.split('').map((char, i) => (
        <span
          key={i}
          ref={el => { charRefs.current[i] = el }}
          className="inline-block transition-colors duration-500"
          style={{ minWidth: char === ' ' ? '0.3em' : 'auto' }}
        >
          {char}
        </span>
      ))}
    </span>
  )
}

export default ScrambledText
