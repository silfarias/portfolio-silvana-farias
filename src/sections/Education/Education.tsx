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

        <div className={styles.track}>
          {education.map((item, index) => (
            <EducationEntry
              item={item}
              delay={index === 0 ? 80 : 170}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

type EducationEntryProps = {
  item: EducationItem
  delay: number
}

function EducationEntry({ item, delay }: EducationEntryProps) {
  const headingId = `${item.id}-titulo`
  const isCurrent = item.status === 'En curso'
  const Icon = item.icon

  return (
    <AnimateOnScroll
      as="article"
      animation="fadeInUp"
      delay={delay}
      className={isCurrent ? `${styles.item} ${styles.itemCurrent}` : styles.item}
      aria-labelledby={headingId}
    >
      <div className={styles.axis} aria-hidden="true">
        <span className={styles.node} />
      </div>

      <div className={styles.body}>
        <div className={styles.kicker}>
          <p className={styles.index}>
            {item.code}
            <span className={styles.indexDivider}> / </span>
            {item.track}
          </p>
          <span className={styles.icon}>
            <Icon />
          </span>
        </div>

        <div className={styles.layout}>
          <div className={styles.content}>
            <h3 className={styles.name} id={headingId}>
              {item.title}
            </h3>
            <p className={styles.institution}>{item.institution}</p>
            {item.modality ? (
              <p className={styles.modality}>{item.modality}</p>
            ) : null}
            <p className={styles.description}>{item.description}</p>
          </div>

          <div className={styles.meta}>
            <p
              className={
                isCurrent ? `${styles.badge} ${styles.badgeCurrent}` : styles.badge
              }
            >
              {item.status}
            </p>
            <p className={styles.period}>{item.period}</p>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  )
}
