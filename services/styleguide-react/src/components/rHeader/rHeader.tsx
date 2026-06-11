import { rHeaderProps } from "./rHeader.types";

export const rHeader = ({ children }: rHeaderProps) => {
  return (
    <div className="c-header">
      {children}
    </div>
  );
};
