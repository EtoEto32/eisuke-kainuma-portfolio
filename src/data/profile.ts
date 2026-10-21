// プロフィール・制作物・活動・リンクの情報はこのファイルで管理します。
export const profile = {
  name: '貝沼 英亮',
  englishName: 'eisuke kainuma',
  initials: 'EK',
  role: '金沢工業大学大学院 修士1年',
  affiliation: '金沢工業大学大学院 修士1年',
  laboratory: '向井宏明研究室',
  hometown: '新潟県',
  interests: 'サイバーセキュリティ / Web / AI活用',
  introduction:
    '金沢工業大学大学院の修士1年、貝沼英亮です。向井宏明研究室に所属しています。サイバーセキュリティとWeb開発に興味があり、現在は研究とWeb開発に取り組んでいます。',
  motto: 'Done is better than perfect',
  mottoTranslation: '完璧を目指すよりまず終わらせろ',
  comment:
    'インターンで資料のまとめ方を指摘されたのをきっかけに、発表資料の作り方を現在勉強中です。',
  photo: '/profile.png', // 表示範囲は src/styles/enhancements.css の .profile-photo img で調整します。
  email: 'kainuma0904@gmail.com',
  researchTitle: 'WebAssemblyを用いたクリプトジャッキングマルウェアの研究',
  researchDescription: 'WebAssemblyを用いたクリプトジャッキングマルウェアについて研究しています。',
}
export const qualifications = [
  'ITパスポート',
  '基本情報技術者試験',
  '応用情報技術者試験',
  'G検定',
  '日本ラーメン検定 初級',
  '危険物取扱者 乙種第4類（乙四）',
  '普通自動車免許',
]
export const skills = [
  { title: 'Languages', subtitle: 'プログラミング言語', tags: ['Python', 'Rust', 'TypeScript'] },
  { title: 'Frameworks', subtitle: 'フレームワーク', tags: ['React', 'FastAPI', 'Next.js'] },
  { title: 'Tools & Workflow', subtitle: 'ツール', tags: ['Notion', 'Obsidian', 'Codex'] },
]
