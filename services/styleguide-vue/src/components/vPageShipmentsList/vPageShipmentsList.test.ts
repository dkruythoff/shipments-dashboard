import { render } from "vitest-browser-vue";
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import vPageShipmentsList from "./vPageShipmentsList.vue";
import { defaults } from "./mocks";

test("renders as expected", async () => {
  await render(vPageShipmentsList, { props: defaults });

  await expect
    .element(page.getByTestId("v-page-shipment-list"))
    .toMatchScreenshot();
});
