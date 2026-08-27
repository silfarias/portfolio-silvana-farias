import { ProjectGallery } from './ProjectGallery'
import { getProjectImages } from '../../data/getProjectImages'
import type { Project } from '../../types/project'
import styles from './ProjectPreview.module.css'

type ProjectPreviewProps = {
  project: Project
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  const images = getProjectImages(project)

  if (images.length > 0) {
    return (
      <ProjectGallery
        key={images.map((image) => image.src).join('|')}
        name={project.name}
        images={images}
      />
    )
  }

  return (
    <div
      className={styles.frame}
      role="img"
      aria-label={`Espacio reservado para capturas de ${project.name}`}
    >
      <div className={styles.chrome} aria-hidden="true">
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
      <div className={styles.screen} aria-hidden="true">
        <p className={styles.mark}>{'{ screenshot }'}</p>
      </div>
    </div>
  )
}
