import { AnimateOnScroll } from '../../components/AnimateOnScroll/AnimateOnScroll'
import { coreStack, stackGroups } from '../../data/stack'
import styles from './Stack.module.css'

export function Stack() {
  return (
    <section className="section" id="stack" aria-labelledby="stack-titulo">
      <div className="container">
        <AnimateOnScroll
          as="h2"
          animation="fadeInUp"
          className={`section-title ${styles.title}`}
          id="stack-titulo"
        >
          Stack tecnológico
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeInUp" delay={80}>
          <div className={styles.core}>
            <p className={styles.coreLabel}>Stack principal</p>
            <ul className={styles.coreList}>
              {coreStack.map((technology, index) => (
                <li className={styles.coreItem} key={technology}>
                  {index > 0 ? (
                    <span className={styles.coreSeparator} aria-hidden="true">
                      ·
                    </span>
                  ) : null}
                  {technology}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.groups}>
            {stackGroups.map((group) => (
              <section
                className={
                  group.featured
                    ? `${styles.group} ${styles.groupFeatured}`
                    : styles.group
                }
                key={group.id}
                aria-labelledby={`stack-${group.id}`}
              >
                <h3 className={styles.groupTitle} id={`stack-${group.id}`}>
                  {group.title}
                </h3>
                <ul className={styles.tags}>
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className={styles.tag}>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
