import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { _componentName_ } from "./_componentName_";
import { defaults } from "./mocks";

test("renders as expected", async () => {
  await render(_componentName_(defaults));

  await expect
    .element(page.getByTestId("r-_componentNameNoPrefixLc_"))
    .toMatchScreenshot();
});
