import { Hono } from "hono";
import { getAll } from "./db/index.ts";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/shipments", (c) => {
  return c.json(getAll());
});

Deno.serve(app.fetch);
