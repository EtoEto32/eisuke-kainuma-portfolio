import type { EventRecord } from './types'

export const activities = [
  {
    label: 'CONFERENCE',
    title: 'CSECでの学会発表',
    description: 'CSECでの学会発表（12月・岐阜）の詳細は、後日掲載します。',
    status: '詳細は後日掲載',
  },
  {
    label: 'WRITING',
    title: 'Zenn・ブログでの執筆',
    description: 'Zennやブログで公開した記事を紹介します。',
    status: '準備中',
  },
]
export const eventHistory: EventRecord[] = [
  {
    title: '総務省 全国型CTFコンテスト',
    date: '2026年10月',
    format: '現地参加',
    location: '金沢会場',
    result: '金沢会場13人中2位 / 全国163人中38位',
    paragraphs: [
      'Web・ネットワーク分野を中心に問題を解きました。Codexのサブエージェント機能を使い、暗号分野の複数の問題を並列で解析する実験も行いました。',
    ],
  },
  {
    title: 'ICTSC2026（ICTトラブルシューティングコンテスト）',
    date: '2026年9月〜（継続中）',
    format: 'チーム対抗技術コンテスト',
    role: 'チームリーダー',
    result: '1次予選47チーム中15位 / 予選突破',
    paragraphs: [
      'ネットワークやサーバーの障害について、原因の調査や復旧に取り組みました。チームリーダーとして、進捗管理のルールや役割分担を決め、解答を互いに検証する体制を整えました。',
    ],
    note: '2次予選以降の結果は未確認です。',
  },
  {
    title: 'セキュリティ・キャンプ2025 ミニ（石川開催）',
    date: '2025年11月',
    format: '専門講座',
    paragraphs: [
      '準同型暗号と電子メールセキュリティの講座に参加しました。B/FV方式の暗号処理をPythonで実装し、暗号化したまま加算・乗算を行う演習に取り組みました。SMTPやメール認証に関するセキュリティ技術も学びました。',
    ],
  },
  {
    title: 'セキュリティ・キャンプ2025 コネクト（プレ開催）',
    date: '2025年9月',
    format: '選考制の技術研修',
    paragraphs: [
      'AIレッドチーミングのプログラムに参加しました。脆弱なLLMアプリケーションを対象に、プロンプトインジェクションや情報漏えい、外部システムとの連携機能に対する攻撃を検証しました。LLM-CTFにも参加し、攻撃と防御の両面を学びました。',
    ],
  },
  {
    title: 'セキュリティ若手の会',
    date: '2025年8月',
    format: 'ワークショップ・交流会',
    paragraphs: [
      'LLMセキュリティとオフェンシブセキュリティのワークショップに参加しました。プロンプトインジェクションや機密情報の漏えいについて学び、Purple Flairを使った攻撃演習に取り組みました。',
    ],
  },
  {
    title: 'SECCON Beginners Workshop（金沢開催）',
    date: '2025年1月',
    format: 'CTFワークショップ',
    result: '約30人中10位',
    paragraphs: [
      'Prototype Pollution、Ghidraを使ったリバースエンジニアリング、静的解析・動的解析などを学びました。Kali LinuxやGhidraを使った問題演習にも取り組みました。',
    ],
  },
]

export const eventNotes: EventRecord[] = [
  {
    title: 'ゼロから始めるCTF入門勉強会',
    date: '2025年5月29日頃（メモの記録時期）',
    format: '技術勉強会（聴講メモあり）',
    paragraphs: [
      'NoSQLインジェクション、MongoDB、Webアプリケーションの脆弱性、Web Security Academyに関連する演習について学びました。',
    ],
  },
  {
    title: '技育祭',
    date: '2024年9月21日頃（メモの記録時期）',
    format: '技術講演会（聴講メモあり）',
    topics: [
      'DeNA創業者が語るキャリアビジョン',
      'LayerXの生成AIに関する講演',
      'プロダクトエンジニアとしての第一歩の踏み出し方',
    ],
    paragraphs: [
      'キャリア形成、生成AIの実務活用、プロダクト開発、エンジニアリングの考え方について学びました。',
    ],
  },
]
