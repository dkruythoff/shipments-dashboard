import React from "react";
import { RTableProps, RTableRow } from "./rTable.types";

const renderRows = (rows: RTableRow[], Cell: 'td' | 'th' = 'td') =>
  rows.map((row) => (<tr key={row?.key || `${row.cells}`}>{row.cells.map(cell => (<Cell>{cell}</Cell>))}</tr>))

export const RTable = ({ body, caption, foot, head }: RTableProps) => {
  return (
    <div className="scroll-h | c-table" data-testid="r-table">
      <table>
        {!caption ? undefined : <caption>{caption}</caption>}
        {!head?.length ? undefined : <thead>{renderRows(head, 'th')}</thead>}
        <tbody>{renderRows(body)}</tbody>
        {!foot?.length ? undefined : <tfoot>{renderRows(foot)}</tfoot>}
      </table>
    </div>
  );
};
