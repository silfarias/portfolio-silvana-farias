export type EducationStatus = 'Finalizado' | 'En curso'

export type EducationItem = {
  id: string
  title: string
  institution: string
  period: string
  status: EducationStatus
  modality?: string
}
