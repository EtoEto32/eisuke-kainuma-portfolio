import type { ContactLink } from './types'

export const contactLinks = {
  github: 'https://github.com/EtoEto32',
  connpass: 'https://connpass.com/user/Ettotto3232/',
  qiita: 'https://qiita.com/ettottooo',
  zenn: 'https://zenn.dev/etoeto323232',
} as const

export const contacts = [
  { name: 'GitHub', detail: 'ソースコード', url: contactLinks.github },
  {
    name: 'connpass',
    detail: 'イベント・コミュニティ',
    url: contactLinks.connpass,
  },
  { name: 'Qiita', detail: '技術記事', url: contactLinks.qiita },
  { name: 'Zenn', detail: '技術記事', url: contactLinks.zenn },
] satisfies ContactLink[]
