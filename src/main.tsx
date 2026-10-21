import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import PageLoader from './PageLoader'
import { BrowserRouter } from 'react-router-dom'
// Cascade order: base → typography → palette → motion → surfaces → final layout.
// Preserve this order when adding styles; later files refine the existing design.
import './styles/style.css'
import './styles/readability.css'
import './styles/monochrome.css'
import './styles/enhancements.css'
import './styles/futuristic.css'
import './styles/interface.css'

const App = lazy(async () => {
  const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 800
  const [module] = await Promise.all([
    import('./App'),
    new Promise((resolve) => window.setTimeout(resolve, delay)),
  ])
  return module
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
