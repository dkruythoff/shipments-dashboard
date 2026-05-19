<script setup lang="ts">
import { computed, ref } from "vue";
import { vTable, type vTableProps } from "@shipments/ui";
import * as api from "../../api";

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
</script>

<template>
  Shipments
  <vTable v-if="tableData" v-bind="tableData" />
</template>
