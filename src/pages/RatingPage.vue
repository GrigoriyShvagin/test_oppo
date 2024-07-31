<template>
  <div class="main">
    <WhiteLight class="whiteLight" />
    <img class="nut_image" src="/images/NutStage1.png" alt="" />
    <div class="content">
      <p class="maxNuts">100 000 000</p>
      <QuestsCount
        :precent="0.1"
        :border-height="'24px'"
        :border-width="'100%'"
        class="quest"
      />
      <div class="leaders_list">
        <div class="leader-border" v-for="item in leadersList" :key="item">
          <div class="leader">
            <div class="info_block">
              <img class="avatar_url" :src="item.photo" alt="" />
              <p>
                <span class="name">{{ item.name }}</span
                ><span
                  ><img src="/images/NutStage1.png" alt="" />{{
                    item.nutsCount
                  }}</span
                >
              </p>
            </div>
            <div class="place">{{ item.id }}</div>
          </div>
        </div>
      </div>
      <div class="person_block">
        <div class="info_block">
          <img class="avatar_url" src="/images/avatar_url.png" alt="" />
          <p>
            <span class="name">Я</span
            ><span><img src="/images/NutStage1.png" alt="" />321</span>
          </p>
        </div>
        <div class="place">0</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { WhiteLight, QuestsCount } from "../assets";

const leadersList = [
  { id: 1, name: "Benjamin", photo: "/images/avatar_url.png", nutsCount: 322 },
  { id: 2, name: "Antoxa", photo: "/images/avatar_url.png", nutsCount: 322 },
  { id: 3, name: "Антоша", photo: "/images/avatar_url.png", nutsCount: 322 },
  { id: 4, name: "Антоша", photo: "/images/avatar_url.png", nutsCount: 322 },
  { id: 5, name: "Антоша", photo: "/images/avatar_url.png", nutsCount: 322 },
  { id: 6, name: "Антоша", photo: "/images/avatar_url.png", nutsCount: 322 },
];

onMounted(() => {
  document.removeEventListener(
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
  width: 100%;
  height: 100%;
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
    padding: 40% 0 0 0;
    .person_block {
      width: 100%;
      height: 50px;
      border-radius: 8px;
      border: 1px solid #2cff74;
      background: var(--clicker-bg);
      display: flex;
      align-items: center;
      justify-content: space-between;
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
        width: 40px;
        height: 40px;
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
      height: 40%;
      max-height: 40%;
      overflow: scroll;
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
          height: 50px;
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
            width: 40px;
            height: 40px;
          }
        }
      }
    }
    p {
      font-size: 10vw;
      font-weight: 700;
      color: white;
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
    top: -5%;
  }
}
</style>
