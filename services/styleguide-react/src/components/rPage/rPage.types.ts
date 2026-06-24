import { HTMLAttributes, ReactNode } from "react";
import { RNavigationProps } from "../rNavigation";

export interface RPageProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  navigation?: RNavigationProps;
}
