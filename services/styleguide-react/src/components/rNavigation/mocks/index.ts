import { type RNavigationProps } from "../rNavigation.types";

export const defaults = (
  action: () => unknown = () => {},
): RNavigationProps => ({
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
