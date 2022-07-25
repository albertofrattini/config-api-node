FROM node:16
WORKDIR /app
COPY package.json ./
COPY src/database/models ./src/database/models
RUN npm install
COPY . .
RUN npm run build
CMD ["node", "dist/index.js"]
EXPOSE 3000