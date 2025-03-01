<template>
  <section id="home">
    <div class="home-inner">
      <div class="home-sub-title">
        <p>creative wonji park</p>
        <p>portfolio<br />vol.1</p>
      </div>
      <div class="home-main-title">
        <h1>web<br />publisher<br /></h1>
        <p>
          안녕하세요. 웹퍼블리셔 박원지입니다.<br />
          이 포트폴리오는 웹 퍼블리셔로서 쌓아온 경험과 노력이 담긴 작업물들을
          소개하는 공간이자,<br />
          각 프로젝트를 통해 얻은 배움과 성장을 공유하며,<br />더 나은
          퍼블리셔로서의 여정을 보여드리고자 합니다. 🙂
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from('.home-main-title h1', {
    x: -100, // 왼쪽에서 시작
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.home-main-title h1',
      start: 'top 80%', // 화면의 80% 지점에서 애니메이션 시작
      toggleActions: 'play none none none',
    },
  });
});
</script>

<style lang="scss">
@import '@/assets/scss/mixin';

#home {
  max-width: 1200px;
  height: 960px;
  margin: 0 auto;

  .home-inner {
    height: 960px;
    margin: 0 auto;
    position: relative;
  }
  .home-sub-title p {
    position: absolute;
    text-transform: uppercase;
    top: 20px;
    font-weight: 300;
    letter-spacing: 2px;
    color: map-get($colors, black400);
    &:nth-child(1) {
      left: 60px;
    }
    &:nth-child(2) {
      top: 55px;
      right: 60px;
      transform: rotate(90deg);
    }
  }
  .home-main-title {
    position: absolute;
    top: 30%;
    left: 60px;
    h1 {
      color: map-get($colors, title);
      font-weight: 700;
      text-transform: uppercase;
      font-size: 8rem;
      letter-spacing: -3px;
      line-height: 0.9;
    }
    p {
      color: map-get($colors, sub-black);
      letter-spacing: -1.2px;
      font-size: 1.3rem;
      margin-top: 50px;
      line-height: 1.6;
      padding-left: 10px;
      font-weight: 300;
    }
  }
  @include responsive(1024px) {
    .home-sub-title p {
      &:nth-child(1) {
        top: 100px;
        left: 20px;
      }
      &:nth-child(2) {
        top: 130px;
        left: 20px;
        right: 0px;
        transform: rotate(0deg);
      }
    }
    .home-main-title {
      left: 10px;
    }
    .home-main-title h1 {
      font-size: 5rem;
    }
    .home-main-title p {
      width: 400px;
      margin-top: 40px;
    }
  }
}
</style>
