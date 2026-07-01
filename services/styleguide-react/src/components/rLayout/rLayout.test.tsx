import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { RLayout } from "./rLayout";
import { defaults } from "./mocks";

test("renders as expected", async () => {
  await render(<RLayout {...defaults} />);

  await expect.element(page.getByTestId("r-layout")).toMatchScreenshot();
});
