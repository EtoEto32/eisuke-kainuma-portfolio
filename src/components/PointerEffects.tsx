import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

/** Decorative only: native SVG cursors still work when JavaScript motion is off. */
export default function PointerEffects() {
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const motion = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    )
    const root = document.documentElement
    const ring = ringRef.current
    let frame: number | undefined
    let x = 0
    let y = 0
    let interactive = false

    function hide() {
      if (frame !== undefined) cancelAnimationFrame(frame)
      frame = undefined
      root.classList.remove('pointer-moving')
      if (ring) ring.dataset.visible = 'false'
    }

    function update() {
      frame = undefined
      root.style.setProperty('--pointer-x', `${x}px`)
      root.style.setProperty('--pointer-y', `${y}px`)
      root.style.setProperty('--parallax-x', `${(x / window.innerWidth - 0.5) * 16}px`)
      root.style.setProperty('--parallax-y', `${(y / window.innerHeight - 0.5) * 16}px`)
      root.classList.add('pointer-moving')
      if (ring) {
        ring.dataset.interactive = String(interactive)
        ring.dataset.visible = 'true'
      }
    }

    function onMove(event: PointerEvent) {
      if (!motion.matches || event.pointerType !== 'mouse') {
        hide()
        return
      }
      x = event.clientX
      y = event.clientY
      interactive =
        event.target instanceof Element &&
        Boolean(event.target.closest('a[href], button:not(:disabled), summary, [role="button"]'))
      // Coalesce events into one update per display frame; React never rerenders here.
      if (frame === undefined) frame = requestAnimationFrame(update)
    }

    function onScroll() {
      if (!motion.matches || !root.classList.contains('pointer-moving')) return
      // Scrolling can move a link under a stationary pointer.
      interactive = Boolean(
        document
          .elementFromPoint(x, y)
          ?.closest('a[href], button:not(:disabled), summary, [role="button"]'),
      )
      if (frame === undefined) frame = requestAnimationFrame(update)
    }

    function onPreferenceChange() {
      hide()
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true, capture: true })
    window.addEventListener('blur', hide)
    document.documentElement.addEventListener('pointerleave', hide)
    document.addEventListener('visibilitychange', hide)
    motion.addEventListener('change', onPreferenceChange)

    return () => {
      hide()
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll, { capture: true })
      window.removeEventListener('blur', hide)
      document.documentElement.removeEventListener('pointerleave', hide)
      document.removeEventListener('visibilitychange', hide)
      motion.removeEventListener('change', onPreferenceChange)
      for (const property of ['--pointer-x', '--pointer-y', '--parallax-x', '--parallax-y']) {
        root.style.removeProperty(property)
      }
    }
  }, [])

  // Keep viewport effects outside route animations and section stacking contexts.
  return createPortal(
    <>
      <div className="pointer-glow" aria-hidden="true" />
      <div className="pointer-ring" ref={ringRef} aria-hidden="true" data-visible="false">
        <span />
      </div>
    </>,
    document.body,
  )
}
