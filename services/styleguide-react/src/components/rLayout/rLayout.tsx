import { RLayoutProps } from "./rLayout.types"

export const RLayout = ({
  children,
  className = "c-layout",
  header,
  aside,
  "data-testid": dataTestid = "r-layout",
  ...props
}: RLayoutProps) => {
  return (
    <div className={className} data-testid={dataTestid} {...props}>
      {header && <header>{header}</header>}
      {aside && <aside>{aside}</aside>}
      {children && <main>{children}</main>}
    </div>
  );
};
