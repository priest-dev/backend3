# Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

ENV PORT=8080
ENV MONGO_URL=mongodb://mongo:27017/adoptme

EXPOSE 8080

CMD ["node", "src/server.js"]
