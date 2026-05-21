import { render } from "vitest-browser-vue";
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import vLayout from "./vLayout.vue";
import { defaults } from "./mocks";
import { VNode } from "vue";

type MockSLots = { [key: string]: (() => VNode[]) | string | undefined };

test("renders as expected", async () => {
  await render(vLayout, {
    slots: defaults as MockSLots,
  });

  await expect.element(page.getByTestId("v-layout")).toMatchScreenshot();
});
