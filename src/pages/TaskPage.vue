<template>
  <div class="main">
    <div class="content">
      <WhiteBorder class="white_border" /><img
        src="/images/NutStage1.png"
        alt=""
        class="nut_header"
      />
      <p class="header_text">Выполняй задания и получай больше орехов</p>
      <div class="swaper">
        <p @click="currMenu = 'New'" :class="{ active: currMenu == 'New' }">
          Новые
        </p>
        <p @click="currMenu = 'Made'" :class="{ active: currMenu == 'Made' }">
          Выполненные
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { WhiteBorder } from "../assets";
let currMenu = ref("New");
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
  background-color: #060606;
  display: flex;
  justify-content: center;
  overflow: hidden;
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 88%;
    height: 100%;
    padding-top: 50%;
    .header_text {
      margin-bottom: 15px;
      color: #fff;
      text-align: center;
      font-weight: 500;
      font-size: 25px;
      line-height: 30px;
      letter-spacing: 3%;
    }
    .swaper {
      width: 90%;
      display: flex;
      justify-content: space-between;
      background: #201f1c;
      border-radius: 8px;
      z-index: 2;
      font-size: 12px;
      font-weight: 700;
      line-height: 10.32px;
      letter-spacing: 0.03em;
      color: #595959;
      margin-bottom: 15px;
      p {
        width: 50%;
        text-align: center;
        padding: 6px 0;
        display: flex;
        justify-content: center;
        border-radius: 8px;
      }
      .active {
        background: #d9d9d9;
        color: #000;
      }
    }
  }
  .white_border {
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
  }
  .nut_header {
    position: absolute;
    width: 50%;
    height: auto;
    top: 3%;
    left: 25%;
  }
}
</style>
