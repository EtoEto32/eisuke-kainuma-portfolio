export default function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <div className="loader-orbit" aria-hidden="true">
        <i />
        <i />
        <span />
      </div>
      <div className="loader-brand">
        eisuke kainuma<span>portfolio</span>
      </div>
      <div className="loader-track" aria-hidden="true">
        <span />
      </div>
      <p>ページを読み込んでいます</p>
    </div>
  )
}
