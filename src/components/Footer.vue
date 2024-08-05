<template>
  <div class="main">
    <div class="footer_content">
      <p class="current_menu" @click="$router.push('/')">
        <Crack class="crack" :class="{ opacity: $route.path !== '/' }" />
        <defaultCrack :class="{ opacity: $route.path == '/' }" /><span
          class="crack_text"
          >Колоть!</span
        >
      </p>
      <p @click="$router.push('/tasks')">
        <TasksLight
          :class="{ opacity: $route.path !== '/tasks' }"
          class="tasks"
        /><Tasks :class="{ opacity: $route.path == '/tasks' }" /><span
          class="exchange_text"
          >Задания</span
        >
      </p>
      <p @click="$router.push('/friends')">
        <FriendsLight
          class="exchange"
          :class="{ opacity: $route.path !== '/friends' }"
        />
        <Friends :class="{ opacity: $route.path == '/friends' }" /><span
          class=""
          >Друзья</span
        >
      </p>
      <p @click="$router.push('/earnings')">
        <ExchangeLight
          :class="{ opacity: $route.path !== '/earnings' }"
          class="exchange"
        /><Exchange :class="{ opacity: $route.path == '/earnings' }" /><span
          >Обмен</span
        >
      </p>
      <p @click="$router.push('/rating')">
        <RatingLight
          :class="{ opacity: $route.path !== '/rating' }"
          class="exchange"
        /><Rating :class="{ opacity: $route.path == '/rating' }" /><span
          >Рейтинг</span
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";
import {
  Tasks,
  ExchangeLight,
  RatingLight,
  Friends,
  Crack,
  defaultCrack,
  Exchange,
  Rating,
  TasksLight,
  FriendsLight,
} from "../assets";
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0%;
  height: 50px;
  width: 90vw;
  left: 5%;
  padding: 1px 1px 0 1px;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(
    253.35deg,
    #ffffff -9.36%,
    rgba(255, 255, 255, 0) 89.46%
  );
  overflow: hidden;
  z-index: 20;
  .footer_content {
    width: 100%;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: var(--gray-bg);
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    p {
      position: relative;
      font-size: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        color: #fafafa;
      }
      span {
        margin-top: 5px;
      }
      svg {
        transition: all 0.3s linear;
      }
      svg:not(.crack, .exchange, .tasks) {
        width: 16px;
        height: 16px;
      }
    }
  }
  .exchange {
    position: absolute;
    width: 85px;
    height: auto;
    bottom: -43%;
  }
  .tasks {
    position: absolute;
    width: 85px;
    height: auto;
    bottom: -43%;
  }
  .crack {
    position: absolute;
    bottom: -53%;
    left: -100%;
    width: 120px;
    height: auto;
  }
}
@media screen and (min-height: 700px) {
  .main {
    height: 70px;
  }
  .footer_content {
    padding-bottom: 20px !important;
    p {
      font-size: 14px !important;
      margin-top: 10px;
    }
    svg:not(.crack, .exchange, .tasks) {
      width: 22px !important;
      height: 22px !important;
    }
    .crack {
      position: absolute;
      bottom: -45%;
      left: -89%;
      width: 154px;
      height: auto;
    }
    .exchange {
      position: absolute;
      width: 110px;
      height: auto;
      bottom: -38%;
    }
    .tasks {
      position: absolute;
      width: 110px;
      height: auto;
      bottom: -38%;
    }
  }
}
.opacity {
  opacity: 0;
}
</style>
