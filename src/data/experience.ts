export type ExperienceItem = {
  id: string
  role: string
  organization: string
  period: string
  featured?: boolean
  label?: string
  summary: string
  highlights: readonly string[]
  technologies: readonly string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 'push-software',
    role: 'Desarrolladora Full Stack',
    organization:
      'PUSH Software - Clúster de Innovación Tecnológica Formosa',
    period: 'Marzo 2025 — Julio 2026',
    featured: true,
    label: 'Experiencia reciente',
    summary:
      'Desarrollo de módulos backend para sistemas internos con NestJS, TypeORM y MySQL, incluyendo el diseño e implementación de APIs REST.',
    highlights: [
      'Autenticación mediante JWT y autorización con roles, módulos y permisos.',
      'Modelado de bases de datos relacionales y optimización de consultas utilizadas por distintos procesos del sistema.',
      'Mantenimiento y despliegue de aplicaciones productivas con Docker, Kubernetes y SSH.',
      'Trabajo conjunto con frontend, diseño y QA bajo metodología Scrum.',
    ],
    technologies: [
      'NestJS',
      'TypeScript',
      'TypeORM',
      'MySQL',
      'JWT',
      'Docker',
      'Kubernetes',
    ],
  },
  {
    id: 'sistema-administrativo',
    role: 'Desarrolladora Full Stack - Freelance',
    organization:
      'Sistema Administrativo Integral para Gestión Organizacional',
    period: 'Octubre 2024 — Julio 2025',
    summary:
      'Diseño y desarrollo de una aplicación Full Stack para gestionar estructuras jerárquicas, personas, cargos y eventos organizacionales, en coordinación directa con el cliente.',
    highlights: [
      'Implementación de reportes dinámicos, filtros avanzados y buscadores para consulta de información.',
      'Integración de Google Maps API para visualizar ubicaciones de eventos y usuarios.',
      'Autenticación y validaciones mediante middleware personalizado.',
      'Desarrollo con React, Node.js, Express y MongoDB, y gestión de versiones en GitHub.',
    ],
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Google Maps API',
      'GitHub',
    ],
  },
]
