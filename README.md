# discord-voicebox

* DISCORD_TOKENは事前に取得して.envに設定しておくこと。
* 事前にDiscordサーバーへの招待をしておくこと。

# dockerコマンドで起動
```
docker-compose build
docker-compose up
```

# Discordで読み上げ
1. ボイスチャネルに接続
2. テキストチャネルに`/join`でbotを接続
3. テキストチャネルに任意の文字列を入力すると、読み上げます。
4. 終了するときは、`bye`
