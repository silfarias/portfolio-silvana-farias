import {
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiMap,
  FiServer,
  FiTerminal,
  FiUsers,
} from 'react-icons/fi'
import type { ExperienceItem } from '../types/experience'

export const experiences: ExperienceItem[] = [
  {
    id: 'push-software',
    code: '01',
    track: 'PUSH SOFTWARE',
    role: 'Desarrolladora Full Stack',
    organization: 'Clúster de Innovación Tecnológica Formosa',
    organizationLink: {
      label: 'PUSH Software',
      href: 'https://www.pushsoftware.com.ar/',
      ariaLabel: 'Sitio web de PUSH Software (se abre en una nueva pestaña)',
    },
    period: 'Marzo 2025 — Julio 2026',
    featured: true,
    label: 'Experiencia reciente',
    summary:
      'Desarrollo de módulos backend para sistemas internos utilizando NestJS, TypeORM y MySQL, con foco en APIs REST, autenticación, autorización y lógica de negocio.',
    responsibilityGroups: [
      {
        id: 'backend',
        title: 'Backend',
        icon: FiServer,
        items: [
          'Diseño e implementación de APIs REST',
          'Autenticación mediante JWT',
          'Autorización con roles, módulos y permisos',
        ],
      },
      {
        id: 'data',
        title: 'Data',
        icon: FiDatabase,
        items: [
          'Modelado de bases de datos relacionales',
          'Optimización de consultas utilizadas por distintos procesos del sistema',
        ],
      },
      {
        id: 'entornos',
        title: 'Entornos',
        icon: FiTerminal,
        items: [
          'Participación en mantenimiento de aplicaciones productivas y trabajo con entornos Docker, Kubernetes y SSH',
        ],
      },
      {
        id: 'team',
        title: 'Equipo',
        icon: FiUsers,
        items: [
          'Trabajo conjunto con frontend, diseño y QA bajo Scrum',
        ],
      },
    ],
    flow: ['request', 'auth', 'business logic', 'database', 'containers'],
    technologies: [
      'NestJS',
      'TypeScript',
      'TypeORM',
      'MySQL',
      'JWT',
      'Docker',
      'Kubernetes',
      'SSH',
    ],
  },
  {
    id: 'sistema-administrativo',
    code: '02',
    track: 'FREELANCE',
    role: 'Desarrolladora Full Stack - Freelance',
    organization:
      'Sistema Administrativo Integral para Gestión Organizacional',
    period: 'Octubre 2024 — Julio 2025',
    summary:
      'Diseño y desarrollo de una aplicación Full Stack para gestionar estructuras jerárquicas, personas, cargos y eventos organizacionales, trabajando directamente con el cliente.',
    responsibilityGroups: [
      {
        id: 'domain',
        title: 'Dominio',
        icon: FiLayers,
        items: [
          'Gestión de estructuras jerárquicas',
          'Gestión de personas y cargos',
          'Administración de eventos',
        ],
      },
      {
        id: 'consulta',
        title: 'Consulta',
        icon: FiMap,
        items: [
          'Reportes dinámicos',
          'Filtros avanzados y buscadores',
          'Integración con Google Maps API',
        ],
      },
      {
        id: 'entrega',
        title: 'Entrega',
        icon: FiGitBranch,
        items: [
          'Autenticación y validaciones mediante middleware personalizado',
          'Gestión de versiones mediante GitHub',
          'Coordinación directa con el cliente',
        ],
      },
    ],
    flow: ['client', 'frontend', 'API', 'database', 'maps'],
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
