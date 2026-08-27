export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  id: string
  name: string
  type: string
  description: string
  features: readonly string[]
  technologies: readonly string[]
  featured?: boolean
  client?: string
  context?: string
  image?: string
  images?: readonly ProjectImage[]
  flow?: readonly string[]
  repositoryUrl?: string
  liveUrl?: string
}
