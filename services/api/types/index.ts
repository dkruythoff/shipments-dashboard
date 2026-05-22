import * as z from "zod";

export const ShipmentStatusOptions = [
  "pending",
  "transit",
  "delayed",
  "delivered",
] as const;
export type ShipmentStatus = (typeof ShipmentStatusOptions)[number];

export const ShipmentSchema = z.object({
  id: z.number(),
  origin: z.string(),
  destination: z.string(),
  status: z.enum(ShipmentStatusOptions),
  updatedAt: z.number().nullable(),
  createdAt: z.number(),
});
export type Shipment = z.infer<typeof ShipmentSchema>;
