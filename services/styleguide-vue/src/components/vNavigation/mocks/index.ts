import type { vNavigationProps } from "../vNavigation.types";

export const defaults = (
  action: () => unknown = () => {},
): vNavigationProps => ({
  nodes: [
    {
      label: "entry 1",
      href: "#",
    },
    {
      label: "entry 2",
      action,
    },
  ],
});
