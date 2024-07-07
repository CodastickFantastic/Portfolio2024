### Build img with CMD: 
##  docker build . -t jakubwojtysiak.online:v1.0
##  docker run -p 127.0.0.1:8080:80/tcp <IMG-ID>
#

# Use the official secure Node.js image
FROM node:22.4.0-slim
LABEL maintainer="Jakub Wojtysiak <it.jakub.wojtysiak@gmail.com>"

# Always Block Root Shell
RUN chsh -s /usr/sbin/nologin root

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies with a reduced set of permissions
# RUN npm install --production <-- not working with NextJS when you use SASS or TS, as it needs it to build the app

# Install dependencies 
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Remove all Dev dependencies after successful NextJs Build
RUN npm prune --production

# Add a non-root user and switch to it
RUN groupadd -r noob && useradd -r -g noob noob

# Chown of .next directory (if needed - Kuberentes)
# RUN chown -R noob:noob .next

# Switch to low-privilege user
USER noob

#Expose application port (This one you set inside package.json)
EXPOSE 8080

#Finall CMD !!!
CMD ["npm", "run", "start"]