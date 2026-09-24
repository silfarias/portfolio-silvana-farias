import type { Project } from '../types/project'
import { FiLayers, FiMapPin, FiSearch, FiShield } from 'react-icons/fi'

export const projects: Project[] = [
  {
    id: 'prode-mundial-2026',
    name: 'Prode Mundial 2026',
    client: 'Formosa Ventas',
    type: 'Full Stack',
    featured: true,
    context:
      'Plataforma de predicciones desarrollada para Formosa Ventas con motivo del Mundial FIFA 2026.',
    description:
      'Aplicación Full Stack que permitió a clientes y seguidores de Formosa Ventas participar gratuitamente de un Prode del Mundial FIFA 2026, registrar predicciones y competir por premios con un sistema automático de puntuación.',
    flow: ['prediction', 'result', 'scoring service', 'ranking'],
    features: [
      'Registro gratuito, inicio de sesión y verificación de cuenta por email',
      'Carga de pronósticos de fase de grupos, campeón y subcampeón antes del Mundial',
      'Sistema automático de puntuación según aciertos y ranking de participantes',
      'Definición de los tres participantes con mayor puntaje como ganadores de premios',
      'Panel de administración para cargar resultados reales y recalcular puntos',
    ],
    technologies: [
      'Node.js',
      'NestJS',
      'MySQL',
      'JWT',
      'Nodemailer',
      'Docker',
      'React',
      'Vercel',
    ],
    images: [
      {
        src: 'prode-mundial/inicio.webp',
        alt: 'Panel principal del Prode Mundial 2026 con resumen de puntos y posición',
        caption: 'Panel principal',
      },
      {
        src: 'prode-mundial/reglamento.webp',
        alt: 'Reglamento y sistema de puntuación del Prode Mundial 2026',
        caption: 'Reglamento y puntuación',
      },
      {
        src: 'prode-mundial/mi-prode.webp',
        alt: 'Fixture de partidos del Mundial con filtros y resultados',
        caption: 'Fixture de partidos',
      },
      {
        src: 'prode-mundial/mi-prode-2.webp',
        alt: 'Listado de partidos finalizados con consulta de aciertos',
        caption: 'Resultados de partidos',
      },
      {
        src: 'prode-mundial/ranking.webp',
        alt: 'Ranking de participantes del Prode Mundial 2026',
        caption: 'Ranking de participantes',
      },
      {
        src: 'prode-mundial/quien-acerto.webp',
        alt: 'Detalle de aciertos de un partido del Prode Mundial 2026',
        caption: 'Aciertos por partido',
      },
      {
        src: 'prode-mundial/admin-partidos.webp',
        alt: 'Panel de administración para cargar y editar resultados de partidos',
        caption: 'Administración de partidos',
      },
      {
        src: 'prode-mundial/admin-ranking.webp',
        alt: 'Panel de administración del ranking de participantes',
        caption: 'Administración del ranking',
      },
    ],
  },
  {
    id: 'sistema-administrativo',
    name: 'Sistema Administrativo Integral para Gestión Organizacional',
    type: 'Full Stack',
    featured: true,
    confidential: true,
    description:
      'Aplicación Full Stack desarrollada para administrar estructuras jerárquicas, personas, cargos y eventos organizacionales desde una única plataforma.',
    focus: 'Enfoque: gestión interna · consulta de información · seguridad',
    flow: ['request', 'middleware', 'service', 'database'],
    features: [
      'Gestión de estructuras jerárquicas',
      'Gestión de personas y cargos',
      'Administración de eventos',
      'Reportes dinámicos',
      'Filtros avanzados',
      'Buscador de información',
      'Visualización de ubicaciones mediante Google Maps',
      'Autenticación',
      'Validaciones mediante middleware personalizado',
    ],
    architectureModules: [
      {
        id: 'organizacional',
        title: 'Gestión organizacional',
        icon: FiLayers,
        items: ['Estructuras jerárquicas', 'Personas', 'Cargos'],
      },
      {
        id: 'eventos',
        title: 'Eventos y ubicación',
        icon: FiMapPin,
        items: ['Administración de eventos', 'Ubicaciones', 'Google Maps'],
      },
      {
        id: 'consulta',
        title: 'Consulta y análisis',
        icon: FiSearch,
        items: ['Reportes dinámicos', 'Filtros avanzados', 'Buscador'],
      },
      {
        id: 'seguridad',
        title: 'Seguridad',
        icon: FiShield,
        items: ['Autenticación', 'Validaciones', 'Middleware personalizado'],
      },
    ],
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Google Maps API',
    ],
  },
]
