FROM node:18-alpine

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY app/package*.json ./
RUN npm install --only=production

COPY app .

# Switch to non-root user
USER appuser

EXPOSE 3000

CMD ["node", "index.js"]