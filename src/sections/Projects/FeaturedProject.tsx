import { AnimateOnScroll } from '../../components/AnimateOnScroll/AnimateOnScroll'
import { Button } from '../../components/Button/Button'
import { TechnicalFlow } from '../../components/TechnicalFlow/TechnicalFlow'
import type { Project } from '../../types/project'
import { ProjectPreview } from './ProjectPreview'
import styles from './FeaturedProject.module.css'

type FeaturedProjectProps = {
  project: Project
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const headingId = `${project.id}-nombre`
  const hasLinks = Boolean(project.liveUrl || project.repositoryUrl)

  return (
    <article className={styles.featured} aria-labelledby={headingId}>
      <div className={styles.content}>
        <p className={styles.type}>{project.type}</p>
        {project.client ? <p className={styles.client}>{project.client}</p> : null}
        <h3 className={styles.name} id={headingId}>
          {project.name}
        </h3>
        {project.context ? <p className={styles.context}>{project.context}</p> : null}
        <p className={styles.description}>{project.description}</p>

        {project.flow ? (
          <AnimateOnScroll animation="fadeIn">
            <TechnicalFlow steps={project.flow} />
          </AnimateOnScroll>
        ) : null}

        <ul className={styles.features}>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

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
              <Button href={project.liveUrl} external>
                Ver proyecto
              </Button>
            ) : null}
            {project.repositoryUrl ? (
              <Button
                href={project.repositoryUrl}
                variant="secondary"
                external
              >
                Repositorio
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className={styles.media}>
        <ProjectPreview project={project} />
      </div>
    </article>
  )
}
