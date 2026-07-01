import { render } from "vitest-browser-vue";
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import vHeader from "./vHeader.vue";
import { defaults } from "./mocks";

test("renders as expected", async () => {
  await render(vHeader, { props: defaults });

  await expect.element(page.getByTestId("v-header")).toMatchScreenshot();
});
