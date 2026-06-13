import React from "react";
import { rHeaderProps } from "./rHeader.types";

export const rHeader = ({ children }: rHeaderProps) => {
  return (
    <div className="c-header" data-testid="r-header">
      {children}
    </div>
  );
};
