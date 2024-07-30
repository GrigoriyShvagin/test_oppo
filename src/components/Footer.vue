<template>
  <div class="main">
    <div class="footer_content">
      <p class="current_menu" @click="$router.push('/')">
        <Crack class="crack" /><span class="crack_text">Колоть!</span>
      </p>
      <p @click="$router.push('/tasks')"><Tasks /><span>Задания</span></p>
      <p><Friends /><span>Друзья</span></p>
      <p><Exchange /><span>Обмен</span></p>
      <p><Rating /><span>Рейтинг</span></p>
    </div>
  </div>
</template>

<script setup>
import { Tasks, Friends, Crack, Exchange, Rating } from "../assets";
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 90vw;
  left: 5vw;
  padding: 1px;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(
    253.35deg,
    #ffffff -9.36%,
    rgba(255, 255, 255, 0) 89.46%
  );
  z-index: 20;
  .footer_content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: var(--gray-bg);
    border-radius: 10px 10px 0 0;
    p {
      position: relative;
      font-size: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        color: #fafafa;
      }
      svg:not(.crack) {
        width: 16px;
        height: 16px;
      }
    }
  }
  .crack {
    position: absolute;
    bottom: -50%;
    left: -70%;
    width: 100px;
    height: auto;
  }
  .crack_text {
    margin-top: 16px;
  }
}
</style>
