FROM node:18-alpine

RUN apk add --no-cache curl

WORKDIR /app

COPY app/package*.json ./

# 🔥 mais tolerante que npm ci
RUN npm install --production

COPY app .

ENV PORT=8080
EXPOSE 8080

CMD ["node", "index.js"]