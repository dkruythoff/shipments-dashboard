<script setup lang="ts">
import { type vPageProps } from "./vPage.types";
import { vLayout, vNavigation } from "..";

defineProps<vPageProps>();
</script>

<template>
  <vLayout data-testid="v-page">
    <template #aside>
      <vNavigation v-if="navigation" v-bind="navigation" />
    </template>
    <template #header> Shipment dashboard </template>
    <template #main><slot></slot></template>
  </vLayout>
</template>
