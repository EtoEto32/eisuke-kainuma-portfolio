import type { ReactNode } from 'react'

type WorkPanelProps = {
  id: string
  title: string
  aside?: ReactNode
  items: { title: string; description: string }[]
}

export default function WorkPanel({ id, title, aside, items }: WorkPanelProps) {
  return (
    <section id={id} className="section goals-section work-panel" aria-labelledby={`${id}-heading`}>
      <div className="page-width">
        <div className="section-heading">
          <h2 id={`${id}-heading`}>{title}</h2>
          {aside}
        </div>
        <div className="ambitions-grid">
          {items.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
