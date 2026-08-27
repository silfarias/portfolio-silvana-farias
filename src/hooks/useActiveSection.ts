import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: readonly string[]): string | null {
  const [activeHref, setActiveHref] = useState<string | null>(null)

  useEffect(() => {
    const contentIds = sectionIds.filter((id) => id !== 'inicio')
    const lastId = contentIds[contentIds.length - 1]

    const compute = () => {
      if (contentIds.length === 0) {
        setActiveHref(null)
        return
      }

      const viewportHeight = window.innerHeight
      const remaining =
        document.documentElement.scrollHeight - (window.scrollY + viewportHeight)
      const lastElement = lastId ? document.getElementById(lastId) : null
      const lastEntered =
        lastElement !== null &&
        lastElement.getBoundingClientRect().top <= viewportHeight * 0.55
      const nearDocumentEnd = remaining <= viewportHeight * 0.18

      if (lastId && (lastEntered || nearDocumentEnd)) {
        setActiveHref(`#${lastId}`)
        return
      }

      const probe = viewportHeight * 0.28
      let currentId: string | null = null

      for (const id of contentIds) {
        const element = document.getElementById(id)

        if (!element) {
          continue
        }

        if (element.getBoundingClientRect().top <= probe) {
          currentId = id
        }
      }

      setActiveHref(currentId ? `#${currentId}` : null)
    }

    compute()
    window.addEventListener('scroll', compute, { passive: true })
    window.addEventListener('resize', compute)

    return () => {
      window.removeEventListener('scroll', compute)
      window.removeEventListener('resize', compute)
    }
  }, [sectionIds])

  return activeHref
}
