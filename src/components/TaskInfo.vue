<template>
  <div :class="{ active: show }" class="task_main">
    <CloseIcon @click="close" class="closeIcon" />
    <div class="content">
      <div class="img_block"><img :src="img" alt="" @click="close" /></div>
      <p class="text_info">{{ textInfo }}</p>
      <a :href="link" ref="check" class="button_block">
        <p class="button">{{ buttonText }}</p>
        <div class="gradient" ref="gradient"></div>
      </a>
      <div class="reward">
        <p>
          + {{ nuts }}
          <img src="/images/NutStage1.png" alt="" class="nut" />
          <span v-if="bonus == 'energy'">+ x2 восстановление энергии</span>
          <span v-if="bonus == 'nuts'">+ 3 ореха за удар</span>
        </p>
      </div>
      <div class="check_button" @click="checkFunc">Проверить</div>
      <p class="check checked" v-if="checked">Получено :)</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, onUnmounted } from "vue";

import { CloseIcon } from "../assets";

let check = ref(null);
let isLoading = ref(false);
let gradient = ref(null);
let checked = ref(false);

const isVisible = ref(false);
let closeAnim = null;
let checkedAnim = null;

function checkFunc() {
  isLoading.value = true;
  check.value.style.opacity = 0.2;
  checkedAnim = setInterval(() => {
    isLoading.value = false;
    checked.value = true;
    closeAnim = setInterval(() => {
      close();
    }, 800);
  }, 4000);
}

defineProps({
  show: { type: Boolean, default: false },
  img: { type: String, default: "/images/tasks/Task1.png" },
  link: { type: String, default: "https://google.com" },
  textInfo: { type: String, default: "Перейдите по ссылке" },
  buttonText: { type: String, default: "Выполнить задание" },
  bonus: { type: String, default: null },
  nuts: { type: Number, default: 0 },
});
const emit = defineEmits();

const close = () => {
  clearInterval(closeAnim);
  clearInterval(checkedAnim);
  checked.value = false;
  check.value.style.opacity = 1;

  isVisible.value = false;
  emit("closed");
};
</script>

<style lang="scss" scoped>
.task_main {
  transition: all 0.5s ease;
  width: 100vw;
  height: 83vh;
  transform: translateY(83vh);
  position: fixed;
  bottom: 0;
  z-index: 3;
  background: #201f1c;
  display: flex;
  justify-content: center;
  border-radius: 40px 40px 0 0;
  border: 1px solid white;
  a {
    text-decoration: none;
  }
  .closeIcon {
    position: absolute;
    right: 10%;
    top: 5%;
  }
  .content {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img_block {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25%;
      height: 25%;
      img {
        width: 100%;
        height: auto;
      }
    }
    .text_info {
      font-size: 26px;
      text-align: center;
      color: white;
      margin-bottom: 40px;
    }
    .reward {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      p {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: white;
        font-weight: 700;
      }
      img {
        width: 40px;
        height: 40px;
      }
    }
    .check_button {
      margin-top: 30px;
      color: white;
      font-size: 16px;
      font-weight: 700;
    }
    .button_block {
      width: 60%;
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #201f1c;
      position: relative;
      border-radius: 10vw;
      margin-bottom: 20px;
      .button {
        display: flex;
        justify-content: center;
        z-index: 1;
        width: 100%;
        text-align: center;
        font-size: 16px;
        color: white;
      }
      .gradient {
        width: 100%;
        height: 100%;
        border-radius: 10vw;
        position: absolute;
        z-index: 0;
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.12),
            rgba(255, 255, 255, 0.12)
          ),
          linear-gradient(270deg, rgba(44, 255, 116, 0) 23.37%, #2cff74 102.81%);
      }
    }
    .check {
      transition: 0.5s ease;
      margin-top: 30px;
      font-size: 20px;
      color: white;
    }
    .checked {
      color: #2cff74;
    }
    .gif {
      width: auto;
      height: 50px;
    }
  }
}
.active {
  transition: all 0.5s ease;
  transform: none;
}
</style>
