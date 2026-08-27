export type StackGroup = {
  id: 'backend' | 'databases' | 'frontend' | 'devops'
  title: string
  featured?: boolean
  items: readonly string[]
}

export const coreStack = ['Node.js', 'NestJS', 'TypeScript', 'MySQL'] as const

export const stackGroups: StackGroup[] = [
  {
    id: 'backend',
    title: 'Backend',
    featured: true,
    items: [
      'TypeScript',
      'Node.js',
      'NestJS',
      'Express.js',
      'FastAPI',
      'APIs REST',
      'JWT',
    ],
  },
  {
    id: 'databases',
    title: 'Bases de datos y ORM',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'TypeORM'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['React', 'React Native', 'HTML', 'CSS', 'Bootstrap', 'PrimeReact'],
  },
  {
    id: 'devops',
    title: 'DevOps y herramientas',
    items: [
      'Git',
      'GitHub',
      'GitLab CI/CD',
      'Docker',
      'Kubernetes',
      'Linux',
      'SSH',
      'Jira',
    ],
  },
]
