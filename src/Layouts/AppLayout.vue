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
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
