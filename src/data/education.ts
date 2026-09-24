import { FiCloud, FiCode } from 'react-icons/fi'
import type { EducationItem } from '../types/education'

export const education: EducationItem[] = [
  {
    id: 'tecnicatura-multiplataforma',
    code: '01',
    track: 'SOFTWARE',
    title: 'Tecnicatura Superior en Desarrollo de Software Multiplataforma',
    institution: 'Instituto Politécnico de Formosa',
    period: 'Marzo 2023 — Diciembre 2024',
    status: 'Finalizado',
    description:
      'Formación orientada al desarrollo de software multiplataforma, con fundamentos de programación, aplicaciones y sistemas.',
    icon: FiCode,
  },
  {
    id: 'diplomatura-devops',
    code: '02',
    track: 'DEVOPS',
    title: 'Diplomatura Universitaria en DevOps',
    institution: 'MundosE · Universidad Nacional de Córdoba',
    period: 'Noviembre 2025 — Presente',
    status: 'En curso',
    modality: 'Virtual',
    description:
      'Formación orientada a prácticas DevOps, automatización, integración y entrega continua, contenedores e infraestructura.',
    icon: FiCloud,
  },
]
