export interface vTableRow {
  cells: Array<string | number>;
  [key: string]: unknown;
}

export interface vTableProps {
  body: vTableRow[];
  foot?: vTableRow[];
  head?: vTableRow[];
}
