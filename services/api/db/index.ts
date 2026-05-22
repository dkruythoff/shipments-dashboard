import { DatabaseSync } from "node:sqlite";
import {
  ShipmentSchema,
  ShipmentStatus,
  ShipmentStatusOptions,
} from "../types/index.ts";

const database = new DatabaseSync(":memory:");

database.exec(`
CREATE TABLE shipments(
    id INTEGER PRIMARY KEY,
    origin TEXT,
    destination TEXT,
    status TEXT,
    updatedAt INTEGER,
    createdAt INTEGER DEFAULT (unixepoch('now'))
);`);

const insert = database.prepare(`
  INSERT INTO shipments (origin, destination, status) VALUES (?, ?, ?)
`);

const origin = `Imaginary Street 43
12345 Vaporage
Testcountry`;
const destination = `Destination Lane 56
67890 Testage
FooBar`;

insert.run(origin, destination, ShipmentStatusOptions[0]);
insert.run(origin, destination, ShipmentStatusOptions[1]);
insert.run(origin, destination, ShipmentStatusOptions[2]);
insert.run(origin, destination, ShipmentStatusOptions[3]);

export const getAll = () => {
  const query = database.prepare("SELECT * FROM shipments");
  return ShipmentSchema.array().parse(query.all());
};

export const getByStatus = (status: ShipmentStatus) => {
  const query = database.prepare("SELECT * FROM shipments WHERE status = ?");
  return ShipmentSchema.array().parse(query.all(status));
};
