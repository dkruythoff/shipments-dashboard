import React from "react";
import { RPageShipmentsListProps } from "./rPageShipmentsList.types";
import { RPage, RTable } from "..";

export const RPageShipmentsList = ({ navigation, shipments }: RPageShipmentsListProps) => {
  return (
    <RPage
      className="c-page-shipment-list"
      data-testid="r-page-shipment-list"
      header="Shipment dashboard"
      navigation={navigation}
    >
      {shipments ? <RTable {...shipments} /> : null}
    </RPage>
  );
};
