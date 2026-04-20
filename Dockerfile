FROM node:18-alpine

WORKDIR /app

# 🔐 Atualiza pacotes do sistema (corrige CVEs)
RUN apk update && apk upgrade

COPY app/package*.json ./
RUN npm install --only=production

COPY app .

EXPOSE 3000

CMD ["node", "index.js"]