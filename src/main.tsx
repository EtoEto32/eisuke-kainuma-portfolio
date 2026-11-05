import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import PageLoader from './components/PageLoader'
import { BrowserRouter } from 'react-router-dom'
// 基本設定、文字、配色、動き、装飾、レイアウトの順にスタイルを重ねます。
// 後から読み込むファイルで上書きしているため、読み込み順を保ってください。
import './styles/style.css'
import './styles/readability.css'
import './styles/monochrome.css'
import './styles/enhancements.css'
import './styles/futuristic.css'
import './styles/interface.css'
import './styles/pointer.css'

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
