export interface vTableRow {
  cells: any[];
}

export interface vTableProps {
  body: vTableRow[];
  foot?: vTableRow[];
  head?: vTableRow[];
}
