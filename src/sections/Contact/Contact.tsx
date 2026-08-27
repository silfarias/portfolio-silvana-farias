import { AnimateOnScroll } from '../../components/AnimateOnScroll/AnimateOnScroll'
import { Button } from '../../components/Button/Button'
import {
  DownloadIcon,
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
} from '../../components/icons/Icons'
import { contactContent } from '../../data/contact'
import { site } from '../../data/site'
import styles from './Contact.module.css'

export function Contact() {
  const mailto = `mailto:${site.email}`

  return (
    <section
      className={`section ${styles.contact}`}
      id="contacto"
      aria-labelledby="contacto-titulo"
    >
      <div className={`container ${styles.layout}`}>
        <AnimateOnScroll animation="fadeInLeft" className={styles.copy}>
          <h2 className={styles.heading} id="contacto-titulo">
            {contactContent.title}
          </h2>
          <p className={styles.lede}>{contactContent.lede}</p>
          <p className={styles.supporting}>{contactContent.supporting}</p>

          <div className={styles.actions}>
            <Button href={mailto} ariaLabel={`Enviar email a ${site.email}`}>
              <EmailIcon />
              Enviar email
            </Button>
            <Button
              href={site.cvPath}
              variant="secondary"
              download={site.cvFilename}
              ariaLabel="Descargar CV en PDF"
            >
              <DownloadIcon />
              Descargar CV
            </Button>
            <Button
              href={site.linkedinUrl}
              variant="secondary"
              external
              ariaLabel="LinkedIn, se abre en una pestaña nueva"
            >
              <LinkedInIcon />
              LinkedIn
            </Button>
            <Button
              href={site.githubUrl}
              variant="secondary"
              external
              ariaLabel="GitHub, se abre en una pestaña nueva"
            >
              <GitHubIcon />
              GitHub
            </Button>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll
          as="ul"
          animation="fadeInRight"
          delay={80}
          className={styles.channels}
          aria-label="Datos de contacto"
        >
          <li>
            <a className={styles.email} href={mailto}>
              <EmailIcon />
              <span>{site.email}</span>
            </a>
          </li>
          <li>
            <a
              className={styles.channel}
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn, se abre en una pestaña nueva"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              className={styles.channel}
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub, se abre en una pestaña nueva"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          </li>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
