<template>
  <div class="main">
    <WhiteLight class="whiteLight" />
    <img class="nut_image" src="/images/NutStage1.png" alt="" />
    <div class="content">
      <p class="maxNuts">Рейтинг участников</p>

      <div class="leaders_list">
        <div class="leader-border" v-for="item in ratingList" :key="item">
          <div class="leader">
            <div class="info_block">
              <img
                class="avatar_url"
                v-if="item.photo"
                :src="item.photo"
                alt=""
              />
              <img
                class="avatar_url"
                v-else
                :src="'/images/UserIcon.svg'"
                alt=""
              />
              <p>
                <span class="name" v-if="item.firstName && item.lastName">{{
                  item.firstName + " " + item.lastName
                }}</span
                ><span class="name" v-else>{{ item.firstName }}</span
                ><span
                  ><img src="/images/NutStage1.png" alt="" />{{
                    item.nuts
                  }}</span
                >
              </p>
            </div>
            <div class="place">{{ item.place }}</div>
          </div>
        </div>
      </div>
      <div class="person_block">
        <div class="info_block">
          <img class="avatar_url" :src="'/images/UserIcon.svg'" alt="" />
          <p>
            <span class="name">{{
              currentUser.firstName + " " + currentUser.lastName
            }}</span
            ><span
              ><img src="/images/NutStage1.png" alt="" />{{
                currentUser.nuts
              }}</span
            >
          </p>
        </div>
        <div class="place">{{ currentUser.place }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { WhiteLight } from "../assets";
import { onMounted, computed } from "vue";
import { useRatingStore } from "../store/ratingStore";
import { useUserStore } from "../store/userStore";

const ratingStore = useRatingStore();
const userStore = useUserStore();

let ratingList = computed(() => ratingStore.ratingInfo);
let currentUser = computed(() => userStore.userInfo);

const leadersList = [
  { id: 1, name: "Benjamin", photo: "/images/avatar_url.png", nutsCount: 322 },
  { id: 2, name: "Antoxa", photo: "/images/avatar_url.png", nutsCount: 322 },
  { id: 3, name: "Антоша", photo: "/images/avatar_url.png", nutsCount: 322 },
  { id: 4, name: "Антоша", photo: "/images/avatar_url.png", nutsCount: 322 },
  { id: 5, name: "Антоша", photo: "/images/avatar_url.png", nutsCount: 322 },
  { id: 6, name: "Антоша", photo: "/images/avatar_url.png", nutsCount: 322 },
  { id: 1, name: "Benjamin", photo: "/images/avatar_url.png", nutsCount: 322 },
  { id: 2, name: "Antoxa", photo: "/images/avatar_url.png", nutsCount: 322 },
  { id: 3, name: "Антоша", photo: "/images/avatar_url.png", nutsCount: 322 },
  { id: 4, name: "Антоша", photo: "/images/avatar_url.png", nutsCount: 322 },
  { id: 5, name: "Антоша", photo: "/images/avatar_url.png", nutsCount: 322 },
  { id: 6, name: "Антоша", photo: "/images/avatar_url.png", nutsCount: 322 },
];

onMounted(() => {
  ratingStore.getRatingInfo();
  userStore.getUserData();
});
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  overscroll-behavior: contain;
  min-height: 100vh;
  background: #000;
  display: flex;
  align-self: center;
  justify-content: center;
  position: relative;
  .content {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40% 0 140px 0;
    .person_block {
      width: 90%;
      height: 50px;
      border-radius: 8px;
      border: 1px solid #2cff74;
      background: var(--clicker-bg);
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      left: 5vw;
      bottom: 90px;
      .info_block {
        margin-left: 20px;
        display: flex;
        align-items: center;
      }
      .place {
        margin: 0 30px 0 0;
        color: white;
        font-size: 30px;
        font-weight: 700;
      }
      .avatar_url {
        width: 30px;
        height: 30px;
      }
      p {
        margin: 0 0 0 20px;
        font-size: 10px;
        display: flex;
        flex-direction: column;
        .name {
          margin-left: 30px;
        }
        span {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 400;
          img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
    .leaders_list {
      width: 100%;
      scrollbar-width: none;
      display: flex;
      flex-direction: column;
      .leader-border {
        height: 60px;
        background: linear-gradient(
          253.35deg,
          #ffffff -9.36%,
          rgba(255, 255, 255, 0) 89.46%
        );
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        padding: 1px;
        margin-bottom: 10px;
        .leader {
          width: 100%;
          height: 100%;
          background: var(--clicker-bg);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .place {
            margin: 0 30px 0 0;
            color: white;
            font-size: 30px;
            font-weight: 700;
          }
          .info_block {
            margin-left: 20px;
            display: flex;
            align-items: center;
            p {
              margin: 0 0 0 20px;
              font-size: 10px;
              display: flex;
              flex-direction: column;
              .name {
                margin-left: 30px;
              }
              span {
                display: flex;
                align-items: center;
                font-size: 14px;
                font-weight: 400;
                img {
                  width: 30px;
                  height: 30px;
                }
              }
            }
          }
          .avatar_url {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
    p {
      font-size: 9vw;
      font-weight: 700;
      color: white;
      margin-top: 20px;
      margin-bottom: 30px;
    }
    .quest {
      margin-bottom: 30px;
    }
  }
  .whiteLight {
    top: -20%;
  }
  .nut_image {
    position: absolute;
    width: 65%;
    max-width: 300px;
    z-index: 10;
    left: 20%;
    top: -3%;
  }
}
</style>
