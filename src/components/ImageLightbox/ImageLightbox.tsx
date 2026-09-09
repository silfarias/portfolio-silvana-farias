import {
  useCallback,
  useEffect,
  useId,
  useRef,
  type AnimationEvent,
  type CSSProperties,
} from 'react'
import { createPortal } from 'react-dom'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import type { ProjectImage } from '../../types/project'
import styles from './ImageLightbox.module.css'

const FOCUSABLE =
  'button:not([disabled]):not([tabindex="-1"]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

type ImageLightboxProps = {
  images: readonly ProjectImage[]
  index: number
  label: string
  onIndexChange: (index: number) => void
  onClose: () => void
}

export function ImageLightbox({
  images,
  index,
  label,
  onIndexChange,
  onClose,
}: ImageLightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const restoreFocusRef = useRef<HTMLElement | null>(null)
  const closingRef = useRef(false)
  const captionId = useId()
  const total = images.length
  const current = images[index] ?? images[0]
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  const goTo = useCallback(
    (nextIndex: number) => {
      onIndexChange((nextIndex + total) % total)
    },
    [onIndexChange, total],
  )

  const requestClose = useCallback(() => {
    if (reducedMotion || closingRef.current) {
      onClose()
      return
    }

    const overlay = overlayRef.current
    if (!overlay) {
      onClose()
      return
    }

    closingRef.current = true
    overlay.classList.add(styles.closing)
  }, [onClose, reducedMotion])

  useEffect(() => {
    restoreFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null

    const root = document.getElementById('root')
    const html = document.documentElement
    const { body } = document
    const scrollbarGap = window.innerWidth - html.clientWidth
    const previousHtmlOverflow = html.style.overflow
    const previousBodyOverflow = body.style.overflow
    const previousBodyPadding = body.style.paddingRight

    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    if (scrollbarGap > 0) {
      body.style.paddingRight = `${scrollbarGap}px`
    }
    root?.setAttribute('inert', '')
    closeRef.current?.focus()

    return () => {
      html.style.overflow = previousHtmlOverflow
      body.style.overflow = previousBodyOverflow
      body.style.paddingRight = previousBodyPadding
      root?.removeAttribute('inert')
      restoreFocusRef.current?.focus()
    }
  }, [])

  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        requestClose()
        return
      }

      if (event.key === 'ArrowLeft' && total > 1) {
        event.preventDefault()
        goTo(index - 1)
        return
      }

      if (event.key === 'ArrowRight' && total > 1) {
        event.preventDefault()
        goTo(index + 1)
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const focusable = [...overlay.querySelectorAll<HTMLElement>(FOCUSABLE)]
      if (focusable.length === 0) {
        event.preventDefault()
        overlay.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [goTo, index, requestClose, total])

  const onOverlayAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || !closingRef.current) {
      return
    }

    onClose()
  }

  if (!current) {
    return null
  }

  return createPortal(
    <div
      ref={overlayRef}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={current.caption ? undefined : `Capturas de ${label}`}
      aria-labelledby={current.caption ? captionId : undefined}
      tabIndex={-1}
      onAnimationEnd={onOverlayAnimationEnd}
    >
      <div className={styles.backdrop} onClick={requestClose} />

      <button
        ref={closeRef}
        className={styles.close}
        type="button"
        aria-label="Cerrar visor de capturas"
        onClick={requestClose}
      >
        <FiX aria-hidden="true" />
      </button>

      <div className={styles.stage}>
        {total > 1 ? (
          <button
            className={styles.nav}
            type="button"
            aria-label="Imagen anterior"
            onClick={() => goTo(index - 1)}
          >
            <FiChevronLeft aria-hidden="true" />
          </button>
        ) : null}

        <figure className={styles.panel}>
          <img
            key={current.src}
            className={
              reducedMotion
                ? styles.image
                : `${styles.image} animate__animated animate__fadeIn`
            }
            style={
              reducedMotion
                ? undefined
                : ({ ['--animate-duration']: '360ms' } as CSSProperties)
            }
            src={current.src}
            alt={current.alt}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
          <figcaption className={styles.meta}>
            <span className={styles.caption} id={captionId}>
              {current.caption ?? label}
            </span>
            <span className={styles.counter} aria-live="polite">
              {index + 1} / {total}
            </span>
          </figcaption>
        </figure>

        {total > 1 ? (
          <button
            className={styles.nav}
            type="button"
            aria-label="Imagen siguiente"
            onClick={() => goTo(index + 1)}
          >
            <FiChevronRight aria-hidden="true" />
          </button>
        ) : null}
      </div>
    </div>,
    document.body,
  )
}
