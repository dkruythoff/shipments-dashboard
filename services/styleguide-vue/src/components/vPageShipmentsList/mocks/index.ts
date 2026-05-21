import { type vPageShipmentsListProps } from "../vPageShipmentsList.types";
import * as pageMocks from "../../vPage/mocks";

const origin = "Imaginary Street 43\n12345 Vaporage\nTestcountry";
const destination = "Destination Lane 56\n67890 Testage\nFooBar";

export const defaults: vPageShipmentsListProps = {
  ...pageMocks.defaults,
  shipments: {
    head: [{ cells: ["origin", "destination", "status"] }],
    body: [
      { cells: [origin, destination, "pending"] },
      { cells: [origin, destination, "transit"] },
      { cells: [origin, destination, "delayed"] },
      { cells: [origin, destination, "delivered"] },
    ],
  },
};
