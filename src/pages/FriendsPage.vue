<template>
  <div class="main">
    <div class="content">
      <div class="header_block">
        <p class="header">Приглашайте друзей!</p>
        <p class="sub_text">Вы оба получите дополнительные орехи</p>
      </div>
      <div class="invite_block">
        <div class="invite_content">
          <Present class="present_icon" />
          <div class="text_block">
            <p class="header">Пригласить друга</p>
            <p class="content_text">
              <img src="/images/NutStage1.png" alt="" />
              <span> +1000 для вас и вашего друга </span>
            </p>
          </div>
          <IconInvite class="icon_invite" />
        </div>
      </div>
      <div class="friends_menu">
        <WhiteLight class="whiteLight" />
        <div class="friends_block">
          <div class="friends_content">
            <div class="header"><p>Список друзей</p></div>
            <div class="friends_list" v-if="friends[0]">
              <div class="friend" v-for="item in friends" :key="item.id"></div>
            </div>
            <div class="noFriends" v-else>
              <p class="">У вас нет друзей :(</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Present, IconInvite, WhiteLight } from "../assets";
import { onMounted } from "vue";

const friends = [];

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
  background: #060606;
  display: flex;
  justify-content: center;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .invite_block {
      background: linear-gradient(
        253.35deg,
        #ffffff -9.36%,
        rgba(255, 255, 255, 0) 89.46%
      );
      margin-top: 20px;
      width: 90%;
      height: 70px;
      padding: 1px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      .invite_content {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: #242424;
        display: flex;
        align-items: center;
        .present_icon {
          width: 40px;
          margin: 0 20px 0 20px;
        }
        .text_block {
          display: flex;
          flex-direction: column;
          width: 70%;
          padding: 10px 0;
          color: #fff;
          .content_text {
            display: flex;
            font-size: 12px;
            margin-top: 10px;
            align-items: center;
            img {
              width: 24px;
              height: 24px;
            }
          }
        }
        .icon_invite {
          width: 70px;
          height: 70px;
        }
      }
    }
  }
  .friends_menu {
    position: relative;
    width: 100%;
    min-height: 75%;
    max-height: 80%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .friends_block {
      height: 75%;
      width: 100%;
      border-radius: 40px;
      padding: 1px 0px 0 0;
      z-index: 10;
      background: radial-gradient(
        77.45% 77.45% at 50.08% 1.26%,
        #ffffff 0%,
        rgba(255, 255, 255, 0.16) 100%
      );
    }
    .friends_content {
      height: 100%;
      width: 100%;
      background: var(--clicker-bg);
      z-index: 10;
      border-radius: 40px;
      .noFriends {
        width: 100%;
        margin-top: 30px;
        color: #aaaaaa45;
        font-size: 16px;
        font-weight: 700;
        line-height: 15.92px;
        letter-spacing: 0.05em;
        text-align: left;

        display: flex;
        justify-content: center;
        align-items: center;
        p {
          width: max-content;
        }
      }
      .friends_list {
        display: flex;
        flex-direction: column;
        height: 60%;
        overflow: scroll;
        scrollbar-width: none;
        align-items: center;
        .friend {
          display: flex;
          width: 90%;
          background: #ffffff2e;
          min-height: 50px;
          margin-bottom: 10px;
          border-radius: 10px;
        }
      }
      .header {
        font-size: 20px;
        font-weight: 700;
        line-height: 14.64px;
        letter-spacing: 0.07em;
        text-align: left;
        color: white;
        padding: 30px 0 30px 30px;
      }
    }
    .white_light {
      position: absolute;
    }
  }
  .header_block {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    width: 70%;
    p {
      text-align: center;
    }
    .header {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
}
</style>
