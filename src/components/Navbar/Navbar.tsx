import { useEffect, useId, useRef } from 'react'
import { GitHubIcon } from '../../components/icons/Icons'
import { navLinks, observedSectionIds } from '../../data/navigation'
import { site } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'
import styles from './Navbar.module.css'

type NavbarProps = {
  menuOpen: boolean
  onMenuOpenChange: (open: boolean) => void
}

export function Navbar({ menuOpen, onMenuOpenChange }: NavbarProps) {
  const navId = useId()
  const headerRef = useRef<HTMLElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const wasOpenRef = useRef(false)
  const scrolled = useScrolled()
  const activeHref = useActiveSection(observedSectionIds)
  const headerRaised = scrolled || menuOpen

  useEffect(() => {
    if (!menuOpen) {
      if (wasOpenRef.current) {
        toggleRef.current?.focus()
      }
      wasOpenRef.current = false
      return
    }

    wasOpenRef.current = true
    panelRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onMenuOpenChange(false)
      }
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        onMenuOpenChange(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen, onMenuOpenChange])

  const closeMenu = () => {
    onMenuOpenChange(false)
  }

  return (
    <header
      ref={headerRef}
      className={headerRaised ? `${styles.header} ${styles.headerRaised}` : styles.header}
    >
      <div className={styles.inner}>
        <a className={styles.brand} href="#inicio" onClick={closeMenu}>
          <span className={styles.mark} aria-hidden="true">
            {site.initials}
            <span className={styles.node} />
          </span>
          <span className={styles.brandCopy}>
            <span className={styles.name}>{site.name}</span>
            <span className={styles.role}>{site.role}</span>
          </span>
        </a>

        <button
          ref={toggleRef}
          className={styles.toggle}
          type="button"
          aria-expanded={menuOpen}
          aria-controls={navId}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => onMenuOpenChange(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div
          ref={panelRef}
          id={navId}
          className={menuOpen ? styles.panelOpen : styles.panel}
          tabIndex={menuOpen ? -1 : undefined}
        >
          <nav aria-label="Principal">
            <ul className={styles.list}>
              {navLinks.map((link) => {
                const isActive = activeHref === link.href

                return (
                  <li key={link.href}>
                    <a
                      className={
                        isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                      }
                      href={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <a
            className={styles.github}
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub, se abre en una pestaña nueva"
            onClick={closeMenu}
          >
            <GitHubIcon />
            <span className={styles.githubLabel} aria-hidden="true">
              GitHub
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}

function MenuIcon() {
  return (
    <svg
      className={styles.toggleIcon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      className={styles.toggleIcon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
