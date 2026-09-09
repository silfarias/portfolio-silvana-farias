import { AnimateOnScroll } from '../../components/AnimateOnScroll/AnimateOnScroll'
import { Button } from '../../components/Button/Button'
import { TechnicalFlow } from '../../components/TechnicalFlow/TechnicalFlow'
import { getProjectImages } from '../../data/getProjectImages'
import type { Project } from '../../types/project'
import { ProjectPreview } from './ProjectPreview'
import styles from './FeaturedProject.module.css'

type FeaturedProjectProps = {
  project: Project
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const headingId = `${project.id}-nombre`
  const hasLinks = Boolean(project.liveUrl || project.repositoryUrl)
  const hasArchitecturePanel = Boolean(
    project.architectureModules && project.architectureModules.length > 0,
  )
  const hasImages = getProjectImages(project).length > 0
  const hasPreview = hasImages || hasArchitecturePanel
  const showInlineFlow = Boolean(project.flow) && !hasArchitecturePanel
  const showFeatureList = !hasArchitecturePanel

  return (
    <AnimateOnScroll
      as="article"
      animation="fadeInUp"
      className={styles.featured}
      aria-labelledby={headingId}
    >
      <div className={styles.content}>
        <div className={styles.metaRow}>
          <p className={styles.type}>{project.type}</p>
          {project.confidential ? (
            <span className={styles.confidential}>Proyecto confidencial</span>
          ) : null}
        </div>
        {project.client ? <p className={styles.client}>{project.client}</p> : null}
        <h3 className={styles.name} id={headingId}>
          {project.name}
        </h3>
        {project.context ? <p className={styles.context}>{project.context}</p> : null}
        <p className={styles.description}>{project.description}</p>
        {project.focus ? <p className={styles.focus}>{project.focus}</p> : null}

        {showInlineFlow && project.flow ? (
          <AnimateOnScroll animation="fadeIn">
            <TechnicalFlow steps={project.flow} />
          </AnimateOnScroll>
        ) : null}

        {showFeatureList ? (
          <ul className={styles.features}>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        ) : null}

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

      {hasPreview ? (
        <AnimateOnScroll animation="fadeIn" delay={80} className={styles.media}>
          <ProjectPreview project={project} />
        </AnimateOnScroll>
      ) : null}
    </AnimateOnScroll>
  )
}
