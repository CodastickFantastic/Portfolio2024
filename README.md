To start Application set env varaibles proprely!

### Example Docker Compose File
```yml
services:
  portfolio-website-nextjs:
    container_name: portfolio-website-nextjs
    image: ghcr.io/codastickfantastic/portfolio2024:master
    # expose:
      # - 3000
    ports:
      - 3000:3000
    restart: always
    environment:
      EMAIL_USER: <EMAIL TO RECIVE FORM DATA>
      EMAIL_PASSWORD: <PASSWORD FOR EMAIL_USER>
```

