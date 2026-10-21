import type { ComponentPropsWithoutRef } from 'react'

type ExternalLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'target' | 'rel'>

/** Keep the same new-tab policy for every external link. */
export default function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a {...props} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}
