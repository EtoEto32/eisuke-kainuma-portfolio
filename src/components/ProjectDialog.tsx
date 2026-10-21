import ExternalLink from './ExternalLink'
import { useEffect, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import type { Project } from '../data'
import ProjectArtwork from '../ProjectArtwork'

export default function ProjectDialog({
  selected,
  onClose,
}: {
  selected: Project | null
  onClose: () => void
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (selected) dialogRef.current?.showModal()
    else dialogRef.current?.close()
  }, [selected])
  return (
    <dialog
      ref={dialogRef}
      className="modal"
      onCancel={() => onClose()}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      onClose={() => onClose()}
      aria-labelledby="project-title"
    >
      <div className="modal-box project-dialog">
        {selected && (
          <>
            <button
              className="btn btn-circle btn-ghost close-modal"
              onClick={() => onClose()}
              aria-label="詳細を閉じる"
            >
              <X size={22} />
            </button>
            <h2 id="project-title">{selected.title}</h2>
            <p className="dialog-subtitle">{selected.subtitle}</p>
            <ProjectArtwork type={selected.visual} />
            <div className="project-tags">
              {selected.tags.map((tag) => (
                <span className="badge" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="dialog-section">
              <h3>制作物について</h3>
              <p>{selected.description}</p>
            </div>
            {selected.role && (
              <div className="dialog-section">
                <h3>担当</h3>
                <p>{selected.role}</p>
              </div>
            )}
            {selected.url ? (
              <ExternalLink className="btn btn-primary" href={selected.url}>
                GitHubで見る <ArrowUpRight size={16} />
              </ExternalLink>
            ) : (
              <p className="sample-note">GitHubリンクは未確認です。</p>
            )}
          </>
        )}
      </div>
    </dialog>
  )
}
