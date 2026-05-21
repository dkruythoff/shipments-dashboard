<script setup lang="ts">
import type { vNavigationProps } from "./vNavigation.types";

defineProps<vNavigationProps>();
</script>

<template>
  <ul v-if="nodes.length" data-testid="v-navigation">
    <li v-for="node in nodes">
      <component
        :is="node.href ? 'a' : 'button'"
        :href="node.href"
        @click="node.action"
      >
        {{ node.label }}
      </component>
    </li>
  </ul>
</template>
