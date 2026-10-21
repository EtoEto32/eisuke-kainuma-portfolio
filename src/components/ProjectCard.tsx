import { ArrowUpRight, Github } from 'lucide-react'
import type { Project } from '../data'
import ProjectArtwork from '../ProjectArtwork'
import ExternalLink from './ExternalLink'

type ProjectCardProps = { project: Project; onSelect: (project: Project) => void }

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <article className="card project-card">
      <button
        className="project-open"
        onClick={() => onSelect(project)}
        aria-label={project.title + 'の詳細を見る'}
      >
        <ProjectArtwork type={project.visual} />
        <div className="project-card-content">
          <div className="project-meta">
            <span>{project.category}</span>
            <ArrowUpRight size={22} />
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.role && <span className="project-role">担当：{project.role}</span>}
          <span className="project-detail-label">
            詳しく見る <ArrowUpRight size={16} />
          </span>
        </div>
      </button>
      <div className="project-card-footer">
        {project.url ? (
          <ExternalLink href={project.url}>
            <Github size={17} /> GitHub <ArrowUpRight size={16} />
          </ExternalLink>
        ) : (
          <span>GitHubリンク未確認</span>
        )}
      </div>
    </article>
  )
}
