FROM node:latest

EXPOSE 4000

WORKDIR /exodus

ENV PATH /app/node_modules/.bin:$PATH

COPY *.json ./

RUN npm install

COPY .. ..

CMD [ "node", "src/index.js" ]