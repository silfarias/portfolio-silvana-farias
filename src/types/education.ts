import type { IconType } from 'react-icons'

export type EducationStatus = 'Finalizado' | 'En curso'

export type EducationItem = {
  id: string
  code: string
  track: string
  title: string
  institution: string
  period: string
  status: EducationStatus
  description: string
  icon: IconType
  modality?: string
}
