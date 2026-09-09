import { AnimateOnScroll } from '../../components/AnimateOnScroll/AnimateOnScroll'
import { TechnicalFlow } from '../../components/TechnicalFlow/TechnicalFlow'
import { experiences } from '../../data/experience'
import type {
  ExperienceItem,
  ResponsibilityGroup,
} from '../../types/experience'
import { FiExternalLink } from 'react-icons/fi'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section
      className="section"
      id="experiencia"
      aria-labelledby="experiencia-titulo"
    >
      <div className="container">
        <AnimateOnScroll
          as="h2"
          animation="fadeInUp"
          className={`section-title ${styles.title}`}
          id="experiencia-titulo"
        >
          Experiencia profesional
        </AnimateOnScroll>

        <div className={styles.list}>
          {experiences.map((experience, index) => (
            <ExperienceBlock
              experience={experience}
              delay={index === 0 ? 80 : 170}
              key={experience.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

type ExperienceBlockProps = {
  experience: ExperienceItem
  delay: number
}

function ExperienceBlock({ experience, delay }: ExperienceBlockProps) {
  const headingId = `${experience.id}-rol`
  const isFeatured = Boolean(experience.featured)

  return (
    <AnimateOnScroll
      as="article"
      animation="fadeInUp"
      delay={delay}
      className={isFeatured ? `${styles.block} ${styles.blockFeatured}` : styles.block}
      aria-labelledby={headingId}
    >
      <div className={styles.kicker}>
        <p className={styles.index}>
          {experience.code}
          <span className={styles.indexDivider}> / </span>
          {experience.track}
        </p>
        {experience.label ? (
          <span className={styles.badge}>{experience.label}</span>
        ) : null}
      </div>

      <header className={styles.header}>
        <div className={styles.heading}>
          <h3 className={styles.role} id={headingId}>
            {experience.role}
          </h3>
          <OrganizationLine experience={experience} />
        </div>
        <p className={styles.period}>{experience.period}</p>
      </header>

      <p className={styles.summary}>{experience.summary}</p>

      <div className={styles.body}>
        <div className={styles.responsibilities}>
          <p className={styles.sectionLabel}>Responsabilidades</p>
          <div className={styles.groups}>
            {experience.responsibilityGroups.map((group) => (
              <ResponsibilityBlock
                experienceId={experience.id}
                group={group}
                key={`${experience.id}-${group.id}`}
              />
            ))}
          </div>
        </div>

        {experience.flow ? (
          <div className={styles.flowColumn}>
            <p className={styles.sectionLabel}>Flujo técnico</p>
            <AnimateOnScroll animation="fadeIn">
              <TechnicalFlow steps={experience.flow} />
            </AnimateOnScroll>
          </div>
        ) : null}
      </div>

      <div className={styles.techBlock}>
        <p className={styles.sectionLabel}>Stack</p>
        <ul className={styles.tech} aria-label="Tecnologías principales">
          {experience.technologies.map((technology) => (
            <li className={styles.tag} key={technology}>
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </AnimateOnScroll>
  )
}

type OrganizationLineProps = {
  experience: ExperienceItem
}

function OrganizationLine({ experience }: OrganizationLineProps) {
  if (!experience.organizationLink) {
    return <p className={styles.organization}>{experience.organization}</p>
  }

  const { label, href, ariaLabel } = experience.organizationLink

  return (
    <p className={styles.organization}>
      <a
        className={styles.organizationLink}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {label}
        <FiExternalLink className={styles.externalIcon} aria-hidden="true" />
      </a>
      <span className={styles.organizationDivider} aria-hidden="true">
        {' '}
        -{' '}
      </span>
      <span className={styles.organizationSecondary}>
        {experience.organization}
      </span>
    </p>
  )
}

type ResponsibilityBlockProps = {
  experienceId: string
  group: ResponsibilityGroup
}

function ResponsibilityBlock({ experienceId, group }: ResponsibilityBlockProps) {
  const Icon = group.icon
  const titleId = `${experienceId}-${group.id}-titulo`

  return (
    <section className={styles.group} aria-labelledby={titleId}>
      <h4 className={styles.groupTitle} id={titleId}>
        <span className={styles.groupIcon} aria-hidden="true">
          <Icon />
        </span>
        {group.title}
      </h4>
      <ul className={styles.groupItems}>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
