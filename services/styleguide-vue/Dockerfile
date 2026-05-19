FROM mcr.microsoft.com/playwright:v1.60.0-noble
WORKDIR /app
COPY package*.json ./
RUN npm ci
EXPOSE 6006
CMD ["npm", "run", "storybook"]
