<template>
  <component :is="layout" />
</template>

<script setup>
import AppLayout from "./Layouts/AppLayout.vue";

import { computed } from "vue";

const layout = computed(() => AppLayout);
</script>

<style scoped></style>
