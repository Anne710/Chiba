# ちば内科クリニック UIデザイン制作パッケージ

このフォルダは、Claude Code Designへ「ちば内科クリニック」のWebサイトUIデザイン制作を依頼するための資料一式です。

今回は本実装ではなく、PC版・スマホ版のUIデザインを作るための準備資料です。添付の参考画像のような、深緑、白、淡いグリーンを基調にした、清潔感・信頼感・地域密着・やさしさのある医療サイトを目指してください。

## 使い方

1. 画像素材を `assets/images/` に配置してください。
   - `hero-clinic.jpg`
   - `doctor-profile.jpg`
   - `access-map.png`
   - `green-blur-bg.jpg`
2. `claude-design-prompt.md` の内容をClaude Code Designにそのまま渡してください。
3. 補助資料として `design-spec.md` と `wireframe.md` も一緒に渡してください。
4. 画像が未作成の場合は、`image-prompts.md` のプロンプトを使って先に生成してください。

## 画像について

現時点で実画像がない場合、`assets/images/` 内の `.placeholder.md` ファイルを確認してください。各画像の用途、推奨サイズ、差し替え先ファイル名を記載しています。

空の `.jpg` や `.png` ファイルは置いていません。実画像が用意できたら、対応するプレースホルダー説明に従って画像ファイルを配置してください。

## 制作方針

- 医療サイトのため、派手な装飾や強い煽り表現は避ける。
- 高齢者にも読みやすい文字サイズ、行間、余白にする。
- 診療時間、電話番号、住所、アクセスを見つけやすくする。
- 家族で通えるかかりつけ医、訪問診療にも対応する頼れる存在として表現する。
- ピクセル単位の完全一致ではなく、構成、色、余白、雰囲気の再現を優先する。

## 含まれる資料

- `claude-design-prompt.md`: Claude Code Designへ渡す最終依頼文。
- `design-spec.md`: 医院情報、色、フォント、デザイン方針。
- `wireframe.md`: PC版・スマホ版の構成指示。
- `image-prompts.md`: 画像生成用プロンプト。
- `assets/icons/icon-list.md`: 使用想定アイコン一覧。
- `notes/implementation-notes.md`: 実装・公開時の注意点。
