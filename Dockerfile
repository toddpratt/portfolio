FROM node:20 AS builder
RUN mkdir /work
WORKDIR /work
COPY . /work
RUN npm install && npm run build

FROM nginx:1.27
COPY --from=builder /work/dist/ /usr/share/nginx/html/
