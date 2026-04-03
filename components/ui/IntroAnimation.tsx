'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>[]{}|'
const NAME = 'RAJ AJMERA'
const SLICES = 12

function randomChar() {
  return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
}

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'scanline' | 'type' | 'load' | 'slice' | 'done'>('scanline')
  const [displayName, setDisplayName] = useState<string[]>(Array(NAME.length).fill(''))
  const [lockedCount, setLockedCount] = useState(0)
  const [loadPct, setLoadPct] = useState(0)
  const [sliceOut, setSliceOut] = useState(false)
  const [done, setDone] = useState(false)
  const glitchRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Phase 1 — scanline for 900ms then start typing
  useEffect(() => {
    const t = setTimeout(() => setPhase('type'), 900)
    return () => clearTimeout(t)
  }, [])

  // Phase 2 — glitch-type each letter
  useEffect(() => {
    if (phase !== 'type') return

    let currentLetter = 0
    let locked = 0

    function typeLetter(idx: number) {
      if (idx >= NAME.length) {
        // all locked — move to load
        setTimeout(() => setPhase('load'), 400)
        return
      }

      let flashes = 0
      const maxFlashes = 5 + Math.floor(Math.random() * 5)

      glitchRef.current = setInterval(() => {
        setDisplayName((prev) => {
          const next = [...prev]
          next[idx] = NAME[idx] === ' ' ? ' ' : randomChar()
          return next
        })
        flashes++
        if (flashes >= maxFlashes) {
          clearInterval(glitchRef.current!)
          // lock this letter
          setDisplayName((prev) => {
            const next = [...prev]
            next[idx] = NAME[idx]
            return next
          })
          locked++
          setLockedCount(locked)
          setTimeout(() => typeLetter(idx + 1), 60 + Math.random() * 60)
        }
      }, 40)
    }

    typeLetter(0)
    return () => { if (glitchRef.current) clearInterval(glitchRef.current) }
  }, [phase])

  // Phase 3 — loading bar
  useEffect(() => {
    if (phase !== 'load') return
    let pct = 0
    const interval = setInterval(() => {
      pct += Math.random() * 6 + 2
      if (pct >= 100) {
        pct = 100
        setLoadPct(100)
        clearInterval(interval)
        setTimeout(() => {
          setPhase('slice')
          setSliceOut(true)
        }, 300)
      } else {
        setLoadPct(Math.floor(pct))
      }
    }, 40)
    return () => clearInterval(interval)
  }, [phase])

  // Phase 4 — after slices animate out, call onComplete
  useEffect(() => {
    if (phase !== 'slice') return
    const t = setTimeout(() => {
      setDone(true)
      onComplete()
    }, 900)
    return () => clearTimeout(t)
  }, [phase, onComplete])

  const sliceHeight = 100 / SLICES

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden"
          style={{ background: '#050508' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* ── Scanline sweep ── */}
          {phase === 'scanline' && (
            <motion.div
              className="absolute left-0 right-0 pointer-events-none"
              style={{
                height: 2,
                background: 'linear-gradient(90deg, transparent, #6366f1, #06b6d4, transparent)',
                boxShadow: '0 0 18px 4px #6366f1',
              }}
              initial={{ top: '-2px' }}
              animate={{ top: '100vh' }}
              transition={{ duration: 0.85, ease: 'linear' }}
            />
          )}

          {/* ── Subtle grid background ── */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* ── Main content ── */}
          {(phase === 'type' || phase === 'load') && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">

              {/* Name */}
              <div className="flex items-center gap-0 font-mono select-none" style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)', fontWeight: 900, letterSpacing: '0.12em' }}>
                {displayName.map((char, i) => (
                  <motion.span
                    key={i}
                    style={{
                      color: lockedCount > i ? '#ffffff' : '#6366f1',
                      textShadow: lockedCount > i ? '0 0 12px rgba(99,102,241,0.5)' : 'none',
                      display: 'inline-block',
                      minWidth: char === ' ' ? '0.5em' : '0.62em',
                      transition: 'color 0.1s',
                    }}
                  >
                    {char || '\u00A0'}
                  </motion.span>
                ))}
                {/* blinking cursor */}
                <motion.span
                  style={{ color: '#06b6d4', fontWeight: 100, marginLeft: 4 }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                >
                  |
                </motion.span>
              </div>

              {/* Subtitle */}
              <AnimatePresence>
                {lockedCount === NAME.length && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-mono text-sm tracking-[0.4em] uppercase"
                    style={{ color: '#06b6d4' }}
                  >
                    Full Stack Developer
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Loading bar */}
              <AnimatePresence>
                {phase === 'load' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center gap-2"
                    style={{ width: 'clamp(200px, 40vw, 420px)' }}
                  >
                    <div className="w-full h-[2px] rounded-full" style={{ background: 'rgba(99,102,241,0.2)' }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          width: `${loadPct}%`,
                          background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
                          boxShadow: '0 0 8px #6366f1',
                          transition: 'width 0.04s linear',
                        }}
                      />
                    </div>
                    <span className="font-mono text-xs" style={{ color: 'rgba(99,102,241,0.7)' }}>
                      {loadPct}%
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* ── Slice reveal ── */}
          {phase === 'slice' &&
            Array.from({ length: SLICES }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-0 right-0"
                style={{
                  top: `${i * sliceHeight}%`,
                  height: `${sliceHeight + 0.1}%`,
                  background: '#050508',
                  zIndex: 10,
                }}
                initial={{ x: 0 }}
                animate={{ x: i % 2 === 0 ? '-100%' : '100%' }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.04,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
