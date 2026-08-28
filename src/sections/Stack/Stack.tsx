import { AnimateOnScroll } from '../../components/AnimateOnScroll/AnimateOnScroll'
import { coreStack, exploringStack, stackCategories } from '../../data/stack'
import { TechnologyCategory } from './TechnologyCategory'
import { TechnologyItem } from './TechnologyItem'
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

        <AnimateOnScroll
          animation="fadeInUp"
          delay={80}
          className={styles.core}
          aria-labelledby="stack-principal"
        >
          <h3 className={styles.coreLabel} id="stack-principal">
            Stack principal
          </h3>
          <ul className={styles.coreList}>
            {coreStack.map((technology) => (
              <li key={technology.name}>
                <TechnologyItem technology={technology} variant="core" />
              </li>
            ))}
          </ul>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeInUp" delay={160} className={styles.lower}>
          <div className={styles.groups}>
            {stackCategories.map((category) => (
              <TechnologyCategory category={category} key={category.id} />
            ))}
          </div>

          <aside
            className={styles.exploring}
            aria-labelledby="stack-explorando"
          >
            <h3 className={styles.exploringTitle} id="stack-explorando">
              {exploringStack.title}
            </h3>
            <p className={styles.exploringDescription}>
              {exploringStack.description}
            </p>
            <ul className={styles.exploringList}>
              {exploringStack.technologies.map((technology) => (
                <li key={technology.name}>
                  <TechnologyItem technology={technology} variant="exploring" />
                </li>
              ))}
            </ul>
          </aside>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
