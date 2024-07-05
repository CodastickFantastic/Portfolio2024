### Build img with CMD: 
##  docker build . -t jakubwojtysiak.online:v1.0
##  docker run -p 127.0.0.1:8080:80/tcp <IMG-ID>
#

FROM node:22.4.0-slim
LABEL maintainer="Jakub Wojtysiak <it.jakub.wojtysiak@gmail.com>"

RUN chsh -s /usr/sbin/nologin root
RUN groupadd -r noob && useradd -r -g noob noob

WORKDIR /app
COPY . .

RUN npm install -y
RUN npm run build

RUN rm -f .env

EXPOSE 8080

RUN chown -R noob:noob .next
USER noob
CMD ["npm", "run", "start"]

# Environment Variables
ENV HOME /home/jakub
ENV DEBIAN_FRONTEND=noninteractive