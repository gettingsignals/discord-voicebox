FROM node:17

WORKDIR /usr/src/app

# アプリケーションの依存関係をインストールする
# ワイルドカードを使用して、package.json と package-lock.json の両方が確実にコピーされるようにします。
# 可能であれば (npm@5+)
COPY package*.json ./

RUN npm install
#RUN npm install express --save
RUN npm install discord.js
RUN npm install @discordjs/voice @discordjs/opus tweetnacl
#RUN npm install discordjs-redis --save
RUN npm install axios --save

RUN apt-get update
RUN apt-get -y install ffmpeg

# 本番用にコードを作成している場合
# RUN npm install --only=production

# アプリケーションのソースをバンドルする
COPY . .

#EXPOSE 8084
EXPOSE 50021

CMD [ "node", "index.js" ]
