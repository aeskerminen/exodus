FROM node:18-alpine

EXPOSE 3000

WORKDIR /exodus

ENV PATH /app/node_modules/.bin:$PATH

COPY *.json ./

RUN npm install

COPY .. ..

CMD [ "npm", "run", "dev", "--", "--host" ]