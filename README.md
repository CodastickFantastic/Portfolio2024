To start Application set env varaibles proprely!

### Example Docker Compose File
```yml
services:
  portfolio-website-nextjs:
    container_name: portfolio-website-nextjs
    image: ghcr.io/codastickfantastic/portfolio2024:master
    expose:
      - 80
      - 443
    restart: always
    environment:
      VIRTUAL_HOST: jakubwojtysiak.online,www.jakubwojtysiak.online #Docker Proxy
      LETSENCRYPT_HOST: jakubwojtysiak.online,www.jakubwojtysiak.online #Docker Proxy
      LETSENCRYPT_EMAIL: it.jakub.wojtysiak@gmail.com #Docker Proxy
      EMAIL_USER: <email> # Emails
      EMAIL_PASSWORD: <password> # Emails

networks:
  default:
    name: nginx-proxy #Docker Proxy
    external: true
```

