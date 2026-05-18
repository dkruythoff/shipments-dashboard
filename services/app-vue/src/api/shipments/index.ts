export const getAll = () =>
  fetch("//localhost:8000/shipments").then((res) => res.json());
