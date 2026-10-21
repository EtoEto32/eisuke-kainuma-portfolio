import { currentFocus, ambitions } from '../data'
import WorkPanel from '../WorkPanel'

export default function ResearchPage() {
  return (
    <>
      <div className="page-width focus-page-heading">
        <h1>現在の取り組み・今後挑戦したいこと</h1>
      </div>
      <WorkPanel id="research" title="現在の取り組み" items={currentFocus} />
      <WorkPanel
        id="goals"
        title="今後挑戦したいこと"
        items={ambitions}
        aside={
          <p className="goals-motto">
            目標は高く<span>！</span>
          </p>
        }
      />
    </>
  )
}
