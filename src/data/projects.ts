import type { Project } from './types'

// 制作物を追加すると一覧とカテゴリの絞り込みが自動で表示されます。
export const projects: Project[] = [
  {
    id: 1,
    title: '献立推薦Webサービス',
    subtitle: '気分に合わせた献立の提案',
    category: 'Webサービス',
    description:
      'その日の気分に合わせて献立を提案するWebサービス。推薦ロジックとバックエンドを担当。',
    role: '推薦ロジック・バックエンド',
    tags: [],
    visual: 'meal',
  },
  {
    id: 2,
    title: '先延ばし防止ToDoサービス',
    subtitle: 'タスク管理と計画的な行動の支援',
    category: 'Webサービス',
    description:
      'タスクの先延ばしを防ぎ、計画的な行動を支援するWebサービス。フロントエンドを担当。',
    role: 'フロントエンド',
    tags: [],
    visual: 'todo',
  },
  {
    id: 3,
    title: 'LLMハニーポット実験ログ分析基盤',
    subtitle: 'AIエージェントの攻撃行動を分析',
    category: '研究・分析',
    description: 'AIエージェントの攻撃行動をログから可視化・分析する研究用システム。',
    tags: [],
    visual: 'research',
  },
  {
    id: 4,
    title: '食ジャンMAP',
    subtitle: '気分や好みに合う飲食店を探す',
    category: 'Webサービス',
    description: '今の気分や好みに合わせて飲食店を探せる、地図ベースのレコメンドWebサービス。',
    tags: [],
    visual: 'map',
    url: 'https://github.com/EtoEto32/ShokuGenMAP',
  },
]
