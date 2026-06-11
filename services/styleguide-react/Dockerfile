FROM mcr.microsoft.com/playwright:v1.60.0-noble
WORKDIR /app
COPY package*.json ./
RUN npm ci
EXPOSE 6007
CMD ["npm", "run", "storybook"]
