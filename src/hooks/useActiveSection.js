import { useEffect, useState } from 'react'

/**
 * Tracks which section currently crosses the middle of the viewport.
 * `sections` is [{ id, ... }]; returns the active id.
 */
export function useActiveSection(sections) {
  const [activeId, setActiveId] = useState(sections[0]?.id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -54% 0px' }
    )
    for (const { id } of sections) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [sections])

  return activeId
}
