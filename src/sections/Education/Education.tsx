import { AnimateOnScroll } from '../../components/AnimateOnScroll/AnimateOnScroll'
import { education } from '../../data/education'
import type { EducationItem } from '../../types/education'
import styles from './Education.module.css'

export function Education() {
  return (
    <section
      className="section"
      id="educacion"
      aria-labelledby="educacion-titulo"
    >
      <div className="container">
        <AnimateOnScroll
          as="h2"
          animation="fadeInUp"
          className={`section-title ${styles.title}`}
          id="educacion-titulo"
        >
          Educación
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeInUp" delay={80} className={styles.list}>
          {education.map((item) => (
            <EducationRow item={item} key={item.id} />
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  )
}

type EducationRowProps = {
  item: EducationItem
}

function EducationRow({ item }: EducationRowProps) {
  const headingId = `${item.id}-titulo`
  const isCurrent = item.status === 'En curso'

  return (
    <article className={styles.item} aria-labelledby={headingId}>
      <h3 className={styles.name} id={headingId}>
        {item.title}
      </h3>
      <p className={styles.institution}>{item.institution}</p>
      {item.modality ? (
        <p className={styles.modality}>{item.modality}</p>
      ) : null}
      <p className={styles.period}>{item.period}</p>
      <p
        className={isCurrent ? `${styles.badge} ${styles.badgeCurrent}` : styles.badge}
      >
        {item.status}
      </p>
    </article>
  )
}
