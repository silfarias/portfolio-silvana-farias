import type { Project, ProjectImage } from '../types/project'
import { resolveAssetImage } from './resolveAssetImage'

function isDirectUrl(src: string) {
  return src.startsWith('/') || src.startsWith('http') || src.startsWith('data:')
}

export function getProjectImages(project: Project): ProjectImage[] {
  if (project.images && project.images.length > 0) {
    return project.images.flatMap((image) => {
      const resolved =
        resolveAssetImage(image.src) ?? (isDirectUrl(image.src) ? image.src : undefined)

      if (!resolved) {
        return []
      }

      return [
        {
          src: resolved,
          alt: image.alt,
          caption: image.caption,
        },
      ]
    })
  }

  if (project.image) {
    const resolved =
      resolveAssetImage(project.image) ??
      (isDirectUrl(project.image) ? project.image : undefined)

    if (resolved) {
      return [{ src: resolved, alt: `Captura de ${project.name}` }]
    }
  }

  return []
}
