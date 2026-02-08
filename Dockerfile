FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

CMD ["sh", "-c", "until npx prisma migrate deploy; do sleep 2; done && npm run start"]

EXPOSE 8080