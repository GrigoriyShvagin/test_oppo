<template>
  <div class="main">
    <div class="content">
      <EarnGreen class="earnGreen" />
      <img src="/images/NutStage1.png" alt="" />
      <p class="header">Получить вознаграждение</p>
      <button>Получить вознаграждение</button>
      <ul class="list_for_earn">
        Условия получения вознаграждения:
        <li>Общий игровой период - не менее 3 дней</li>
        <li>Ежедневная активность в игре</li>
        <li>Выполнение не менее 4-х заданий</li>
        <li>Баланс не менее 100 000 орехов</li>
        <li>Получить вознаграждение можно только 1 раз за игровой период</li>
      </ul>
      <a href="https://google.com" class="link"
        >Полные правила активности и условия получения вознаграждения</a
      >
    </div>
  </div>
</template>

<script setup>
import { EarnGreen } from "../assets";
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #000;
  overflow: hidden;
  a {
    color: #2cff74;
    font-size: 14px;
    max-width: 90%;
    margin-top: 20px;
    text-align: center;
  }
  .content {
    width: 100%;
    height: 35%;
    padding-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    .list_for_earn {
      font-size: 14px;
      color: white;
      width: 90%;
      list-style: none;
      li {
        margin: 5px 0;
      }
    }
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
