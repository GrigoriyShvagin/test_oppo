<template>
  <div class="main">
    <div class="content">
      <EarnGreen class="earnGreen" />
      <img src="/images/NutStage1.png" alt="" />
      <p class="header">Получить вознаграждение</p>
      <button>Получить вознаграждение</button>
      <a href="" class="">Условия и правила получения выплат</a>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { EarnGreen } from "../assets";
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;
  a {
    text-decoration: none;
    color: #7c7c7c;
    font-size: 12px;
  }
  .content {
    width: 100%;
    height: 35%;
    padding-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .header {
    color: #fff;
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 36px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 3%;
  }
  .earnGreen {
    position: absolute;
    top: -5%;
    left: 15%;
    width: 300px;
    height: auto;
  }
  img {
    position: absolute;
    width: 150px;
    height: auto;
    top: 10%;
    left: 34%;
  }
  button {
    width: 90%;
    padding: 25px 0;
    border-radius: 7px;
    background: #ffffff1f;
    border: none;
    color: #aaaaaa;
    font-size: 16px;
    z-index: 20;
  }
}
</style>
