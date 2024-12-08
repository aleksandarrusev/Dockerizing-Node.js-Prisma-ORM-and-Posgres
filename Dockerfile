FROM node:23-alpine

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma

RUN npm install

RUN npm install -g nodemon

COPY . .

RUN npx prisma generate

EXPOSE 3005

ENTRYPOINT [ "nodemon", "index.js" ]