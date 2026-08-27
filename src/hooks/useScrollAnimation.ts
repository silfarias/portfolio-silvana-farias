import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from './useMediaQuery'

export type ScrollAnimationName =
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInLeft'
  | 'fadeInRight'

const listeners = new Map<Element, () => void>()

let observer: IntersectionObserver | null = null

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue
          }

          const onEnter = listeners.get(entry.target)

          if (!onEnter) {
            continue
          }

          onEnter()
          observer?.unobserve(entry.target)
          listeners.delete(entry.target)
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -8% 0px',
      },
    )
  }

  return observer
}

function isElementInView(element: Element) {
  const rect = element.getBoundingClientRect()
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0
}

function observeOnce(element: Element, onEnter: () => void) {
  if (!('IntersectionObserver' in window) || isElementInView(element)) {
    const frame = window.requestAnimationFrame(onEnter)
    return () => window.cancelAnimationFrame(frame)
  }

  listeners.set(element, onEnter)
  getObserver().observe(element)

  const fallback = window.setTimeout(() => {
    if (!listeners.has(element) || !isElementInView(element)) {
      return
    }

    listeners.delete(element)
    getObserver().unobserve(element)
    onEnter()
  }, 900)

  return () => {
    window.clearTimeout(fallback)
    listeners.delete(element)
    getObserver().unobserve(element)
  }
}

export function useScrollAnimation() {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  useEffect(() => {
    const node = ref.current

    if (!node || reducedMotion || isVisible) {
      return
    }

    return observeOnce(node, () => {
      setIsVisible(true)
    })
  }, [isVisible, reducedMotion])

  return {
    ref,
    isVisible,
    reducedMotion,
  }
}
