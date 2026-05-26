import type { vPageParams, vPageProps, vPageSlots } from "../vPage.types";
import * as navigationMocks from "../../vNavigation/mocks";

export const defaultProps: vPageProps = {
  navigation: navigationMocks.defaults(),
};

export const defaultSlots: vPageSlots = {
  default: "Page content",
  header: "Page header",
};

export const defaults: vPageParams = {
  ...defaultSlots,
  ...defaultProps,
};
