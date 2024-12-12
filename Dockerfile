FROM node:22-alpine

# Required for schema generation
RUN apk add --no-cache openssl

WORKDIR /app

COPY package*.json ./

# Copy the prisma schema before npm install
COPY prisma ./prisma

RUN npm install

# Necessary for continous running even if the app crashes
RUN npm install -g nodemon

COPY . .

# Make sure that the wait-for script has the necessary permissions
RUN chmod +x ./wait-for.sh

EXPOSE 3005