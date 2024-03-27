FROM node:20.9.0-alpine as build

WORKDIR /src/app
COPY . .
RUN npm run dev


