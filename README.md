# 確認方法

## 1. app.autolingual.io でプロジェクトを作成

・「翻訳対象サイトドメイン」に `http://localhost:1881` を指定
・「翻訳元言語」に `English` を指定
・「翻訳先言語」に `日本語` と `한국어` を指定
・プロジェクトを公開

## 2. 独自ウィジット編集機能を有効に

言語選択ウィジェット画面に遷移し、「独自ウィジット編集機能」を有効にする

## 3. 環境変数を設定

ルートディレクトリで.env ファイルを作成し、 `SCRIPT_SRC` を追加。
値はプロジェクトのホーム画面にあるスクリプトタグの `src` 属性。

## 4. パッケージをインストール

```
npm install
```

## 5. サーバーを起動

```
npm run dev
```

http://localhost:1881 で next.js のテストアプリが閲覧可能
