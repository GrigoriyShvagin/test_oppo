<template>
  <div class="main">
    <div class="content">
      <WhiteBorder class="white_border" /><img
        src="/images/NutStage1.png"
        alt=""
        class="nut_header"
      />
      <p class="header_text">
        Выполняйте задания и получайте больше орехов и энергии
      </p>
      <div class="swaper">
        <p @click="currMenu = 'New'" :class="{ active: currMenu == 'New' }">
          Новые
        </p>
        <p @click="currMenu = 'Made'" :class="{ active: currMenu == 'Made' }">
          Выполненные
        </p>
      </div>
      <div class="tasks_list">
        <div
          class="task"
          v-if="currMenu == 'New'"
          v-for="item in allTasks.new"
          :key="item"
        >
          <img
            class="task_img"
            :src="'/images/tasks/Task' + item.id + '.png'"
            alt=""
          />
          <div class="task_content">
            <p class="task_text">{{ item.description }}</p>
            <p class="nutsCount">
              + {{ item.nuts }} <img src="/images/NutStage1.png" alt="" />
            </p>
          </div>
          <button>Начать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { WhiteBorder } from "../assets";
let currMenu = ref("New");

const allTasks = {
  new: [
    {
      id: 1,
      description: "Посетить официальный онлайн-магазин OPPO",
      nuts: 5000,
    },
    {
      id: 4,
      description: "Подписаться на OPPO в ВК ",
      nuts: 5000,
    },
    {
      id: 3,
      description: "Подписаться на OPPO в Telegram ",
      nuts: 5000,
    },
    {
      id: 2,
      description: "Смотреть видео на YouTube",
      nuts: 1000,
    },
    {
      id: 5,
      description: "Снять видео в М.Видео",
      nuts: 50000,
    },
  ],
  made: [
    {
      id: 1,
      description: "Сделано",
      nuts: 1000,
    },
    {
      id: 2,
      description: "Сделано",
      nuts: 1000,
    },
    {
      id: 3,
      description: "Сделано",
      nuts: 1000,
    },
    {
      id: 4,
      description: "Сделано",
      nuts: 1000,
    },
    {
      id: 5,
      description: "Сделано",
      nuts: 1000,
    },
  ],
};
</script>

<style lang="scss" scoped>
.main {
  overscroll-behavior: contain;
  width: 100vw;
  background-color: #060606;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  padding-bottom: 70px;
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 88%;
    height: 100%;
    padding-top: 50%;
    .tasks_list {
      display: flex;
      flex-direction: column;
      width: 100%;
      overflow: scroll;
      scrollbar-width: none;
      max-height: 40%;
      .task {
        min-height: 40px;
        max-height: 40px;
        background: #242424;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(100% - 20px);
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
        .task_img {
          width: 40px;
          height: auto;
          border-radius: 10px;
        }
        .task_content {
          display: flex;
          flex-direction: column;
          width: 60%;
          .task_text {
            font-size: 12px;
            line-height: 12px;
            font-weight: 500;
            color: #fff;
            letter-spacing: 3%;
          }
          .nutsCount {
            position: relative;
            font-size: 12px;
            line-height: 14px;
            font-weight: 500;
            color: #fff;
            margin-top: 5px;
            img {
              width: 30px;
              height: 30px;
              left: 40px;
              bottom: -8px;
              position: absolute;
            }
          }
        }
        button {
          background: #2cff74;
          color: #2c9a4c;
          font-size: 10px;
          font-weight: 700;
          line-height: 9px;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
        }
      }
    }
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
        transition: all 0.3s ease;
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
@media screen and (min-height: 750px) {
  .tasks_list {
    height: 50%;
    max-height: 50% !important;
  }
  .task {
    min-height: 60px !important;
    max-height: 60px !important;
    button {
      font-size: 14px !important;
      line-height: 14px !important;
    }
  }
  .task_text {
    font-size: 16px !important;
    line-height: 16px !important;
  }
}
@media screen and (min-width: 420px) {
  .tasks_list {
    height: calc(50% - 10vw) !important;
    max-height: calc(50% - 10vw) !important;
  }
}
@media screen and (min-width: 520px) {
  .tasks_list {
    height: calc(50% - 20vw) !important;
    max-height: calc(50% - 20vw) !important;
  }
}
</style>
