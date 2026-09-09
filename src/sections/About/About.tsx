import { AnimateOnScroll } from '../../components/AnimateOnScroll/AnimateOnScroll'
import {
  aboutHighlights,
  aboutParagraphs,
  aboutSnippet,
  aboutSnippetLabel,
} from '../../data/about'
import styles from './About.module.css'

export function About() {
  return (
    <section
      className="section"
      id="sobre-mi"
      aria-labelledby="sobre-mi-titulo"
    >
      <div className="container">
        <AnimateOnScroll
          as="h2"
          animation="fadeInUp"
          className={`section-title ${styles.title}`}
          id="sobre-mi-titulo"
        >
          Sobre mí
        </AnimateOnScroll>

        <div className={styles.layout}>
          <AnimateOnScroll animation="fadeInLeft" className={styles.copy}>
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </AnimateOnScroll>

          <AnimateOnScroll
            as="aside"
            animation="fadeInRight"
            delay={80}
            className={styles.aside}
            aria-label="Datos profesionales"
          >
            <ul className={styles.highlights}>
              {aboutHighlights.map((item) => (
                <li className={styles.item} key={item.label}>
                  <span className={styles.label}>{item.label}</span>
                  <span className={styles.value}>{item.value}</span>
                </li>
              ))}
            </ul>

            <div className={styles.snippetBlock}>
              <p className={styles.snippetLabel}>{aboutSnippetLabel}</p>
              <p className={styles.snippet} aria-hidden="true">
                {aboutSnippet}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
