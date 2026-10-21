# 起動・確認

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
