<template>
  <div class="c-layout" data-testid="v-layout">
    <header v-if="$slots.header"><slot name="header"></slot></header>
    <aside v-if="$slots.aside"><slot name="aside"></slot></aside>
    <main v-if="$slots.main"><slot name="main"></slot></main>
  </div>
</template>
