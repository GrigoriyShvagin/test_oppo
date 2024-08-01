<template>
  <div class="main">
    <WhiteLight />
    <img
      src="/images/phone.png"
      class="phone"
      ref="phone"
      @touchstart="gotClick"
      @touchend="nutClick"
      @click="vibrate"
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
    <div class="clicker_block" @click="vibrate">
      <div class="clicker_content">
        <span class="oppa1" ref="oppa1">
          <Oppa1 />
        </span>
        <span class="oppa2" ref="oppa2"><Oppa2 /></span>
        <span class="oppa3" ref="oppa3"><Oppa3 /></span>
        <span class="oppa4" ref="oppa4"><Oppa4 /></span>
        <Logo class="logo" />
        <div class="nuts_info">
          <p>{{ userNutsCount }} <img src="/images/NutStage1.png" alt="" /></p>
        </div>
        <div class="nut_block" @touchstart="gotClick" @touchend="nutClick">
          <Cup class="cup" />
          <GreenLight class="green_light" />
          <img
            class="nutImage"
            v-for="item in 4"
            :key="item"
            ref="nutImage"
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
        <div class="energy_block">
          <div class="energy_content">
            <energySvg class="energy" />
            <p>{{ currentEnergy }} / 1000</p>
            <p class="energyIcon" ref="energyIcon"><RocketsSvg /></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ThreeArrowsLeft,
  QuestsCount,
  WhiteLight,
  Logo,
  RocketsSvg,
  Cup,
  Oppa1,
  energySvg,
  Oppa2,
  Oppa3,
  Oppa4,
} from "../assets";
import { onMounted, ref } from "vue";
import GreenLight from "../assets/UI/GreenLight.vue";

const user = {
  name: "Леонид Агутин",
  nutsCount: 5908,
  image: "/images/avatar_url.png",
  questsCount: 5,
  userEnergyCount: 1000,
};

let currentNut = ref(1);
let userNutsCount = ref(user.nutsCount);
const phone = ref(null);
let currentEnergy = ref(user.userEnergyCount);
let currentOppa = ref(0);

let energyIcon = ref(null);
let nutImage = ref(null);

const oppa1 = ref(null);
const oppa2 = ref(null);
const oppa3 = ref(null);
const oppa4 = ref(null);

function addScale() {
  phone.value.style.transform = "scale(1.2) rotate(311deg)";
}
function removeScale() {
  phone.value.style.transform = "scale(1.0) rotate(311deg)";
}

function deleteOppa1() {
  oppa1.value.style.transition = "none";
  oppa1.value.style.opacity = 0;
  oppa1.value.style.transform = "none";
}
function oppa1Anim() {
  oppa1.value.style.transition = "transform 0.4s linear";
  oppa1.value.style.transform = "translate3d(0,-150px,0)";
  oppa1.value.style.opacity = 1.0;
  setTimeout(deleteOppa1, 500);
}

function deleteOppa2() {
  oppa2.value.style.transition = "none";
  oppa2.value.style.transform = "none";
  oppa2.value.style.opacity = 0;
}
function oppa2Anim() {
  oppa2.value.style.transition = "transform 0.5s ease-in";
  oppa2.value.style.transform = "translate3d(0,-100px,0)";
  oppa2.value.style.opacity = 1.0;
  setTimeout(deleteOppa2, 600);
}

function deleteOppa3() {
  oppa3.value.style.transition = "none";
  oppa3.value.style.transform = "none";
  oppa3.value.style.opacity = 0;
}
function oppa3Anim() {
  oppa3.value.style.transition = "transform 0.5s ease-in";
  oppa3.value.style.transform = "translate3d(0,-150px,0)";
  oppa3.value.style.opacity = 1.0;
  setTimeout(deleteOppa3, 600);
}

function deleteOppa4() {
  oppa4.value.style.transition = "none";
  oppa4.value.style.transform = "none";
  oppa4.value.style.opacity = 0;
}
function oppa4Anim() {
  oppa4.value.style.transition = "transform 0.4s ease-in";
  oppa4.value.style.transform = "translate3d(0,-230px,0)";
  oppa4.value.style.opacity = 1.0;
  setTimeout(deleteOppa4, 500);
}

function nutShake() {
  nutImage.value[currentNut.value - 1].classList.remove("shaker");
  nutImage.value[currentNut.value - 1].classList.add("shaker");
}

function gotClick() {
  window.requestAnimationFrame(addScale);

  userNutsCount.value % 4 < 3 ? nutShake() : null;

  energyIcon.value.classList.add("activeEnergy");
}
function vibrate() {
  Telegram.WebApp.HapticFeedback.impactOccurred("medium");
}

function nutClick() {
  const less4 = currentNut.value < 4;
  nutImage.value[currentNut.value - 1].classList.remove("shaker");

  userNutsCount.value += 1;
  currentEnergy.value -= 1;

  if (userNutsCount.value % 2 == 0) {
    currentOppa.value < 4 ? (currentOppa.value += 1) : (currentOppa.value = 0);
    currentOppa.value == 1 ? oppa1Anim() : null;
    currentOppa.value == 2 ? oppa2Anim() : null;
    currentOppa.value == 3 ? oppa3Anim() : null;
    currentOppa.value == 4 ? oppa4Anim() : null;
  }

  if (userNutsCount.value % 4 == 0) {
    less4 ? (currentNut.value += 1) : (currentNut.value = 1);
  }

  window.requestAnimationFrame(removeScale);
}

onMounted(() => {
  document.querySelector(".clicker_block").addEventListener(
    "touchmove",
    function (event) {
      event.preventDefault();
    },
    { passive: false }
  );
});
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: var(--main-bg);
  color: #fff;
  position: relative;
  overflow: hidden;
  .phone {
    position: absolute;
    z-index: 21;
    right: 10%;
    width: 40%;
    top: 35%;
    transform: rotate(311deg);
  }
  .scaled {
    transform: scale(1.2);
    -webkit-transform: scale(0.9, 0.9);
  }
  .header {
    height: 80px;
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
          min-height: auto;
        }
      }
    }
  }
  .clicker_block {
    overflow: hidden;
    padding: 2px 0 0 0;
    margin-top: 20px;
    z-index: 2;
    height: calc(100% - 80px);
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
      position: relative;
      .oppa1 {
        z-index: 10000;
        opacity: 0;
        top: 50%;
        left: 15%;
        position: absolute;
      }
      .oppa1 svg {
        width: 150px;
        height: 150px;
      }
      .oppa2 {
        z-index: 10000;
        top: 55%;
        left: 24%;
        opacity: 0;
        position: absolute;
        svg {
          width: 140px;
          height: 140px;
        }
      }
      .oppa3 {
        z-index: 30;
        top: 40%;
        right: 15%;
        position: absolute;
        opacity: 0;
        svg {
          width: 170px;
          height: 170px;
        }
      }
      .oppa4 {
        z-index: 30;
        top: 55%;
        right: 20%;
        position: absolute;
        opacity: 0;
        svg {
          width: 170px;
          height: 170px;
        }
      }
      .energy_block {
        margin-top: 20px;
        width: 55%;
        height: 55px;
        background: linear-gradient(
          253.35deg,
          #ffffff -9.36%,
          rgba(255, 255, 255, 0) 89.46%
        );
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 22;
        border-radius: 70px;
        padding: 1px;
        .energy_content {
          display: flex;
          align-items: center;
          width: calc(100% - 1px);
          height: 55px;
          background: var(--gray-bg);
          border-radius: 70px;
          justify-content: space-between;
          .energy {
            margin: 0 0 0 20px;
            width: 15px;
            height: 20px;
          }
          p:not(.energyIcon) {
            margin-right: 4px;
            width: max-content;
            font-size: 14px;
          }
          .energyIcon {
            height: 54px;
            width: 54px;
            border-radius: 70px;
            border: 2px solid #fafafa;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #c4bfb9;
            transition: 0.3s;
            svg {
              width: 20px;
              height: 20px;
            }
          }
          .activeEnergy {
            background: linear-gradient(
              143.06deg,
              #2cff74 12.78%,
              #bcffd3 37.98%,
              #2cff74 84.78%
            );
            box-shadow: 0px 0px 21.2px 0px #2cff74;
            svg {
              transition: 0.3s;
              fill: #2c9a4c;
            }
          }
        }
      }
      .nut_block {
        display: flex;
        width: 100%;
        height: 45%;
        z-index: 5;
        position: relative;
        align-items: center;
        justify-content: left;
        .nutImage {
          display: none;
          position: absolute;
          z-index: 2;
          max-width: 70%;
          margin-right: 60px;
        }
        .firstNut {
          width: 75%;
          height: auto;
        }
        .secondNut {
          width: 40%;
          left: 15%;
          height: auto;
          max-width: 250px;
        }
        .thirdNut {
          width: 75%;
          max-width: 300px;
          height: auto;
        }
        .fourthNut {
          width: 100%;
          max-width: 300px;
          height: auto;
        }
        .currentNut {
          display: block;
        }
        .cup {
          width: 75%;
          height: 75%;
          z-index: 2;
          margin-right: 150px;
          text-align: left;
        }
      }
      .logo,
      .nuts_info {
        margin-top: 15px;
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
@keyframes shake {
  20% {
    transform: translate3d(20px, 0, 0);
  }
  40% {
    transform: translate3d(-20px, 0, 0);
  }
  60% {
    transform: translate3d(20px, 0, 0);
  }
  80% {
    transform: translate3d(-20px, 0, 0);
  }
  100% {
    transform: none;
  }
}

.shaker {
  animation: shake 0.1s linear;
}
@media screen and (max-width: 450px) {
  .border {
    margin: 0;
  }
}
@media screen and (max-width: 360px) {
  .thirdNut {
    left: -10%;
  }
  .fourthNut {
    left: -10%;
  }
}

@media screen and (min-width: 500px) {
  .thirdNut {
    left: 10%;
  }
  .fourthNut {
    left: 10%;
  }
}

@media screen and (max-height: 700px) {
  .phone {
    width: 35% !important;
    top: 40% !important;
    right: 10% !important;
  }
  .thirdNut {
    width: 50% !important;
    left: 10%;
  }
  .fourthNut {
    max-width: 270px !important;
  }
}
@media screen and (min-height: 700px) {
  .phone {
    width: 35% !important;
    top: 40% !important;
    right: 10% !important;
  }
  .firstNut {
    width: 70% !important;
    max-width: 70% !important;
    left: -2%;
  }
  .secondNut {
    width: 50% !important;
    max-width: 50% !important;
    left: 7% !important;
  }
  .thirdNut {
    width: 70% !important;
    left: 0;
  }
  .fourthNut {
    max-width: 270px !important;
  }
}
</style>
