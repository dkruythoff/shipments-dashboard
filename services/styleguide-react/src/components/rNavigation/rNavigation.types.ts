interface RNavigationNodeBase {
  active?: boolean;
  label: string;
}

interface RNavigationNodeAction extends RNavigationNodeBase {
  action: () => void;
  href?: never;
}

interface RNavigationNodeLink extends RNavigationNodeBase {
  action?: never;
  href: string;
}

type RNavigationNode = RNavigationNodeAction | RNavigationNodeLink;

export interface RNavigationProps {
  nodes: RNavigationNode[];
}
