<template>
  <div class="border">
    <div class="gradient"><div class="color" ref="color"></div></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({ precent: { Type: Number, default: 0 } });
const color = ref(null);

onMounted(() => {
  color.value.style.width = props.precent * 100 + "%";
});
</script>

<style lang="scss" scoped>
.border {
  display: flex;
  width: 164px;
  height: 11px;
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
  width: 163px;
  height: 10px;
  border-radius: 10px;
  background: #656565;
}
.color {
  height: 11px;
  background: linear-gradient(90deg, #4bfb7e 0%, rgba(75, 251, 126, 0) 100%);
  border-radius: 10px;
}
</style>
