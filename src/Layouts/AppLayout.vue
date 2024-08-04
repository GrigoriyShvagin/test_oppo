<template>
  <p class="">
    {{ tg.user }}
  </p>
  <div class="content">
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Footer from "../components/Footer.vue";
import { useUserStore } from "../store/userStore";

const tg = window.Telegram.WebApp.initDataUnsafe;

const userStore = useUserStore();

function checkToken() {
  if (tg.user != null) {
    userStore.setUserData({
      username: tg.user.username,
      firstName: tg.user.first_name,
      lastName: tg.user.last_name,
      photo: tg.user.photo_url,
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
</style>
