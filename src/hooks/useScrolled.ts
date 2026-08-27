import { useSyncExternalStore } from 'react'

function subscribe(onStoreChange: () => void) {
  window.addEventListener('scroll', onStoreChange, { passive: true })

  return () => {
    window.removeEventListener('scroll', onStoreChange)
  }
}

function getSnapshot() {
  return window.scrollY > 12
}

function getServerSnapshot() {
  return false
}

export function useScrolled(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
