FROM node:14

WORKDIR /usr/src/backend

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]