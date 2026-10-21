import SiteBrand from './SiteBrand'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation } from '../navigation'

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setMenuOpen(false), [pathname])
  return (
    <header className="site-header">
      <div className="navbar page-width">
        <SiteBrand label="プロフィールへ" />
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {navigation.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === '/'}>
              {label}
            </NavLink>
          ))}
        </nav>
        <button
          className="btn btn-ghost menu-toggle"
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="モバイルナビゲーション">
          {navigation.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === '/'} onClick={() => setMenuOpen(false)}>
              {label}
              <ArrowUpRight size={18} />
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
