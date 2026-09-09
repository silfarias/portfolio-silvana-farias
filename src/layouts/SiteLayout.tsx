import type { ReactNode } from 'react'
import { useState } from 'react'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { SkipLink } from '../components/SkipLink/SkipLink'
import { useMediaQuery } from '../hooks/useMediaQuery'
import styles from './SiteLayout.module.css'

type SiteLayoutProps = {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  const isDesktop = useMediaQuery('(min-width: 64rem)')
  const [menuOpen, setMenuOpen] = useState(false)
  const mobileMenuOpen = menuOpen && !isDesktop

  return (
    <div className={styles.layout}>
      <SkipLink />
      <Navbar
        menuOpen={mobileMenuOpen}
        onMenuOpenChange={(open) => {
          if (!isDesktop) {
            setMenuOpen(open)
          }
        }}
      />
      <div className={styles.content} inert={mobileMenuOpen || undefined}>
        <main
          id="contenido-principal"
          className={styles.main}
          tabIndex={-1}
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
