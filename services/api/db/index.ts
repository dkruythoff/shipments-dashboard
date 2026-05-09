import { DatabaseSync } from "node:sqlite";
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
const statusOptions = ["pending", "transit", "delayed", "delivered"] as const;

insert.run(origin, destination, statusOptions[0]);
insert.run(origin, destination, statusOptions[1]);
insert.run(origin, destination, statusOptions[2]);
insert.run(origin, destination, statusOptions[3]);

export const getAll = () => {
  const query = database.prepare("SELECT * FROM shipments");
  return query.all();
};

export const getByStatus = (status: (typeof statusOptions)[number]) => {
  const query = database.prepare("SELECT * FROM shipments WHERE status = ?");
  return query.all(status);
};
