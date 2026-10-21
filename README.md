# eisuke kainuma portfolio

React・TypeScript・Vite・daisyUIを使ったポートフォリオです。デプロイはしていません。

## 起動・確認

Node.js 20.19以上（22系の場合は22.12以上）を使用してください。

```powershell
npm.cmd install
npm.cmd run dev
```

http://localhost:5173 を開きます。ファイル保存時にViteのHMRとReact Fast Refreshで更新されます。ポート5173が使用中の場合は停止する設定です。

```powershell
npm.cmd run typecheck
npm.cmd run build
npm.cmd run preview
```

型チェックを続けて実行する場合は、別ターミナルで `npm.cmd run typecheck:watch` を実行します。開発にはHMRが有効な `dev` を使ってください。

## 構成

- `src/App.tsx`: SPAのルート、タイトル、ページ移動時の処理。制作物のカテゴリ選択もここで保持します。
- `src/navigation.ts`: メニュー名とURLの対応。
- `src/pages/`: プロフィール、制作物、現在の取り組み、活動・実績、連絡先。
- `src/components/`: ヘッダー、フッター、サイト名、制作物カード・絞り込み・ダイアログ、外部リンク、背景装飾。
- `src/data/`: `profile.ts`（プロフィール・スキル）、`projects.ts`（制作物）、`research.ts`（現在の取り組み・目標）、`activities.ts`（活動記録）、`contacts.ts`（連絡先）、`types.ts`（共通の型・カテゴリ）。
- `src/data.ts`: 各データファイルの共通の読み込み口。既存のインポートを維持しています。
- `src/WorkPanel.tsx`: 現在の取り組みと今後の目標で共通のカード配置。
- `src/ProjectArtwork.tsx`: 制作物の構成イメージ。実際のスクリーンショットではありません。
- `src/PageLoader.tsx`・`src/usePageReveal.ts`: 初回読み込みとスクロール時の表示。
- `src/useClipboard.ts`: コピー結果の状態管理と通知のリセット。
- `public/`: 顔写真、ブラウザ型ファビコン。
- `docs/security-review.md`: セキュリティ確認の内容と範囲。

## 内容を更新する

内容に応じて `src/data/` の各ファイルを編集します。研究の見出しと説明は `profile.ts` にまとめ、`research.ts` から参照しています。制作物の `url` を設定するとGitHubリンクが表示されます。未確認のリンクは空欄にしてください。顔写真は `profile.photo`、切り抜きの表示範囲は `src/styles/enhancements.css` の `.profile-photo img` で調整します。

## スタイル

スタイルは `src/styles/` にまとめています。既存の見た目を保持するため、`src/main.tsx` のCSS読み込み順を維持しています。

1. `style.css`: Tailwind・daisyUIテーマと基本コンポーネント。
2. `readability.css`: 文字サイズとページ配置。
3. `monochrome.css`: 白黒の配色。
4. `enhancements.css`: カード、写真、ページ表示のアニメーション。
5. `futuristic.css`: グリッド、光、透明感の演出。
6. `interface.css`: 最終的な配置、レスポンシブ設定、フッター、制作物カード、ローディング。

CSSは後のファイルが前の設定を調整します。見た目の変更は関係するファイルと画面幅の設定を確認してください。動きを減らす設定の場合、アニメーションと初回表示の待ち時間を抑えます。通常の初回読み込みは最短約0.8秒で、ページ内の移動では繰り返しません。

## コード整形

```powershell
npm.cmd run format
npm.cmd run format:check
```

Prettierの設定は `.prettierrc.json` にあります。生成物、依存パッケージ、画像は整形対象外です。

## ページ

`/`（プロフィール・スキル）、`/works`、`/research`、`/activity`、`/contact`。旧 `/skills` は `/`、旧 `/goals` は `/research` に転送します。

本番公開時は各URLへの直接アクセスを `index.html` に戻すSPAフォールバック設定が必要です。Viteの開発サーバーは自動で対応します。

## GitHubの自動チェック

- Dependabot: npmの脆弱性修正PRを自動作成します。通常のnpmバージョン更新PRは作成しません。GitHub Actionsは毎週月曜09:00（日本時間）に更新を確認し、まとめてPRを作成します。自動マージは設定していません。
- CI: mainへのpushとPRで、ロックファイルからのインストール、整形チェック、型チェック、本番ビルド、依存パッケージの監査を実行します。既知の脆弱性がmoderate以上なら失敗にします。
- CodeQL: TypeScript/JavaScriptとGitHub Actionsのソースを、push・PR・週次で解析します。結果はGitHubのSecurityタブで確認できます。
- Dependency review: PRで新しく導入される依存関係にmoderate以上の既知の脆弱性がないか確認します。ライセンス審査とPRへの自動コメントは行いません。

ワークフローは `.github/workflows/`、更新設定は `.github/dependabot.yml` にあります。公式ActionsをコミットSHAで固定し、必要なジョブだけに書き込み権限を与えています。公開サイトのデプロイは行いません。
