<template>
  <Transition>
    <div v-if="show" class="task_main">
      <CloseIcon @click="close" class="closeIcon" />
      <div class="content">
        <img :src="img" alt="" @click="close" />
        <p class="text_info">{{ textInfo }}</p>
        <div class="button_block">
          <button>{{ buttonText }}</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

import { CloseIcon } from "../assets";

const isVisible = ref(false);

defineProps({
  show: { type: Boolean, default: false },
  img: { type: String, default: "/images/tasks/Task1.png" },
  textInfo: { type: String, default: "Перейдите по ссылке" },
  buttonText: { type: String, default: "Выполнить задание" },
});
const emit = defineEmits();

const open = () => {};

const close = () => {
  isVisible.value = false;
  emit("closed");
};
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from {
  transform: translateX(-83%);
}
.v-leave-to {
  transform: translateX(0);
}

.task_main {
  width: 100vw;
  height: 83vh;
  position: absolute;
  bottom: 0;
  z-index: 3;
  background: #201f1c;
  border-radius: 40px 40px 0 0;
  .closeIcon {
    position: absolute;
    right: 10%;
    top: 5%;
  }
}
</style>
