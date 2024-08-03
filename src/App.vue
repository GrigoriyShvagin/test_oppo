<template>
  <component :is="layout" />
</template>

<script setup>
import AppLayout from "./Layouts/AppLayout.vue";

import { computed, onMounted } from "vue";

const layout = computed(() => AppLayout);

onMounted(() => {});
</script>

<style scoped></style>
