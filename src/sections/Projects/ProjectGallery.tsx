import type { CSSProperties, KeyboardEvent } from 'react'
import { useId, useState } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import type { ProjectImage } from '../../types/project'
import styles from './ProjectGallery.module.css'

type ProjectGalleryProps = {
  name: string
  images: readonly ProjectImage[]
}

export function ProjectGallery({ name, images }: ProjectGalleryProps) {
  const galleryId = useId()
  const [index, setIndex] = useState(0)
  const total = images.length
  const current = images[index] ?? images[0]
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  if (total === 0 || !current) {
    return null
  }

  const goTo = (nextIndex: number) => {
    setIndex((nextIndex + total) % total)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(index - 1)
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(index + 1)
    }

    if (event.key === 'Home') {
      event.preventDefault()
      goTo(0)
    }

    if (event.key === 'End') {
      event.preventDefault()
      goTo(total - 1)
    }
  }

  return (
    <div
      className={styles.gallery}
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Capturas de ${name}`}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className={styles.viewport} id={galleryId}>
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
              : ({ ['--animate-duration']: '420ms' } as CSSProperties)
          }
          src={current.src}
          alt={current.alt}
        />
      </div>

      {total > 1 ? (
        <div className={styles.controls}>
          <button
            className={styles.control}
            type="button"
            aria-label="Imagen anterior"
            onClick={() => goTo(index - 1)}
          >
            <Chevron direction="prev" />
          </button>

          <p className={styles.counter} aria-live="polite">
            {index + 1} / {total}
          </p>

          <button
            className={styles.control}
            type="button"
            aria-label="Imagen siguiente"
            onClick={() => goTo(index + 1)}
          >
            <Chevron direction="next" />
          </button>
        </div>
      ) : null}

      {total > 1 ? (
        <div className={styles.dots} role="tablist" aria-label="Seleccionar captura">
          {images.map((image, imageIndex) => (
            <button
              key={image.src}
              className={
                imageIndex === index ? `${styles.dot} ${styles.dotActive}` : styles.dot
              }
              type="button"
              role="tab"
              aria-selected={imageIndex === index}
              aria-label={`Mostrar captura ${imageIndex + 1} de ${total}`}
              aria-controls={galleryId}
              onClick={() => goTo(imageIndex)}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

function Chevron({ direction }: { direction: 'prev' | 'next' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {direction === 'prev' ? (
        <path
          fill="currentColor"
          d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
        />
      ) : (
        <path
          fill="currentColor"
          d="M9.59 7.41 11 6l6 6-6 6-1.41-1.41L14.17 12z"
        />
      )}
    </svg>
  )
}
