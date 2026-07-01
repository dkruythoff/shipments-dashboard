import { RHeaderProps } from "./rHeader.types";

export const RHeader = ({ children }: RHeaderProps) => {
  return (
    <div className="c-header" data-testid="r-header">
      {children}
    </div>
  );
};
