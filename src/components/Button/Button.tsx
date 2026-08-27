import type { ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonSize = 'md' | 'lg'

type ButtonProps = {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  external?: boolean
  download?: boolean | string
  ariaLabel?: string
}

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  children,
  external = false,
  download,
  ariaLabel,
}: ButtonProps) {
  return (
    <a
      className={`${styles.button} ${styles[variant]}${size === 'lg' ? ` ${styles.lg}` : ''}`}
      href={href}
      aria-label={ariaLabel}
      {...(download !== undefined ? { download } : undefined)}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : undefined)}
    >
      {children}
    </a>
  )
}
