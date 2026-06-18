import { ReactNode } from "react";

export interface rTableRow {
  cells: Array<string | number>;
  key?: string;
  [key: string]: unknown;
}

export interface rTableProps {
  body: rTableRow[];
  caption?: ReactNode;
  foot?: rTableRow[];
  head?: rTableRow[];
}
