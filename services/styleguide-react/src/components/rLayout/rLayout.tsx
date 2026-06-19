import React from "react";
import { rLayoutProps } from "./rLayout.types";

export const rLayout = ({
  header,
  aside,
  main
}: rLayoutProps) => {
  return (
    <div className="c-layout" data-testid="r-layout">
      <header>{header}</header>
      <aside>{aside}</aside>
      <main>{main}</main>
    </div>
  );
};
