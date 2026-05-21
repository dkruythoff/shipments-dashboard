import { render } from "vitest-browser-vue";
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import vPage from "./vPage.vue";
import { defaults } from "./mocks";

test("renders as expected", async () => {
  await render(vPage, { props: defaults });

  await expect.element(page.getByTestId("v-page")).toMatchScreenshot();
});
