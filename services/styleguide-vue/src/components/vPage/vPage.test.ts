import { render } from "vitest-browser-vue";
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import vPage from "./vPage.vue";
import { defaults, defaultSlots } from "./mocks";
import { VNode } from "vue";

type MockSLots = { [key: string]: (() => VNode[]) | string | undefined };

test("renders as expected", async () => {
  await render(vPage, { props: defaults, slots: defaultSlots as MockSLots });

  await expect.element(page.getByTestId("v-page")).toMatchScreenshot();
});
