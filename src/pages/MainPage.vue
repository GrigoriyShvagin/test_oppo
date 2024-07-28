<template>
  <div class="main">
    <WhiteLight />
    <img
      src="/images/phone.png"
      class="phone"
      ref="phone"
      id="phone"
      @touchstart="gotClick"
      @touchend="nutClick"
    />
    <div class="header">
      <div class="header_content">
        <div class="name_block">
          <div class="name_info">
            <img :src="user.image" alt="" />
            <p class="name">{{ user.name }}</p>
          </div>
          <div class="quests_info">
            <div class="quests_count">
              Задания <ThreeArrowsLeft class="arrows_left" />{{
                user.questsCount
              }}
              / 20
            </div>
            <QuestsCount :precent="user.questsCount / 20" />
          </div>
        </div>
        <div class="nuts_block">
          <span>Всего у Вас:</span>
          <p>{{ userNutsCount }} <img src="/images/NutStage1.png" alt="" /></p>
        </div>
      </div>
    </div>
    <div class="clicker_block">
      <div class="clicker_content">
        <Logo class="logo" />
        <div class="nuts_info">
          <p>{{ userNutsCount }} <img src="/images/NutStage1.png" alt="" /></p>
        </div>
        <div class="nut_block" @touchstart="gotClick" @touchend="nutClick">
          <Cup class="cup" />
          <GreenLight />
          <img
            class="nutImage"
            v-for="item in 4"
            :key="item"
            :src="'/images/NutStage' + item + '.png'"
            :class="{
              currentNut: currentNut == item,
              firstNut: item == 1,
              secondNut: item == 2,
              thirdNut: item == 3,
              fourthNut: item == 4,
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ThreeArrowsLeft, QuestsCount, WhiteLight, Logo, Cup } from "../assets";
import { onMounted, ref } from "vue";
import GreenLight from "../assets/UI/GreenLight.vue";

const user = {
  name: "Леонид Агутин",
  nutsCount: 5908,
  image: "/images/avatar_url.png",
  questsCount: 5,
};

let currentNut = ref(1);
let userNutsCount = ref(user.nutsCount);
const phone = ref(null);

const phoneEl = document.querySelector("#phone");

function addScale() {
  phone.value.style.scale = 1.2;
  window.requestAnimationFrame(addScale);
}
function removeScale() {
  phone.value.style.scale = 1.0;
  window.requestAnimationFrame(removeScale);
}

function gotClick() {
  window.requestAnimationFrame(addScale);
}

function nutClick() {
  window.requestAnimationFrame(removeScale);
  userNutsCount.value += 1;
  const less4 = currentNut.value < 4;
  if (userNutsCount.value % 4 == 0) {
    less4 ? (currentNut.value += 1) : (currentNut.value = 1);
  }
}

onMounted(() => {});
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: var(--main-bg);
  color: #fff;
  position: relative;
  overflow: hidden;
  .phone {
    position: absolute;
    z-index: 21;
    right: 5%;
    width: 150px;
    top: 48%;
    transform: rotate(-30deg);
  }
  .scaled {
    scale: 1.2;
  }
  .header {
    padding: 10px 21px;
    display: flex;
    justify-content: center;
    .header_content {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      z-index: 2;
      .name_block {
        display: flex;
        flex-direction: column;
        width: 60%;
        .name_info {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          img {
            width: 35px;
            height: 35px;
            margin-right: 10px;
          }
          p {
            font-weight: 500;
            font-size: 20px;
            line-height: 18px;
          }
        }
        .quests_info {
          display: flex;
          flex-direction: column;
          .quests_count {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            font-size: 16px;
            line-height: 14px;
          }
          .arrows_left {
            margin: 0 10px;
          }
        }
      }
      .nuts_block {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        span {
          color: var(--dark-gray);
          opacity: 30%;
          font-size: 14px;
        }
        p {
          display: flex;
          position: relative;
          font-weight: 700;
          font-size: 48px;
          line-height: 45px;
          align-items: center;
        }
        img {
          margin-top: 2px;
          max-height: 48px;
          max-width: 48px;
          min-width: 8vw;
          min-height: 8vw;
        }
      }
    }
  }
  .clicker_block {
    overflow: hidden;
    padding: 2px 0 0 0;
    margin-top: 20px;
    z-index: 2;
    height: calc(90%);
    border-radius: 41px 41px 0 0;
    background: radial-gradient(
      77.45% 77.45% at 50.08% 1.26%,
      #ffffff 0%,
      rgba(255, 255, 255, 0.16) 100%
    );
    .clicker_content {
      height: calc(100% - 2px);
      background: var(--clicker-bg);
      z-index: 3;
      border-radius: 41px 41px 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .nut_block {
        display: flex;
        height: 45%;
        z-index: 5;
        position: relative;
        align-items: center;
        justify-content: center;
        .nutImage {
          display: none;
          position: absolute;
          z-index: 2;
        }
        .firstNut {
          width: 100%;
          height: auto;
        }
        .secondNut {
          width: 75%;
        }
        .thirdNut {
          width: 100%;
        }
        .fourthNut {
          width: 100%;
        }
        .currentNut {
          display: block;
        }
        .cup {
          width: 80%;
          height: 80%;
          z-index: 2;
        }
      }
      .logo,
      .nuts_info {
        margin-top: 30px;
        z-index: 20;
      }
      .nuts_info {
        display: flex;
        justify-content: center;
        position: relative;
        width: 50%;
        p {
          font-size: 50px;
          line-height: 70px;
          padding-right: 50px;
          font-weight: 700;
        }
        img {
          width: 25vw;
          height: 25vw;
          max-width: 112px;
          max-height: 112px;
          position: absolute;
          bottom: -20px;
          right: -40px;
          transform: rotate(20deg);
        }
      }
    }
  }
}
@media screen and (max-width: 450px) {
  .border {
    margin: 0;
  }
}
</style>
