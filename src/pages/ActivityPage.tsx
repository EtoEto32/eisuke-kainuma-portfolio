import { activities, conference, eventHistory, eventNotes, publications } from '../data'
import EventList from '../components/EventList'
import ExternalLink from '../components/ExternalLink'

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
      <section className="event-section" aria-labelledby="publications-heading">
        <h2 id="publications-heading">学会発表</h2>
        <p>{conference.title}での発表を予定しています。</p>
        <p>
          {conference.date} ／ {conference.venue}
        </p>
        <ExternalLink href={conference.url}>研究発表会の開催案内</ExternalLink>
        <div className="activity-list">
          {publications.map((publication) => (
            <article key={publication.id}>
              <div>
                <h3>{publication.title}</h3>
                <p>著者：{publication.authors.join('、')}</p>
              </div>
              <span className="badge sample-badge">{publication.role}・発表予定</span>
            </article>
          ))}
        </div>
      </section>
      <section className="event-section" aria-labelledby="other-activities-heading">
        <h2 id="other-activities-heading">執筆</h2>
        <div className="activity-list">
          {activities.map((activity) => (
            <article key={activity.label}>
              <div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
              <ExternalLink href={activity.url} className="badge sample-badge">
                Qiitaの記事を読む
              </ExternalLink>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
