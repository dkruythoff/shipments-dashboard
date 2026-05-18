FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
EXPOSE 6006
CMD ["npm", "run", "storybook"]
