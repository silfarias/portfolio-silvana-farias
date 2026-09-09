import { ProjectArchitecturePanel } from './ProjectArchitecturePanel'
import { ProjectCarousel } from './ProjectCarousel'
import { getProjectImages } from '../../data/getProjectImages'
import type { Project } from '../../types/project'

type ProjectPreviewProps = {
  project: Project
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  const images = getProjectImages(project)

  if (images.length > 0) {
    return (
      <ProjectCarousel
        key={images.map((image) => image.src).join('|')}
        name={project.name}
        images={images}
      />
    )
  }

  if (project.architectureModules && project.architectureModules.length > 0) {
    return <ProjectArchitecturePanel project={project} />
  }

  return null
}
