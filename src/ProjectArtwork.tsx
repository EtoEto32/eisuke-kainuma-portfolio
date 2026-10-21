import { Check, Utensils, MapPin, Activity, Terminal, ArrowRight } from 'lucide-react'
import type { Project } from './data'

/** Illustrations of the supplied concepts, rather than screenshots of the apps. */
export default function ProjectArtwork({ type }: { type: Project['visual'] }) {
  return (
    <div className={`project-artwork artwork-${type}`} aria-hidden="true">
      <div className="artwork-mesh" />
      {type === 'meal' && (
        <div className="meal-diagram">
          <div className="artwork-orbit" />
          <div className="artwork-core">
            <Utensils size={43} strokeWidth={1.1} />
          </div>
          <div className="artwork-chip chip-a">その日の気分</div>
          <div className="artwork-chip chip-b">
            献立の提案 <ArrowRight size={16} />
          </div>
          <div className="orbit-point" />
        </div>
      )}
      {type === 'todo' && (
        <div className="todo-diagram">
          {['タスクを整理', '計画を立てる', '実行する'].map((text, i) => (
            <div key={text} className={`todo-row ${i === 0 ? 'row-checked' : ''}`}>
              <span>{i === 0 && <Check size={15} />}</span>
              <b>{text}</b>
              <i />
            </div>
          ))}
        </div>
      )}
      {type === 'research' && (
        <div className="log-diagram">
          <div className="log-terminal">
            <Terminal size={19} />
            <div />
            <div />
            <div />
          </div>
          <ArrowRight className="diagram-arrow" />
          <div className="log-chart">
            <Activity size={70} strokeWidth={0.9} />
            <span>ログの可視化・分析</span>
          </div>
        </div>
      )}
      {type === 'map' && (
        <div className="map-diagram">
          <svg viewBox="0 0 420 230">
            <path d="M0 58H130L200 125H420M0 165H160L235 53H420M90 0V230M330 0V230M0 205L420 10" />
            <path className="map-route" d="M90 165H160L200 105L260 105L330 58" />
          </svg>
          <span className="map-pin pin-a">
            <MapPin size={32} />
          </span>
          <span className="map-pin pin-b">
            <MapPin size={25} />
          </span>
          <span className="map-pin pin-c">
            <MapPin size={23} />
          </span>
          <div className="artwork-chip">気分・好みに合うお店</div>
        </div>
      )}
      <span className="artwork-caption">構成イメージ</span>
    </div>
  )
}
