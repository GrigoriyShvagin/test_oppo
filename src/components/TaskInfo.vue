<template>
  <div :class="{ active: show }" class="task_main" @click="changeBlur($event)">
    <CloseIcon @click="close" class="closeIcon" />
    <div class="content">
      <div class="img_block"><img :src="img" alt="" @click="close" /></div>
      <p class="text_info">{{ textInfo }}</p>
      <input
        v-if="id == 6"
        type="text"
        v-model="inputLink"
        placeholder="Введите ссылку на ваше видео"
        class="inputLink"
      />
      <a
        v-else-if="id == 1"
        @click="tg.openLink(`https://www.youtube.com/@OppoRussia`)"
        ref="check"
        class="button_block"
        ><p class="button">{{ buttonText }}</p>
        <div class="gradient" ref="gradient"></div
      ></a>
      <a
        v-else-if="id !== 2"
        @click="tg.openLink(link)"
        ref="check"
        class="button_block"
      >
        <p class="button">{{ buttonText }}</p>
        <div class="gradient" ref="gradient"></div>
      </a>
      <router-link
        v-else-if="id == 2"
        :to="'/friends'"
        ref="check"
        class="button_block"
      >
        <p class="button">{{ buttonText }}</p>
        <div class="gradient" ref="gradient"></div>
      </router-link>
      <div class="reward">
        <p>
          +{{ nuts }}
          <img src="/images/NutStage1.png" alt="" class="nut" />
          <span v-if="bonus == 'energy'">+ x2 восстановление энергии</span>
          <span v-if="bonus == 'nuts'">+ 3 ореха за удар</span>
        </p>
      </div>
      <div class="check_button" v-if="id !== 6" @click="checkFunc(id)">
        Проверить
      </div>
      <div
        class="check_button"
        ref="checkButton"
        v-else
        @click="sendLinkFunc(id)"
      >
        Проверить
      </div>
      <p class="check checked" v-if="checked">Получено :)</p>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, onMounted, ref } from "vue";
import { useTaskStore } from "../store/taskStore";
import { CloseIcon } from "../assets";

const taskStore = useTaskStore();

const tg = Telegram.WebApp;

const inputLink = ref(null);

const checkButton = ref(null);

let isClicked = ref(false);

let check = ref(null);
let isLoading = ref(false);
let gradient = ref(null);
let checked = ref(false);

const isVisible = ref(false);
let closeAnim = null;
let checkedAnim = null;

function checkFunc(id) {
  isLoading.value = true;
  check.value.style.opacity = 0.2;
  taskStore.completeTask({ id }).then(() => {
    taskStore.getCompletedTasks();
    taskStore.getTasks();
  });
  checkedAnim = setInterval(() => {
    isLoading.value = false;
    checked.value = true;
    closeAnim = setInterval(() => {
      close();
    }, 800);
  }, 4000);
}

function sendLinkFunc(id) {
  checkButton.value.style.opacity = 0.2;
  isLoading.value = true;
  if (isClicked.value !== true) {
    taskStore.setLink({ id, link: inputLink.value });
  }
  checkedAnim = setInterval(() => {
    isLoading.value = false;
    closeAnim = setInterval(() => {
      close();
      emit("closed");
    }, 800);
  }, 4000);
  isClicked.value = true;
}

defineProps({
  show: { type: Boolean, default: false },
  img: { type: String },
  link: { type: String },
  textInfo: { type: String },
  buttonText: { type: String },
  bonus: { type: String, default: null },
  nuts: { type: Number, default: null },
  id: { type: Number, default: 0 },
});
const emit = defineEmits();

const close = () => {
  clearInterval(closeAnim);
  clearInterval(checkedAnim);
  checked.value = false;

  isVisible.value = false;
  emit("closed");
};

function changeBlur(e) {
  if (!e.target.localName == "textarea" || !e.target.localName == "input") {
    document.activeElement.blur();
  }
}
</script>

<style lang="scss" scoped>
.task_main {
  transition: all 0.5s ease;
  width: 100vw;
  height: 83vh;
  position: fixed;
  bottom: -83vh;
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
        border-radius: 20px;
      }
    }
    .text_info {
      font-size: 26px;
      text-align: center;
      color: white;
      margin-bottom: 40px;
    }
    .inputLink {
      width: 80%;
      padding: 10px;
      font-size: 16px;
      background: rgba(255, 255, 255, 0.1215686275);
      border: none;
      border-radius: 10px;
      margin-bottom: 20px;
      color: white;
      outline: none;
    }
    .reward {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      p {
        display: flex;
        align-items: center;
        font-size: 16px;
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
      font-size: 20px;
      font-weight: 200;
      padding: 15px 100px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.1215686275);
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
      animation: scale 2s infinite;
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
  bottom: 0;
}
@keyframes scale {
  50% {
    transform: scale(1.05);
  }
}
</style>
