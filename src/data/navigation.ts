import type { NavLink } from '../types/navigation'

export const navLinks: NavLink[] = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#stack', label: 'Stack' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#educacion', label: 'Educación' },
  { href: '#contacto', label: 'Contacto' },
]

export const observedSectionIds = [
  'inicio',
  ...navLinks.map((link) => link.href.slice(1)),
] as const
