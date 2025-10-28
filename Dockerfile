FROM node:18-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install  --include=dev
COPY . .
RUN npm run build
#stage:2
FROM node:18-alpine
COPY --from=build /app ./
EXPOSE 3000
CMD ["npm","start"]
~
