export const getAll = () =>
  fetch(`${import.meta.env.VITE_API_BASE}/shipments`).then((res) => res.json());
