import styles from './TechnicalFlow.module.css'

type TechnicalFlowProps = {
  steps: readonly string[]
}

export function TechnicalFlow({ steps }: TechnicalFlowProps) {
  if (steps.length === 0) {
    return null
  }

  return (
    <ol
      className={styles.flow}
      aria-label={`Flujo técnico: ${steps.join(', ')}`}
    >
      {steps.map((step, index) => (
        <li className={styles.step} key={`${step}-${index}`}>
          {index > 0 ? (
            <span className={styles.connector} aria-hidden="true" />
          ) : null}
          <span className={styles.label}>{step}</span>
        </li>
      ))}
    </ol>
  )
}
