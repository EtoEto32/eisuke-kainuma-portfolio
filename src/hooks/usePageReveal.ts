import { useEffect } from 'react'
import type { RefObject } from 'react'

const revealTargets = [
  '.profile-list > li',
  '.profile-comment',
  '.project-card',
  '.skill-group',
  '.ambitions-grid > article',
  '.focus-grid > article',
  '.event-disclosure',
  '.activity-list > article',
  '.social-links > *',
].join(', ')

/** 動きを減らす設定や非対応のブラウザでは、内容をそのまま表示します。 */
export function usePageReveal(pathname: string, root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return

    const elements = root.current?.querySelectorAll<HTMLElement>(revealTargets) ?? []
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.05 },
    )

    elements.forEach((element, index) => {
      element.classList.add('reveal-pending')
      element.style.setProperty('--reveal-delay', `${(index % 3) * 65}ms`)
      observer.observe(element)
    })
    const showAll = () => elements.forEach((element) => element.classList.add('is-revealed'))
    reducedMotion.addEventListener('change', showAll)
    return () => {
      observer.disconnect()
      reducedMotion.removeEventListener('change', showAll)
      elements.forEach((element) => element.classList.remove('reveal-pending', 'is-revealed'))
    }
  }, [pathname, root])
}
