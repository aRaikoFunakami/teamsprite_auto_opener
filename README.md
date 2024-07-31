# TeamSprite Auto Opener

## 目的
TeamSpriteの経費精算承認のページを開いた際に経費精算申請のページも自動で開くChromeプラグインです。

## 使用方法
1. リポジトリをクローンします：
    ```bash
    git clone https://github.com/aRaikoFunakami/teamsprite_auto_opener.git
    ```
2. ChromeブラウザのURLバーで`chrome://extensions/`を入力し、拡張機能のページを開きます。
3. 「デベロッパーモード」をオンにします。
4. 「パッケージ化されていない拡張機能を読み込む」ボタンをクリックします。
5. ダウンロードした拡張プラグインのディレクトリ`teamsprite_auto_opener`を選択します。
6. TeamSpriteで経費精算承認のページを開きます。

これで、経費精算申請のページが自動でバックグラウンドで開かれるようになります。

## 注意事項
- この拡張機能は、特定のリンクテキスト「クリックすると経費精算申請を表示します」を含むリンクを検出し、自動で新しいタブで開くように設計されています。
- 新しいタブはバックグラウンドで開かれるため、現在のタブはアクティブなままです。

## 貢献
バグ報告や機能リクエストは、[issues](https://github.com/aRaikoFunakami/teamsprite_auto_opener/issues)ページからお願いします。

