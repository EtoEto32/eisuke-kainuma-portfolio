import type { EventRecord } from '../data'
import { ChevronDown } from 'lucide-react'

function EventEntry({ event, recorded = false }: { event: EventRecord; recorded?: boolean }) {
  return (
    <details className="event-disclosure">
      <summary className="event-summary">
        <span className="event-summary-title">{event.title}</span>
        <span className="event-summary-date">
          <span className="event-mobile-label">{recorded ? '記録時期' : '参加時期'}</span>
          {event.date.replace('（メモの記録時期）', '')}
        </span>
        <span className="event-summary-result">
          <span className="event-mobile-label">実績</span>
          {event.result || '—'}
        </span>
        <ChevronDown className="event-chevron" size={20} aria-hidden="true" />
      </summary>
      <div className="event-detail">
        <h3>活動内容</h3>
        <dl className="event-facts">
          <div>
            <dt>{recorded ? '記録' : '参加形態'}</dt>
            <dd>{event.format}</dd>
          </div>
          {event.location && (
            <div>
              <dt>会場</dt>
              <dd>{event.location}</dd>
            </div>
          )}
          {event.role && (
            <div>
              <dt>役割</dt>
              <dd>{event.role}</dd>
            </div>
          )}
        </dl>
        {event.topics && (
          <ul className="event-topics">
            {event.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        )}
        {event.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {event.note && <p className="event-note">{event.note}</p>}
      </div>
    </details>
  )
}

export default function EventList({
  events,
  recorded = false,
}: {
  events: EventRecord[]
  recorded?: boolean
}) {
  return (
    <div className="event-list">
      <div className="event-list-header" aria-hidden="true">
        <span>イベント名</span>
        <span>{recorded ? '記録時期' : '参加時期'}</span>
        <span>実績</span>
        <span />
      </div>
      {events.map((event) => (
        <EventEntry key={event.title} event={event} recorded={recorded} />
      ))}
    </div>
  )
}
