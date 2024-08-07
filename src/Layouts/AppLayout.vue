<template>
  <div class="video-container" v-if="isLoading">
    <video autoplay muted playsinline loop>
      <source src="/loadingVideo.mp4" type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
  </div>
  <div class="content">
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import Footer from "../components/Footer.vue";
import { useUserStore } from "../store/userStore";

const tg = window.Telegram.WebApp.initDataUnsafe;

let isLoading = ref(true);
let timeoutID = null;

const userStore = useUserStore();

function checkToken() {
  if (tg.user != null) {
    userStore.setUserData({
      username: tg.user.username,
      firstName: tg.user.first_name,
      lastName: tg.user.last_name,
      id: tg.user.id,
    });
  } else {
    userStore.setUserData({
      username: "grigoriy",
      firstName: "check",
      lastName: "check",
      id: 228,
    });
  }
}

onMounted(() => {
  checkToken();
  timeoutID = setTimeout(() => {
    isLoading.value = false;
  }, 3800);
});

onBeforeUnmount(() => {
  clearTimeout(timeoutID);
});
</script>

<style lang="scss" scoped>
p {
  color: white;
}
.content {
  overflow: hidden;
  overscroll-behavior: contain;
}
.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 9999; /* Обеспечивает, что видео будет поверх всего */
}

video {
  width: 100%;
  height: 100%;
  background: black;
  object-fit: cover; /* Позволяет видео заполнять контейнер */
}
</style>
