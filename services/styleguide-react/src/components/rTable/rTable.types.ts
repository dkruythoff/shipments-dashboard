import { ReactNode } from "react";

export interface RTableRow {
  cells: Array<string | number>;
  key?: string;
  [key: string]: unknown;
}

export interface RTableProps {
  body: RTableRow[];
  caption?: ReactNode;
  foot?: RTableRow[];
  head?: RTableRow[];
}
