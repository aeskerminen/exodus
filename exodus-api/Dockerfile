FROM node:latest

EXPOSE 4000

RUN npm install -g nodemon

WORKDIR /exodus

ENV PATH /app/node_modules/.bin:$PATH

COPY *.json ./

RUN npm install

COPY .. ..

CMD [ "nodemon", "src/index.js" ]