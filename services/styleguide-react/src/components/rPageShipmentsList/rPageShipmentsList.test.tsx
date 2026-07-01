import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { RPageShipmentsList } from "./rPageShipmentsList";
import { defaults } from "./mocks";

test("renders as expected", async () => {
  await render(<RPageShipmentsList {...defaults} />);

  await expect
    .element(page.getByTestId("r-page-shipment-list"))
    .toMatchScreenshot();
});
