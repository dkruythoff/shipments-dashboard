import { RTableProps, RTableRow } from "./rTable.types";

const renderRows = (rows: RTableRow[], tablePart: 'body' | 'head' | 'foot' = 'body', Cell: 'td' | 'th' = 'td') =>
  rows.map(
    (row, rowIndex) => (<tr key={`${tablePart}-${row?.key || rowIndex}`}>{row.cells.map(
      cell => (<Cell key={`${tablePart}-${row?.key || rowIndex}-${cell}`}>{cell}</Cell>)
    )}</tr>)
  )

export const RTable = ({ body, caption, foot, head }: RTableProps) => {
  return (
    <div className="scroll-h | c-table" data-testid="r-table">
      <table>
        {!caption ? undefined : <caption>{caption}</caption>}
        {!head?.length ? undefined : <thead>{renderRows(head, 'head', 'th')}</thead>}
        <tbody>{renderRows(body)}</tbody>
        {!foot?.length ? undefined : <tfoot>{renderRows(foot, 'foot')}</tfoot>}
      </table>
    </div>
  );
};
