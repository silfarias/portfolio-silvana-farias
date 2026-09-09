import { TechnicalFlow } from '../../components/TechnicalFlow/TechnicalFlow'
import type { ArchitectureModule, Project } from '../../types/project'
import styles from './ProjectArchitecturePanel.module.css'

type ProjectArchitecturePanelProps = {
  project: Project
}

export function ProjectArchitecturePanel({
  project,
}: ProjectArchitecturePanelProps) {
  const modules = project.architectureModules

  if (!modules || modules.length === 0) {
    return null
  }

  return (
    <aside
      className={styles.panel}
      aria-label={`Arquitectura funcional de ${project.name}`}
    >
      <header className={styles.header}>
        <p className={styles.kicker}>Arquitectura funcional</p>
        <p className={styles.subtitle}>Módulos del sistema</p>
      </header>

      <div className={styles.modules}>
        {modules.map((module, index) => (
          <ArchitectureModuleCard
            module={module}
            showConnector={index < modules.length - 1}
            key={module.id}
          />
        ))}
      </div>

      {project.flow ? (
        <div className={styles.flowBlock}>
          <p className={styles.flowLabel}>Flujo técnico</p>
          <TechnicalFlow steps={project.flow} />
        </div>
      ) : null}
    </aside>
  )
}

type ArchitectureModuleCardProps = {
  module: ArchitectureModule
  showConnector: boolean
}

function ArchitectureModuleCard({
  module,
  showConnector,
}: ArchitectureModuleCardProps) {
  const Icon = module.icon

  return (
    <div className={styles.moduleWrap}>
      <section className={styles.module} aria-labelledby={`${module.id}-titulo`}>
        <h4 className={styles.moduleTitle} id={`${module.id}-titulo`}>
          <span className={styles.moduleIcon} aria-hidden="true">
            <Icon />
          </span>
          {module.title}
        </h4>
        <ul className={styles.moduleItems}>
          {module.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      {showConnector ? (
        <div className={styles.connector} aria-hidden="true">
          <span className={styles.node} />
        </div>
      ) : null}
    </div>
  )
}
