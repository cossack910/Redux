FROM node:18.17.0-alpine
WORKDIR /var/www/Redux/app
RUN npm install -g npm@latest && npm install -g vite@latest