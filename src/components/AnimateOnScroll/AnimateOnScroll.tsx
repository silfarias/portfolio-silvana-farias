import { createElement, type CSSProperties, type ReactNode } from 'react'
import {
  useScrollAnimation,
  type ScrollAnimationName,
} from '../../hooks/useScrollAnimation'

type AnimateTag =
  | 'div'
  | 'h2'
  | 'p'
  | 'ul'
  | 'article'
  | 'aside'
  | 'section'
  | 'footer'

type AnimateOnScrollProps = {
  as?: AnimateTag
  animation: ScrollAnimationName
  delay?: number
  className?: string
  id?: string
  children: ReactNode
  'aria-labelledby'?: string
  'aria-label'?: string
  'aria-hidden'?: boolean
}

export function AnimateOnScroll({
  as = 'div',
  animation,
  delay = 0,
  className,
  id,
  children,
  ...aria
}: AnimateOnScrollProps) {
  const { ref, isVisible, reducedMotion } = useScrollAnimation()
  const shouldAnimate = isVisible && !reducedMotion
  const classes = [
    className,
    shouldAnimate ? `animate__animated animate__${animation}` : undefined,
  ]
    .filter(Boolean)
    .join(' ')

  const style =
    delay > 0 && !reducedMotion
      ? ({ ['--animate-delay']: `${delay}ms` } as CSSProperties)
      : undefined

  return createElement(
    as,
    {
      ref: ref as never,
      id,
      className: classes || undefined,
      style,
      'data-animate': reducedMotion ? undefined : '',
      ...aria,
    },
    children,
  )
}
