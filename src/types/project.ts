import type { IconType } from 'react-icons'

export type ProjectImage = {
  src: string
  alt: string
  caption?: string
}

export type ArchitectureModule = {
  id: string
  title: string
  icon: IconType
  items: readonly string[]
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
  confidential?: boolean
  focus?: string
  image?: string
  images?: readonly ProjectImage[]
  architectureModules?: readonly ArchitectureModule[]
  flow?: readonly string[]
  repositoryUrl?: string
  liveUrl?: string
}
