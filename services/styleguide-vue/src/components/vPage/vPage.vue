<script setup lang="ts">
import { type vPageProps } from "./vPage.types";
import { vHeader, vLayout, vNavigation } from "..";

defineProps<vPageProps>();
</script>

<template>
  <vLayout data-testid="v-page">
    <template #aside>
      <vNavigation v-if="navigation" v-bind="navigation" />
    </template>
    <template #header>
      <vHeader>
        <slot name="header"></slot>
      </vHeader>
    </template>
    <template #main>
      <div class="c-page__main">
        <slot></slot>
      </div>
    </template>
  </vLayout>
</template>
