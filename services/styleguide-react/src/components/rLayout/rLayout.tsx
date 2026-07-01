import { RLayoutProps } from "./rLayout.types"

export const RLayout = ({
  children,
  className,
  header,
  aside,
  "data-testid": dataTestid = "r-layout",
  ...props
}: RLayoutProps) => {
  return (
    <div className={`c-layout${className ? ` ${className}` : ''}`} data-testid={dataTestid} {...props}>
      {header && <header>{header}</header>}
      {aside && <aside>{aside}</aside>}
      {children && <main>{children}</main>}
    </div>
  );
};
