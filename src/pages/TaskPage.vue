<template>
  <div class="main">
    <TaskInfo
      :show="currentTask != null"
      :img="currentTask?.photo"
      :textInfo="currentTask?.text"
      :buttonText="currentTask?.buttonText"
      :link="currentTask?.link"
      :nuts="currentTask?.nuts"
      :bonus="currentTask?.bonus"
      :id="currentTask?.id"
      @closed="currentTask = null"
    />
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
        <p @click="setCurrMenu('New')" :class="{ active: currMenu == 'New' }">
          Новые
        </p>
        <p @click="setCurrMenu('Made')" :class="{ active: currMenu == 'Made' }">
          Выполненные
        </p>
      </div>
      <div class="tasks_list">
        <div
          class="task"
          v-if="currMenu == 'New'"
          v-for="item in tasksList"
          :key="item"
        >
          <img class="task_img" :src="item.photo" alt="" />
          <div class="task_content">
            <p class="task_text">{{ item.description }}</p>
            <p
              class="nutsCount"
              :class="{
                bonusP: item.bonus != null,
                zaeb: item.bonus == 'nuts',
                k: item.bonus == 'energy',
              }"
            >
              + {{ item.nuts }} <img src="/images/NutStage1.png" alt="" />
              <span class="bonus" v-if="item.bonus == 'nuts'"
                >+ 3 ореха за 1 удар
              </span>
              <span class="bonus" v-if="item.bonus == 'energy'"
                >x2 восстановление энергии
              </span>
            </p>
          </div>
          <button @click="showModal(item)">Начать</button>
        </div>
        <div
          class="task made"
          v-if="currMenu == 'Made'"
          v-for="item in completedTaskList"
          :key="item"
        >
          <img class="task_img" :src="item.photo" alt="" />
          <div class="task_content">
            <p class="task_text">{{ item.description }}</p>
            <p
              class="nutsCount"
              :class="{
                bonusP: item.bonus != null,
                zaeb: item.bonus == 'nuts',
                k: item.bonus == 'energy',
              }"
            >
              + {{ item.nuts }} <img src="/images/NutStage1.png" alt="" />
              <span class="bonus" v-if="item.bonus == 'nuts'"
                >+ 3 ореха за 1 удар
              </span>
              <span class="bonus" v-if="item.bonus == 'energy'"
                >x2 восстановление энергии
              </span>
            </p>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { WhiteBorder } from "../assets";
import TaskInfo from "../components/TaskInfo.vue";
import { useTaskStore } from "../store/taskStore";
import { useRouter } from "vue-router";
let currMenu = ref("New");

let currentTask = ref(null);

const taskStore = useTaskStore();
let tasksList = computed(() => taskStore.tasksList);
let completedTaskList = computed(() => taskStore.completedTasksList);

const allTasks = {
  new: [
    {
      id: 1,
      description: "Посетить официальный онлайн-магазин OPPO",
      nuts: 5000,
      bonus: null,
      img: "/images/tasks/Task1.png",
      bonusCount: null,
      textInfo: "Узнайте больше про суперкрепкую новинку OPPO!",
      buttonText: "Смотреть видео!",
      link: "https://oppo.ru",
    },
    {
      id: 4,
      description: "Подписаться на OPPO в ВК ",
      nuts: 5000,
      bonus: "+ x2 восстановление энергии",
      img: "/images/tasks/Task4.png",
      bonusCount: "energy",
      textInfo: "Узнайте больше про суперкрепкую новинку OPPO!",
      buttonText: "Смотреть видео!",
      link: "https://vk.com/oppo_russia",
    },
    {
      id: 3,
      description: "Подписаться на OPPO в Telegram ",
      nuts: 5000,
      bonus: "+ 3 ореха за 1 удар",
      img: "/images/tasks/Task3.png",
      bonusCount: "nuts",
      textInfo: "Узнайте больше про суперкрепкую новинку OPPO!",
      buttonText: "Смотреть видео!",
      link: "https://t.me/opporussia_official",
    },
    {
      id: 2,
      description: "Смотреть видео на YouTube",
      nuts: 1000,
      bonus: null,
      img: "/images/tasks/Task2.png",
      bonusCount: null,
      textInfo: "Узнайте больше про суперкрепкую новинку OPPO!",
      buttonText: "Смотреть видео!",
      link: null,
    },
    {
      id: 5,
      description: "Снять видео в М.Видео",
      nuts: 50000,
      bonus: null,
      img: "/images/tasks/Task5.png",
      bonusCount: null,
      textInfo: "Узнайте больше про суперкрепкую новинку OPPO!",
      buttonText: "Смотреть видео!",
      link: null,
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

function setCurrMenu(str) {
  currMenu.value = str;
}

const router = useRouter();
function showModal(item) {
  if (item.id == 2) {
    router.push("/friends");
  } else currentTask.value = item;
}

onMounted(() => {
  taskStore.getTasks();
  taskStore.getCompletedTasks();
});
</script>

<style lang="scss" scoped>
.main {
  color: white;
  overscroll-behavior: contain;
  width: 100vw;
  min-height: 100vh;
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
            .bonus {
              margin-left: 20px;
            }
            img {
              width: 30px;
              height: 30px;
              left: 40px;
              bottom: -10px;
              position: absolute;
            }
          }
        }
        .zaeb {
          img {
            top: -7px;
            left: 35px !important;
          }
        }
        .k {
          img {
            left: 35px !important;
          }
        }
        button {
          background: #2cff74;
          color: #2c9a4c;
          font-size: 12px;
          font-weight: 500;
          line-height: 14px;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
        }
      }
      .made {
        justify-content: space-around;
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
@media screen and (min-width: 450px) {
  .bonusP {
    img {
      bottom: -10px !important;
    }
  }
}
@media screen and (min-width: 520px) {
  .tasks_list {
    height: calc(50% - 20vw) !important;
    max-height: calc(50% - 20vw) !important;
  }
}
@media screen and (max-width: 434px) {
  .k img {
    top: -7px;
  }
}
</style>
