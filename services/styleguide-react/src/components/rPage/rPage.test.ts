import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { RPage } from "./rPage";
import { defaults } from "./mocks";

test("renders as expected", async () => {
  await render(RPage(defaults));

  await expect
    .element(page.getByTestId("r-page"))
    .toMatchScreenshot();
});
