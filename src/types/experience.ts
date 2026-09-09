import type { IconType } from 'react-icons'

export type ResponsibilityGroup = {
  id: string
  title: string
  icon: IconType
  items: readonly string[]
}

export type ExperienceItem = {
  id: string
  code: string
  track: string
  role: string
  organization: string
  period: string
  summary: string
  responsibilityGroups: readonly ResponsibilityGroup[]
  technologies: readonly string[]
  flow?: readonly string[]
  featured?: boolean
  label?: string
  organizationLink?: {
    label: string
    href: string
    ariaLabel: string
  }
}
