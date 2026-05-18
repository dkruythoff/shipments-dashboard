<script setup lang="ts">
import { ref } from "vue";
import * as api from "../../api";

const shipments = ref([]);
api.shipments.getAll().then((res) => (shipments.value = res));
</script>

<template>
  Shipments
  <pre v-if="shipments.length">{{
    JSON.stringify(shipments, undefined, 2)
  }}</pre>
</template>
