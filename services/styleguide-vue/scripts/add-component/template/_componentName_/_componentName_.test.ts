import { render } from "vitest-browser-vue";
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import _componentName_ from "./_componentName_.vue";
import { defaults } from "./mocks";

test("renders as expected", async () => {
  await render(_componentName_, { props: defaults });

  await expect.element(page.getByText("_componentName_")).toMatchScreenshot();
});
