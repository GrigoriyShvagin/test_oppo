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
  width: 100dvw;
  height: 100dvh;
  padding-bottom: env(safe-area-inset-bottom);
  overflow: hidden;
}
</style>
