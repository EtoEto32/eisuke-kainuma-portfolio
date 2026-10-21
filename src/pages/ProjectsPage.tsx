import { useState } from 'react'
import { Code2 } from 'lucide-react'
import { projects } from '../data'
import type { Category, Project } from '../data'
import ProjectCard from '../components/ProjectCard'
import ProjectFilters from '../components/ProjectFilters'
import ProjectDialog from '../components/ProjectDialog'

type ProjectsPageProps = { filter: Category; setFilter: (category: Category) => void }

export default function ProjectsPage({ filter, setFilter }: ProjectsPageProps) {
  const [selected, setSelected] = useState<Project | null>(null)
  const visibleProjects = projects.filter(
    (project) => filter === 'すべて' || project.category === filter,
  )
  return (
    <>
      <section id="works" className="section works-section">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <h2>制作物</h2>
            </div>
          </div>
          {projects.length > 0 && (
            <ProjectFilters value={filter} count={projects.length} onChange={setFilter} />
          )}
          {projects.length === 0 ? (
            <div className="works-empty">
              <Code2 size={30} strokeWidth={1.2} />
              <div>
                <h3>制作物は今後こちらで紹介します。</h3>
              </div>
              <span className="empty-spark" aria-hidden="true">
                ✳
              </span>
            </div>
          ) : (
            <div className="projects-grid" aria-live="polite">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onSelect={setSelected} />
              ))}
            </div>
          )}
        </div>
      </section>
      <ProjectDialog selected={selected} onClose={() => setSelected(null)} />
    </>
  )
}
