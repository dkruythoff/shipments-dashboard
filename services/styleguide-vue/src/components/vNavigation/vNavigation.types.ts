interface vNavigationNodeBase {
  active?: boolean;
  label: string;
}

interface vNavigationNodeAction extends vNavigationNodeBase {
  action: () => void;
  href?: never;
}

interface vNavigationNodeLink extends vNavigationNodeBase {
  action?: never;
  href: string;
}

type vNavigationNode = vNavigationNodeAction | vNavigationNodeLink;

export interface vNavigationProps {
  nodes: vNavigationNode[];
}
