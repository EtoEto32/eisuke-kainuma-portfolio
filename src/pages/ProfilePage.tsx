import { profile, qualifications, skills } from '../data'

export default function ProfilePage() {
  return (
    <>
      <section id="about" className="section page-width about-section">
        <div className="section-title">
          <h1 className="profile-heading">プロフィール</h1>
          <div className="profile-photo">
            {profile.photo ? (
              <img src={profile.photo} alt="貝沼英亮の顔写真" />
            ) : (
              <div className="photo-placeholder">
                <span>{profile.initials}</span>
                <small>顔写真は準備中です</small>
              </div>
            )}
          </div>
          <p className="photo-caption">お気に入りのカレー屋での写真</p>
        </div>
        <div className="about-content">
          <h2 className="profile-name">
            {profile.name}
            <span>{profile.englishName}</span>
          </h2>
          <section className="profile-skills featured-skills" aria-labelledby="skills-heading">
            <h2 id="skills-heading">スキル</h2>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-group" key={skill.title}>
                  <h3 className="skill-heading">{skill.subtitle}</h3>
                  <ul className="skill-tags">
                    {skill.tags.map((tag) => (
                      <li className="badge" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <ul className="profile-list">
            <li>
              <strong>所属</strong>
              <span>
                {profile.affiliation}
                <br />
                {profile.laboratory}
              </span>
            </li>
            <li>
              <strong>出身</strong>
              <span>{profile.hometown}</span>
            </li>
            <li>
              <strong>興味のある分野</strong>
              <span>{profile.interests}</span>
            </li>
            <li>
              <strong>好きな言葉</strong>
              <span className="profile-motto">
                {profile.motto}
                <small>{profile.mottoTranslation}</small>
              </span>
            </li>
            <li>
              <strong>資格・免許</strong>
              <ul className="qualification-list">
                {qualifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          </ul>
          <aside className="profile-comment">
            <h3>ひとこと</h3>
            <p>{profile.comment}</p>
          </aside>
        </div>
      </section>
    </>
  )
}
