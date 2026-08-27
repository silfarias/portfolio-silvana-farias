import type { Project, ProjectImage } from '../types/project'
import { resolveAssetImage } from './resolveAssetImage'

export function getProjectImages(project: Project): ProjectImage[] {
  if (project.images && project.images.length > 0) {
    return project.images.flatMap((image) => {
      const resolved = resolveAssetImage(image.src) ?? (image.src.startsWith('/') ? image.src : undefined)

      if (!resolved) {
        return []
      }

      return [{ src: resolved, alt: image.alt }]
    })
  }

  if (project.image) {
    const resolved =
      resolveAssetImage(project.image) ??
      (project.image.startsWith('/') || project.image.startsWith('http')
        ? project.image
        : undefined)

    if (resolved) {
      return [{ src: resolved, alt: `Captura de ${project.name}` }]
    }
  }

  return []
}
