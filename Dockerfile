FROM node:14-alpine as build-stage
COPY package.json ./
ARG ENV=prod
RUN npm install && mkdir /app && mv ./node_modules ./app
WORKDIR /app
COPY . .
RUN DISABLE_ESLINT_PLUGIN=true npm run build