import { HTMLAttributes } from "react";
import { RNavigationProps } from "../rNavigation";
import { RTableProps } from "../rTable";

export interface RPageShipmentsListProps extends HTMLAttributes<HTMLDivElement> {
  navigation?: RNavigationProps;
  shipments?: RTableProps;
}
