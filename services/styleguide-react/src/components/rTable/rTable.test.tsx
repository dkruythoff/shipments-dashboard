import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { RTable } from "./rTable";
import { defaults } from "./mocks";

test("renders head, body and foot rows", async () => {
  const screen = await render(<RTable {...defaults} />);

  await expect.element(screen.getByRole("table")).toBeInTheDocument();
  expect(screen.getByRole("table").elements()).toHaveLength(1);

  await expect.element(page.getByRole("table")).toMatchScreenshot();
});

test("omits thead when no head prop", async () => {
  const screen = await render(RTable({ body: defaults.body }));

  expect(screen.getByRole("rowgroup").elements()).toHaveLength(1);

  await expect.element(page.getByRole("table")).toMatchScreenshot();
});
