import { HTMLAttributes, ReactNode } from "react";

export interface RLayoutProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  aside?: ReactNode;
  "data-testid"?: string;
}
