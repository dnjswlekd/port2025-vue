<template>
  <footer>
    <p>
      본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.<br />
      © 2025 Won-Ji, Park. All Rights Reserved.
    </p>
  </footer>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/mixin';

footer {
  width: 100%;
  height: 100px;
  background-color: map-get($colors, title);
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #fff;
    text-align: center;
  }
}
</style>
