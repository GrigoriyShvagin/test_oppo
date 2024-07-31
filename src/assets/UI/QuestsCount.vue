<template>
  <div class="border" ref="border">
    <div class="gradient"><div class="color" ref="color"></div></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  precent: { Type: Number, default: 0 },
  borderWidth: { Type: String, default: "164px" },
  borderHeight: { Type: String, default: "11px" },
});
const color = ref(null);
const border = ref(null);

onMounted(() => {
  color.value.style.width = props.precent * 100 + "%";
  border.value.style.width = props.borderWidth;
  border.value.style.height = props.borderHeight;
});
</script>

<style lang="scss" scoped>
.border {
  display: flex;
  background: linear-gradient(
    267.01deg,
    #ffffff -1.04%,
    rgba(255, 255, 255, 0) 140.55%
  );
  border: none;
  border-radius: 10px;
  align-items: center;

  margin: 0 0 12px 0;
}
.gradient {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: #656565;
}
.color {
  height: 100%;
  background: linear-gradient(90deg, #4bfb7e 0%, rgba(75, 251, 126, 0) 100%);
  border-radius: 10px;
}
</style>
