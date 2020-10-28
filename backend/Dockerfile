FROM node:10-alpine

RUN mkdir -p /src/app
WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . /src/app

CMD ["npm", "start"]