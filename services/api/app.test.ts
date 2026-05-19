import { assertEquals } from "@std/assert";
import { app } from "./app.ts";

Deno.test("app: GET /", async () => {
  const res = await app.request("/");
  const body = await res.text();

  assertEquals(body, "Hello Hono!");
});

Deno.test("app: GET /shipments", async () => {
  const res = await app.request("/shipments");
  const body = await res.json();

  const stripped = body.map(
    // deno-lint-ignore no-unused-vars
    ({ createdAt, updatedAt, ...rest }: Record<string, unknown>) => rest,
  );

  assertEquals(stripped, [
    {
      id: 1,
      origin: "Imaginary Street 43\n12345 Vaporage\nTestcountry",
      destination: "Destination Lane 56\n67890 Testage\nFooBar",
      status: "pending",
    },
    {
      id: 2,
      origin: "Imaginary Street 43\n12345 Vaporage\nTestcountry",
      destination: "Destination Lane 56\n67890 Testage\nFooBar",
      status: "transit",
    },
    {
      id: 3,
      origin: "Imaginary Street 43\n12345 Vaporage\nTestcountry",
      destination: "Destination Lane 56\n67890 Testage\nFooBar",
      status: "delayed",
    },
    {
      id: 4,
      origin: "Imaginary Street 43\n12345 Vaporage\nTestcountry",
      destination: "Destination Lane 56\n67890 Testage\nFooBar",
      status: "delivered",
    },
  ]);
});
