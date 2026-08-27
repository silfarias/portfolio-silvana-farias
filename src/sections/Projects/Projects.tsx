import { AnimateOnScroll } from '../../components/AnimateOnScroll/AnimateOnScroll'
import { projects } from '../../data/projects'
import { FeaturedProject } from './FeaturedProject'
import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.css'

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section
      className="section"
      id="proyectos"
      aria-labelledby="proyectos-titulo"
    >
      <div className="container">
        <AnimateOnScroll
          as="h2"
          animation="fadeInUp"
          className={`section-title ${styles.title}`}
          id="proyectos-titulo"
        >
          Proyectos
        </AnimateOnScroll>

        {featuredProjects.length > 0 ? (
          <div className={styles.featuredList}>
            {featuredProjects.map((project) => (
              <FeaturedProject key={project.id} project={project} />
            ))}
          </div>
        ) : null}

        {otherProjects.length > 0 ? (
          <div className={styles.grid}>
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
