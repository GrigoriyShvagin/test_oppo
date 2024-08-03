<template>
  <component :is="layout" />
</template>

<script setup>
import AppLayout from "./Layouts/AppLayout.vue";

import { computed, onMounted } from "vue";

const layout = computed(() => AppLayout);

const date = new Date().getDay();

onMounted(() => {
  localStorage.setItem("lastSeen", date);
});
</script>

<style scoped></style>
