import { createPortal } from 'react-dom'
import { usePointerEffects } from '../hooks/usePointerEffects'

/** 装飾用の光とリングを表示します。動きを無効にしても独自カーソルは使えます。 */
export default function PointerEffects() {
  const ringRef = usePointerEffects()

  // ページのアニメーションやセクションの重なりに影響されない位置へ配置します。
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
