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
