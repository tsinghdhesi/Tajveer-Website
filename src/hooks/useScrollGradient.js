import { useEffect, useState } from 'react'
import { useScroll, useMotionValue, transform } from 'framer-motion'

/**
 * Maps scrollY to a background colour using section-aligned stops, so each
 * colour lands on its section regardless of content length. Each stop is
 * { id, color, anchor } where anchor is 'top' (default) or 'mid'.
 */
export function useScrollGradient(stops) {
  const { scrollY } = useScroll()
  const color = useMotionValue(stops[0].color)
  const [ranges, setRanges] = useState(null)

  useEffect(() => {
    const measure = () => {
      const vh = window.innerHeight
      const input = []
      const output = []
      let prev = -1
      for (const stop of stops) {
        const el = document.getElementById(stop.id)
        if (!el) continue
        let y = el.offsetTop - vh * 0.5
        if (stop.anchor === 'mid') y += el.offsetHeight / 2
        y = Math.max(0, y)
        if (y <= prev) y = prev + 1
        prev = y
        input.push(y)
        output.push(stop.color)
      }
      if (input.length >= 2) setRanges({ input, output })
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(document.body)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [stops])

  useEffect(() => {
    if (!ranges) return
    const update = (y) => color.set(transform(y, ranges.input, ranges.output))
    update(scrollY.get())
    return scrollY.on('change', update)
  }, [ranges, scrollY, color])

  return color
}
