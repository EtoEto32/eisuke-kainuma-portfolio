import { useEffect, useRef, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import type { Category } from './data'
import { navigation } from './navigation'
import { usePageReveal } from './usePageReveal'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import CircuitArtwork from './components/CircuitArtwork'
import PointerEffects from './components/PointerEffects'
import ProfilePage from './pages/ProfilePage'
import ProjectsPage from './pages/ProjectsPage'
import ResearchPage from './pages/ResearchPage'
import ActivityPage from './pages/ActivityPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  // Keep the project filter when navigating away and back.
  const [filter, setFilter] = useState<Category>('すべて')
  usePageReveal(pathname, mainRef)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    mainRef.current?.focus({ preventScroll: true })
    const label = navigation.find(([, path]) => path === pathname)?.[0] ?? 'プロフィール'
    document.title = label + ' | eisuke kainuma portfolio'
  }, [pathname])
  return (
    <>
      <PointerEffects />
      <a className="skip-link" href="#main">
        本文へスキップ
      </a>
      <SiteHeader />
      <main key={pathname} id="main" className="route-main" ref={mainRef} tabIndex={-1}>
        <CircuitArtwork />
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/works" element={<ProjectsPage filter={filter} setFilter={setFilter} />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/skills" element={<Navigate to="/" replace />} />
          <Route path="/goals" element={<Navigate to="/research" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  )
}
