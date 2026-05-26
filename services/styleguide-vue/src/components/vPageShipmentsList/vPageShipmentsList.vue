<script setup lang="ts">
import { type vPageShipmentsListProps } from "./vPageShipmentsList.types";
import { vPage, vTable } from "..";

defineProps<vPageShipmentsListProps>();
</script>

<template>
  <vPage
    :navigation
    data-testid="v-page-shipment-list"
    class="c-page-shipment-list"
  >
    <template #header>Shipment dashboard</template>
    <vTable v-if="shipments" v-bind="shipments" />
  </vPage>
</template>
