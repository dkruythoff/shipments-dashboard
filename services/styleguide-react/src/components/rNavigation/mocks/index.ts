import { type rNavigationProps } from "../rNavigation.types";

export const defaults = (
  action: () => unknown = () => {},
): rNavigationProps => ({
  nodes: [
    {
      label: "entry 1",
      href: "#",
    },
    {
      label: "entry 2",
      active: true,
      action,
    },
  ],
});
