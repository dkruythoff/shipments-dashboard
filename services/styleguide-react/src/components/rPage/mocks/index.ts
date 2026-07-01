import { type RPageProps } from "../rPage.types";
import * as navigationMocks from "../../rNavigation/mocks";

export const defaults: RPageProps = {
  children: "Page content",
  header: "Page header",
  navigation: navigationMocks.defaults(),
};
