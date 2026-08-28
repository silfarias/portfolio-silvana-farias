import type { IconType } from 'react-icons'

export type Technology = {
  name: string
  icon: IconType
}

export type TechnologyCategory = {
  id: string
  title: string
  technologies: Technology[]
  highlighted?: boolean
  wide?: boolean
}

export type ExploringStack = {
  title: string
  description: string
  technologies: Technology[]
}
