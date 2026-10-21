import { projectCategories } from '../data'
import type { Category } from '../data'

type ProjectFiltersProps = {
  value: Category
  count: number
  onChange: (category: Category) => void
}

export default function ProjectFilters({ value, count, onChange }: ProjectFiltersProps) {
  return (
    <div className="works-toolbar">
      <div className="tabs filter-tabs" role="group" aria-label="制作物のカテゴリ">
        {projectCategories.map((category) => (
          <button
            key={category}
            className={`tab ${value === category ? 'tab-active' : ''}`}
            aria-pressed={value === category}
            onClick={() => onChange(category)}
          >
            {category}
            {category === 'すべて' && <span>{String(count).padStart(2, '0')}</span>}
          </button>
        ))}
      </div>
    </div>
  )
}
