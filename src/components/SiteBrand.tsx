import { Link } from 'react-router-dom'

export default function SiteBrand({ label }: { label?: string }) {
  return (
    <Link className="wordmark" to="/" aria-label={label}>
      <span className="brand-name">eisuke kainuma</span>
      <small>portfolio</small>
    </Link>
  )
}
