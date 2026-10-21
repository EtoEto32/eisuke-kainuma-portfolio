import ExternalLink from '../components/ExternalLink'
import { useClipboard } from '../useClipboard'
import { ArrowUpRight, Github, Mail, Copy, Check } from 'lucide-react'
import { profile, contacts } from '../data'

export default function ContactPage() {
  const { status, copy } = useClipboard()
  const copied = status === 'copied'
  const copyError = status === 'error'

  return (
    <section id="contact" className="contact-section route-contact page-width">
      <div className="contact-body">
        <div>
          <h2>連絡先</h2>
          <p>
            お問い合わせはメールでお願いします。
            <br />
            制作物や記事は、各サービスからご覧いただけます。
          </p>
        </div>
        <div className="contact-actions">
          {profile.email ? (
            <>
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <Mail size={18} /> メールで連絡する <ArrowUpRight size={18} />
              </a>
              <button className="email-copy" onClick={() => copy(profile.email)}>
                {profile.email}
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </button>
              <span className="copy-status" role="status">
                {copied
                  ? 'メールアドレスをコピーしました'
                  : copyError
                    ? `コピーできませんでした：${profile.email}`
                    : ''}
              </span>
            </>
          ) : (
            <div className="contact-placeholder">
              <Mail size={22} />
              <b>メールアドレス</b>
              <span>後日掲載します。</span>
            </div>
          )}
          <div className="social-links">
            {contacts.map((contact) =>
              contact.url ? (
                <ExternalLink key={contact.name} href={contact.url}>
                  <span>
                    {contact.name === 'GitHub' && <Github size={15} />}
                    <b>{contact.name}</b>
                    <small>{contact.detail}</small>
                  </span>
                  <ArrowUpRight size={16} />
                </ExternalLink>
              ) : (
                <div className="social-pending" key={contact.name}>
                  <span>
                    {contact.name === 'GitHub' && <Github size={15} />}
                    <b>{contact.name}</b>
                    <small>{contact.detail}</small>
                  </span>
                  <span>準備中</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      <span className="contact-spark" aria-hidden="true">
        ✳
      </span>
    </section>
  )
}
