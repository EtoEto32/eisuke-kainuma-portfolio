import SiteBrand from './SiteBrand'
import { profile } from '../data'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <SiteBrand />
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
      </div>
    </footer>
  )
}
