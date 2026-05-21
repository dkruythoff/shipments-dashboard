<script setup lang="ts">
import { computed, ref } from "vue";
import {
  vPageShipmentsList,
  type vNavigationProps,
  type vPageShipmentsListProps,
  type vTableProps,
} from "@shipments/ui";
import * as api from "../../api";
import { useRouter } from "vue-router";

const router = useRouter();

const navigationData: vNavigationProps = {
  nodes: [
    {
      label: "Shipments",
      action: () => router.push("/shipments"),
    },
  ],
};

const shipments = ref([]);
api.shipments.getAll().then((res) => (shipments.value = res));

const tableData = computed<vTableProps | undefined>(() => {
  if (!shipments.value.length) return undefined;

  const head: vTableProps["head"] = [
    { cells: Object.keys(shipments.value[0]) },
  ];
  const body: vTableProps["body"] = shipments.value.map((entry) => ({
    cells: Object.values(entry),
  }));

  return {
    body,
    head,
  };
});

const shipmentListData = computed((): vPageShipmentsListProps => {
  return {
    shipments: tableData.value,
    navigation: navigationData,
  };
});
</script>

<template>
  <vPageShipmentsList v-bind="shipmentListData" />
</template>
