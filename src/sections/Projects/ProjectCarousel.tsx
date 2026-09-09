import { useId, useState, type CSSProperties, type KeyboardEvent } from 'react'
import { FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi'
import { ImageLightbox } from '../../components/ImageLightbox/ImageLightbox'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import type { ProjectImage } from '../../types/project'
import styles from './ProjectCarousel.module.css'

type ProjectCarouselProps = {
  name: string
  images: readonly ProjectImage[]
}

export function ProjectCarousel({ name, images }: ProjectCarouselProps) {
  const galleryId = useId()
  const [index, setIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
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
    if (lightboxOpen) {
      return
    }

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
      className={styles.carousel}
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Capturas de ${name}`}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className={styles.frame}>
        <div className={styles.chrome} aria-hidden="true">
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>

        <div className={styles.stage} id={galleryId}>
          <button
            className={styles.shot}
            type="button"
            aria-label={`Ampliar captura${current.caption ? `: ${current.caption}` : ''}`}
            onClick={() => setLightboxOpen(true)}
          >
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
                  : ({ ['--animate-duration']: '380ms' } as CSSProperties)
              }
              src={current.src}
              alt={current.alt}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <span className={styles.expand} aria-hidden="true">
              <FiMaximize2 />
            </span>
          </button>
        </div>

        {current.caption ? (
          <p className={styles.caption}>{current.caption}</p>
        ) : null}
      </div>

      {total > 1 ? (
        <div className={styles.controls}>
          <button
            className={styles.control}
            type="button"
            aria-label="Imagen anterior"
            onClick={() => goTo(index - 1)}
          >
            <FiChevronLeft aria-hidden="true" />
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
            <FiChevronRight aria-hidden="true" />
          </button>
        </div>
      ) : null}

      {total > 1 ? (
        <div className={styles.dots} role="tablist" aria-label="Seleccionar captura">
          {images.map((image, imageIndex) => (
            <button
              key={`${image.src}-${imageIndex}`}
              className={
                imageIndex === index ? `${styles.dotButton} ${styles.dotActive}` : styles.dotButton
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

      {lightboxOpen ? (
        <ImageLightbox
          images={images}
          index={index}
          label={name}
          onIndexChange={setIndex}
          onClose={() => setLightboxOpen(false)}
        />
      ) : null}
    </div>
  )
}
