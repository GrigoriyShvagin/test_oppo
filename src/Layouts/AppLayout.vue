<template>
  <div class="content">
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
</script>

<style lang="scss" scoped>
.content {
  overflow: hidden;
}
</style>
