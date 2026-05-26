<script setup lang="ts">
import type { vTableProps } from "./vTable.types";

defineProps<vTableProps>();
</script>

<template>
  <div class="scroll-h | c-table">
    <table>
      <caption v-if="$slots.caption">
        <slot name="caption"></slot>
      </caption>
      <thead v-if="head?.length">
        <tr
          v-for="(row, rowIndex) in head"
          :key="String(row?.key) || `row-head-${rowIndex}`"
        >
          <th v-for="cell in row.cells">{{ cell }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in body"
          :key="String(row?.key) || `row-body-${rowIndex}`"
        >
          <td v-for="cell in row.cells">{{ cell }}</td>
        </tr>
      </tbody>
      <tfoot v-if="foot?.length">
        <tr
          v-for="(row, rowIndex) in foot"
          :key="String(row?.key) || `row-foot-${rowIndex}`"
        >
          <td v-for="cell in row.cells">{{ cell }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
