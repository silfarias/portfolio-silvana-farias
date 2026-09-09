import profilePhoto from '../../assets/perfil.webp'
import { AnimateOnScroll } from '../../components/AnimateOnScroll/AnimateOnScroll'
import { Button } from '../../components/Button/Button'
import { GitHubIcon } from '../../components/icons/Icons'
import { heroActions, heroContent } from '../../data/hero'
import { site } from '../../data/site'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="inicio" aria-labelledby="hero-nombre">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <AnimateOnScroll animation="fadeInLeft">
              <p className={styles.kicker}>{heroContent.kicker}</p>
              <h1 className={styles.name} id="hero-nombre">
                {site.name}
              </h1>
              <p className={styles.role}>{site.role}</p>
              <p className={styles.lede}>{heroContent.lede}</p>
              <p className={styles.supporting}>{heroContent.supporting}</p>

              <div className={styles.actions}>
                {heroActions.map((action) => (
                  <Button
                    key={action.href}
                    href={action.href}
                    variant={action.variant}
                    size="lg"
                  >
                    {action.label}
                  </Button>
                ))}
                <Button
                  href={site.githubUrl}
                  variant="ghost"
                  external
                  ariaLabel="GitHub, se abre en una pestaña nueva"
                >
                  <GitHubIcon />
                  GitHub
                </Button>
              </div>

              <ul className={styles.tech} aria-label="Tecnologías principales">
                {heroContent.technologies.map((technology) => (
                  <li className={styles.chip} key={technology}>
                    {technology}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeIn" delay={160}>
              <p className={styles.flow} aria-hidden="true">
                {heroContent.flow.map((step, index) => (
                  <span className={styles.flowStep} key={step}>
                    {index > 0 ? (
                      <span className={styles.flowConnector} />
                    ) : null}
                    <span className={styles.flowLabel}>{step}</span>
                  </span>
                ))}
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="fadeInRight" className={styles.portrait}>
            <div className={styles.portraitFrame}>
              <img
                className={styles.photo}
                src={profilePhoto}
                alt={`${site.name}, ${site.role}`}
                width={480}
                height={640}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
