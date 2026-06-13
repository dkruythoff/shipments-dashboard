import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { rHeader } from "./rHeader";
import { defaults } from "./mocks";

test("renders as expected", async () => {
  await render(rHeader(defaults));

  await expect.element(page.getByTestId("r-header")).toMatchScreenshot();
});
