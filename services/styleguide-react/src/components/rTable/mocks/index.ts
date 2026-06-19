import { type RTableProps } from "../rTable.types";

export const defaults: RTableProps = {
  body: [
    {
      cells: [1.1, 1.2, 1.3],
    },
    {
      cells: [2.1, 2.2, 2.3],
    },
  ],
  foot: [
    {
      cells: ["foot 1", "foot 2", "foot 3"],
    },
  ],
  head: [
    {
      cells: ["head 1", "head 2", "head 3"],
    },
  ],
};
