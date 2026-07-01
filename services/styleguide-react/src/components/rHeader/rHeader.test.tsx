import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { RHeader } from "./rHeader";
import { defaults } from "./mocks";

test("renders as expected", async () => {
  await render(<RHeader {...defaults} />);

  await expect.element(page.getByTestId("r-header")).toMatchScreenshot();
});
