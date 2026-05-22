import { Hono } from "hono";
import { cors } from "hono/cors";
import { getAll } from "./db/index.ts";

export const app = new Hono();

app.use(
  "/*",
  cors({
    origin: Deno.env.get("CORS_ORIGIN") || "http://localhost:5173",
    allowMethods: ["GET"],
  }),
);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/shipments", (c) => {
  return c.json(getAll());
});
