import { RNavigationProps } from "./rNavigation.types";

export const RNavigation = ({ nodes }: RNavigationProps) => {
  return (
    !nodes?.length ? undefined : <ul className="c-navigation" data-testid="r-navigation">
      {
        nodes.map((node, nodeIndex) => {
          return <li
            key={node?.key || `navigation-item-${nodeIndex}`}
            className={`c-navigation__item${node.active ? ' is-active' : ''}`}
          >
            {
              node.href
                ? <a href={node.href}>{node.label}</a>
                : <button onClick={node.action}>{node.label}</button>
            }
          </li>
        })
      }
    </ul>
  );
};
