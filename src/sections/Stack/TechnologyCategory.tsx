import type { TechnologyCategory as TechnologyCategoryData } from '../../types/stack'
import { TechnologyItem } from './TechnologyItem'
import styles from './TechnologyCategory.module.css'

type TechnologyCategoryProps = {
  category: TechnologyCategoryData
}

export function TechnologyCategory({ category }: TechnologyCategoryProps) {
  const className = [
    styles.group,
    category.highlighted ? styles.highlighted : undefined,
    category.wide ? styles.wide : undefined,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={className} aria-labelledby={`stack-${category.id}`}>
      <h3 className={styles.title} id={`stack-${category.id}`}>
        {category.title}
      </h3>
      <ul className={styles.list}>
        {category.technologies.map((technology) => (
          <li key={technology.name}>
            <TechnologyItem technology={technology} />
          </li>
        ))}
      </ul>
    </section>
  )
}
