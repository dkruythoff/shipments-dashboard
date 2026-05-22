import type { Shipment } from "@shipments/types";

export const getAll = (): Promise<Shipment[]> =>
  fetch(`${import.meta.env.VITE_API_BASE}/shipments`).then((res) => res.json());
