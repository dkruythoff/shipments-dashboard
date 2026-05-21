import { render } from "vitest-browser-vue";
import { expect, test, vi } from "vitest";
import { page } from "vitest/browser";
import vNavigation from "./vNavigation.vue";
import { defaults } from "./mocks";

test("renders as expected", async () => {
  const props = defaults(vi.fn());
  await render(vNavigation, { props });

  await page.getByRole("button").click();
  expect(props.nodes[1].action).toHaveBeenCalled();

  await expect.element(page.getByTestId("v-navigation")).toMatchScreenshot();
});
