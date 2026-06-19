import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { rLayout } from "./rLayout";
import { defaults } from "./mocks";

test("renders as expected", async () => {
  await render(rLayout(defaults));

  await expect
    .element(page.getByTestId("r-layout"))
    .toMatchScreenshot();
});
