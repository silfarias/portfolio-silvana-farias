import { Button } from '../../components/Button/Button'
import type { Project } from '../../types/project'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const headingId = `${project.id}-nombre`
  const hasLinks = Boolean(project.liveUrl || project.repositoryUrl)

  return (
    <article className={styles.card} aria-labelledby={headingId}>
      <p className={styles.type}>{project.type}</p>
      <h3 className={styles.name} id={headingId}>
        {project.name}
      </h3>
      <p className={styles.description}>{project.description}</p>

      <ul className={styles.tech} aria-label="Tecnologías">
        {project.technologies.map((technology) => (
          <li className={styles.tag} key={technology}>
            {technology}
          </li>
        ))}
      </ul>

      {hasLinks ? (
        <div className={styles.actions}>
          {project.liveUrl ? (
            <Button href={project.liveUrl} variant="ghost" external>
              Ver proyecto
            </Button>
          ) : null}
          {project.repositoryUrl ? (
            <Button href={project.repositoryUrl} variant="ghost" external>
              Repositorio
            </Button>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}
