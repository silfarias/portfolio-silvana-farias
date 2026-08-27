import { AnimateOnScroll } from '../../components/AnimateOnScroll/AnimateOnScroll'
import { GitHubIcon, LinkedInIcon } from '../../components/icons/Icons'
import { site } from '../../data/site'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <AnimateOnScroll animation="fadeIn" className={styles.inner}>
        <p className={styles.kicker}>
          END / 07
          <span className={styles.kickerRule} aria-hidden="true" />
        </p>

        <div className={styles.row}>
          <div className={styles.identity}>
            <p className={styles.name}>{site.name}</p>
            <p className={styles.role}>{site.role}</p>
          </div>

          <nav className={styles.links} aria-label="Redes sociales">
            <a
              className={styles.link}
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub, se abre en una pestaña nueva"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              className={styles.link}
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn, se abre en una pestaña nueva"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </nav>

          <div className={styles.meta}>
            <p className={styles.status}>
              <span className={styles.node} aria-hidden="true" />
              <span>response: </span>
              <span className={styles.code}>200 OK</span>
            </p>
            <p className={styles.year}>© {year}</p>
          </div>
        </div>
      </AnimateOnScroll>
    </footer>
  )
}
