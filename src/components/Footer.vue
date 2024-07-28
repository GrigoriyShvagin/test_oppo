<template>
  <div class="main">
    <div class="footer_content">
      <p>f</p>
      <p>f</p>
      <p>f</p>
      <p>f</p>
      <p>f</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 90vw;
  left: 5vw;
  padding: 1px;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(
    253.35deg,
    #ffffff -9.36%,
    rgba(255, 255, 255, 0) 89.46%
  );
  z-index: 20;
  .footer_content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: var(--gray-bg);
    border-radius: 10px 10px 0 0;
  }
}
</style>
