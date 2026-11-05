import { useEffect, useRef } from 'react'

const motionQuery = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
const interactiveSelector = 'a[href], button:not(:disabled), summary, [role="button"]'
const pointerProperties = ['--pointer-x', '--pointer-y', '--parallax-x', '--parallax-y']

function isInteractive(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest(interactiveSelector))
}

/** カーソルの座標と装飾を更新し、終了時にイベントと描画予約を解除します。 */
export function usePointerEffects() {
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const motion = window.matchMedia(motionQuery)
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

    function scheduleUpdate() {
      // 同じフレーム内の移動をまとめ、Reactの再描画を発生させずに更新します。
      if (frame === undefined) frame = requestAnimationFrame(update)
    }

    function onMove(event: PointerEvent) {
      if (!motion.matches || event.pointerType !== 'mouse') {
        hide()
        return
      }
      x = event.clientX
      y = event.clientY
      interactive = isInteractive(event.target)
      scheduleUpdate()
    }

    function onScroll() {
      if (!motion.matches || !root.classList.contains('pointer-moving')) return
      // カーソルが止まっていても、スクロールで下の要素が変わるため判定し直します。
      interactive = isInteractive(document.elementFromPoint(x, y))
      scheduleUpdate()
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true, capture: true })
    window.addEventListener('blur', hide)
    root.addEventListener('pointerleave', hide)
    document.addEventListener('visibilitychange', hide)
    motion.addEventListener('change', hide)

    return () => {
      hide()
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll, { capture: true })
      window.removeEventListener('blur', hide)
      root.removeEventListener('pointerleave', hide)
      document.removeEventListener('visibilitychange', hide)
      motion.removeEventListener('change', hide)
      for (const property of pointerProperties) root.style.removeProperty(property)
    }
  }, [])

  return ringRef
}
