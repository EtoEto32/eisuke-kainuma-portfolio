export const projectCategories = ['すべて', 'Webサービス', '研究・分析'] as const
export type Category = (typeof projectCategories)[number]
export type Project = {
  id: number
  title: string
  subtitle: string
  category: Exclude<Category, 'すべて'>
  description: string
  tags: string[]
  visual: 'meal' | 'todo' | 'research' | 'map'
  role?: string
  url?: string
}
export type EventRecord = {
  title: string
  date: string
  format: string
  location?: string
  role?: string
  result?: string
  paragraphs: string[]
  topics?: string[]
  note?: string
}

export type Publication = {
  id: string
  title: string
  authors: string[]
  role: '筆頭著者' | '共著'
}

export type Conference = {
  title: string
  date: string
  venue: string
  url: string
}

export type ContactLink = {
  name: string
  detail: string
  url: string
}

export type WritingActivity = {
  label: string
  title: string
  description: string
  url: string
}
