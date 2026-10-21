import { profile } from './profile'

export const currentFocus = [
  {
    label: 'RESEARCH',
    title: profile.researchTitle,
    description: profile.researchDescription,
  },
  {
    label: 'SECURITY LEARNING',
    title: 'セキュリティの学習',
    description: 'TryHackMe（THM）でセキュリティを学習しています。',
  },
  {
    label: 'DEVELOPMENT',
    title: 'Web開発',
    description: '「これ欲しい！」と思ったものを作っています。',
  },
]
export const ambitions = [
  {
    title: 'ブラウザの自作・OSS公開',
    description: 'ブラウザを自作して、OSSとして公開したいです。',
    tag: 'BUILD IN PUBLIC',
  },
  {
    title: 'セキュリティ・キャンプ ネクストへの参加',
    description: 'セキュリティ・キャンプ ネクストへの参加を目指しています。',
    tag: 'KEEP CHALLENGING',
  },
  {
    title: '国際学会での発表',
    description: '自分の研究を国際学会で発表するのが目標です。',
    tag: 'GO GLOBAL',
  },
  {
    title: '脆弱性の発見とCVEの報告',
    description: '脆弱性を発見して開発者に報告し、CVEとして登録されることを目指しています。',
    tag: 'VULNERABILITY RESEARCH',
  },
]
