import { FiCloud, FiDatabase, FiServer, FiShield, FiTerminal, FiUsers } from 'react-icons/fi'
import {
  SiBootstrap,
  SiCss,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrimereact,
  SiPython,
  SiReact,
  SiTerraform,
  SiTypeorm,
  SiTypescript,
} from 'react-icons/si'
import type { ExploringStack, Technology, TechnologyCategory } from '../types/stack'

const nodeJs: Technology = { name: 'Node.js', icon: SiNodedotjs }
const nestJs: Technology = { name: 'NestJS', icon: SiNestjs }
const typeScript: Technology = { name: 'TypeScript', icon: SiTypescript }
const mySql: Technology = { name: 'MySQL', icon: SiMysql }

export const coreStack: Technology[] = [nodeJs, nestJs, typeScript, mySql]

export const stackCategories: TechnologyCategory[] = [
  {
    id: 'languages',
    title: 'Lenguajes',
    technologies: [
      typeScript,
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Python', icon: SiPython },
      { name: 'SQL', icon: FiDatabase },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    highlighted: true,
    technologies: [
      nodeJs,
      nestJs,
      { name: 'Express.js', icon: SiExpress },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'APIs REST', icon: FiServer },
      { name: 'JWT', icon: FiShield },
    ],
  },
  {
    id: 'databases',
    title: 'Bases de datos y ORM',
    technologies: [
      mySql,
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'TypeORM', icon: SiTypeorm },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'React Native', icon: SiReact },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'PrimeReact', icon: SiPrimereact },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps y herramientas',
    wide: true,
    technologies: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'GitLab CI/CD', icon: SiGitlab },
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Linux', icon: SiLinux },
      { name: 'SSH', icon: FiTerminal },
      { name: 'Jira', icon: SiJira },
    ],
  },
  {
    id: 'methodologies',
    title: 'Metodologías',
    technologies: [{ name: 'Scrum', icon: FiUsers }],
  },
]

export const exploringStack: ExploringStack = {
  title: 'Actualmente explorando',
  description:
    'Tecnologías que estoy incorporando actualmente dentro de mi formación en DevOps.',
  technologies: [
    { name: 'Terraform', icon: SiTerraform },
    { name: 'AWS', icon: FiCloud },
  ],
}
