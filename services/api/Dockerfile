FROM denoland/deno:latest

WORKDIR /app
COPY deno.json deno.lock ./
RUN deno install
COPY . .

EXPOSE 8000
USER deno
CMD ["task", "dev"]
