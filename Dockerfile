FROM node:20-alpine

WORKDIR /usr/src/app

COPY public ./public
COPY src ./src
COPY tsconfig.json .
COPY package.json .
COPY package-lock.json .
COPY next.config.js .

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]