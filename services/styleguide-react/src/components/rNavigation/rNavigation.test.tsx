import { render } from "vitest-browser-react";
import { expect, test, vi } from "vitest";
import { page } from "vitest/browser";
import { RNavigation } from "./rNavigation";
import { defaults } from "./mocks";

test("renders as expected", async () => {
  const props = defaults(vi.fn());
  await render(<RNavigation {...props} />);

  await page.getByRole("button").click();
  expect(props.nodes[1].action).toHaveBeenCalled();

  await expect.element(page.getByTestId("r-navigation")).toMatchScreenshot();
});
