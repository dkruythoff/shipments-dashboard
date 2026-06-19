interface rNavigationNodeBase {
  active?: boolean;
  label: string;
}

interface rNavigationNodeAction extends rNavigationNodeBase {
  action: () => void;
  href?: never;
}

interface rNavigationNodeLink extends rNavigationNodeBase {
  action?: never;
  href: string;
}

type rNavigationNode = rNavigationNodeAction | rNavigationNodeLink;

export interface rNavigationProps {
  nodes: rNavigationNode[];
}
