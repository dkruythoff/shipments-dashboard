import React from "react";
import { RLayoutProps } from "./rLayout.types"

export const RLayout = ({
  className = "c-layout",
  header,
  aside,
  main,
  "data-testid": dataTestid = "r-layout",
  ...props
}: RLayoutProps) => {
  return (
    <div className={className} data-testid={dataTestid} {...props}>
      {header && <header>{header}</header>}
      {aside && <aside>{aside}</aside>}
      {main && <main>{main}</main>}
    </div>
  );
};
