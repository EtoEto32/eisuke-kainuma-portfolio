import { activities, eventHistory, eventNotes } from '../data'
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

function EventList({ events, recorded = false }: { events: EventRecord[]; recorded?: boolean }) {
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

export default function ActivityPage() {
  return (
    <section id="activity" className="section page-width activity-section">
      <h1 className="profile-heading">活動・実績</h1>
      <section className="event-section" aria-labelledby="event-history-heading">
        <h2 id="event-history-heading">技術イベント・コンテストへの参加</h2>
        <p className="event-list-hint">各項目をクリックすると、活動内容が開きます。</p>
        <EventList events={eventHistory} />
      </section>
      <section className="event-section" aria-labelledby="event-notes-heading">
        <h2 id="event-notes-heading">勉強会・講演会の聴講メモ</h2>
        <p className="event-disclaimer">
          聴講メモが残っているイベントです。記載の日付はメモの記録時期で、正式な参加日時や参加実績は一部未確認です。
        </p>
        <EventList events={eventNotes} recorded />
      </section>
      <section className="event-section" aria-labelledby="other-activities-heading">
        <h2 id="other-activities-heading">学会発表・執筆</h2>
        <div className="activity-list">
          {activities.map((activity) => (
            <article key={activity.label}>
              <div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
              <span className="badge sample-badge">{activity.status}</span>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
