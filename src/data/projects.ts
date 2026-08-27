import type { Project } from '../types/project'

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
      'Aplicación Full Stack desarrollada para Formosa Ventas que permitió a clientes y seguidores participar gratuitamente de un Prode del Mundial FIFA 2026, registrar predicciones y competir por premios con un sistema automático de puntuación.',
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
      // Confirmar antes de mostrar: Redux Toolkit
    ],
    // Colocar en src/assets/ las capturas anonimizadas:
    // prode-email-verification.png, prode-ranking.png,
    // prode-match-results.png, prode-admin.png
    images: [
      {
        src: 'prode-email-verification.png',
        alt: 'Pantalla de verificación de cuenta por email del Prode Mundial 2026',
      },
      {
        src: 'prode-ranking.png',
        alt: 'Ranking de participantes del Prode Mundial 2026',
      },
      {
        src: 'prode-match-results.png',
        alt: 'Carga de resultados de partidos desde el panel de administración',
      },
      {
        src: 'prode-admin.png',
        alt: 'Panel de administración del Prode Mundial 2026',
      },
    ],
  },
  {
    id: 'sistema-administrativo',
    name: 'Sistema Administrativo Integral para Gestión Organizacional',
    type: 'Full Stack',
    featured: true,
    description:
      'Aplicación Full Stack desarrollada para administrar estructuras jerárquicas, personas, cargos y eventos organizacionales desde una única plataforma.',
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
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Google Maps API',
    ],
  },
]
