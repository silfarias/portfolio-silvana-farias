import type { Technology } from '../../types/stack'
import styles from './TechnologyItem.module.css'

type TechnologyItemVariant = 'default' | 'core' | 'exploring'

type TechnologyItemProps = {
  technology: Technology
  variant?: TechnologyItemVariant
}

export function TechnologyItem({
  technology,
  variant = 'default',
}: TechnologyItemProps) {
  const Icon = technology.icon
  const className =
    variant === 'default'
      ? styles.item
      : `${styles.item} ${styles[variant]}`

  return (
    <span className={className}>
      <span className={styles.icon} aria-hidden="true">
        <Icon />
      </span>
      {technology.name}
    </span>
  )
}
