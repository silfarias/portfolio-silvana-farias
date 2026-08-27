import { AnimateOnScroll } from '../../components/AnimateOnScroll/AnimateOnScroll'
import { experiences, type ExperienceItem } from '../../data/experience'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section
      className="section"
      id="experiencia"
      aria-labelledby="experiencia-titulo"
    >
      <div className="container">
        <AnimateOnScroll
          as="h2"
          animation="fadeInUp"
          className={`section-title ${styles.title}`}
          id="experiencia-titulo"
        >
          Experiencia profesional
        </AnimateOnScroll>

        <div className={styles.list}>
          {experiences.map((experience, index) => (
            <ExperienceBlock
              experience={experience}
              delay={index === 0 ? 0 : 90}
              key={experience.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

type ExperienceBlockProps = {
  experience: ExperienceItem
  delay: number
}

function ExperienceBlock({ experience, delay }: ExperienceBlockProps) {
  const headingId = `${experience.id}-rol`

  return (
    <AnimateOnScroll
      as="article"
      animation="fadeInUp"
      delay={delay}
      className={
        experience.featured
          ? `${styles.block} ${styles.blockFeatured}`
          : styles.block
      }
      aria-labelledby={headingId}
    >
      <header className={styles.header}>
        <div className={styles.heading}>
          {experience.label ? (
            <p className={styles.label}>{experience.label}</p>
          ) : null}
          <h3 className={styles.role} id={headingId}>
            {experience.role}
          </h3>
          <p className={styles.organization}>{experience.organization}</p>
        </div>
        <p className={styles.period}>{experience.period}</p>
      </header>

      <p className={styles.summary}>{experience.summary}</p>

      <ul className={styles.highlights}>
        {experience.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ul className={styles.tech} aria-label="Tecnologías principales">
        {experience.technologies.map((technology) => (
          <li className={styles.tag} key={technology}>
            {technology}
          </li>
        ))}
      </ul>
    </AnimateOnScroll>
  )
}
