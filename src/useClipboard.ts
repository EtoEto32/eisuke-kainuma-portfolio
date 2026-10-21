import { useEffect, useRef, useState } from 'react'

type ClipboardStatus = 'idle' | 'copied' | 'error'

export function useClipboard() {
  const [status, setStatus] = useState<ClipboardStatus>('idle')
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  async function copy(text: string) {
    clearTimeout(resetTimer.current)
    try {
      await navigator.clipboard.writeText(text)
      setStatus('copied')
      resetTimer.current = setTimeout(() => setStatus('idle'), 2500)
    } catch {
      setStatus('error')
    }
  }

  return { status, copy }
}
