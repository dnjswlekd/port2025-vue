<template>
  <header id="header" aria-label="로고" :class="{ scrolled: isScrolled }">
    <div class="header-inner">
      <div class="header-logo">
        <h1>
          <a href="#">portfolio <em>vue.js</em></a>
        </h1>
      </div>
      <nav
        class="header-nav"
        aria-label="메인 메뉴"
        :class="{ show: isNavVisible }"
      >
        <ul>
          <li v-for="(nav, i) in headerNav" :key="i">
            <a :href="nav.url">{{ nav.title }}</a>
          </li>
        </ul>
      </nav>
      <button
        id="headerToggle"
        class="header-nav-mobile"
        aria-controls="primary-menu"
        aria-expanded="false"
        @click="toggleMobileMenu"
      >
        <span></span>
      </button>
    </div>
  </header>
</template>
<script setup>
// import { ref } from 'vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { headerNav } from '@/constants/index';

// 모바일 네비게이션 메뉴 토글
const isNavVisible = ref(false);

const toggleMobileMenu = () => {
  isNavVisible.value = !isNavVisible.value;
};

// 헤더 스크롤
const isScrolled = ref(false);

const handleScroll = () => {
  if (window.scrollY > 10) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss">
@import '@/assets/scss/mixin';

#header {
  @include position-fixed;
  /* z-index: 10; */

  &.scrolled {
    top: 0;
  }
  @media (max-width: 800px) {
    top: 0;
  }

  .header-inner {
    @include flex-between;
    height: 70px;
    /* background-color: map-get($colors, mainBg); */
    backdrop-filter: blur(3px);
    padding: 1rem 4rem;

    .header-logo {
      font-size: 0.9rem;
      text-align: center;
      text-transform: uppercase;
      line-height: 1;

      em {
        display: block;
        font-size: 0.625rem;
        color: map-get($colors, black300);
      }
    }

    .header-nav {
      /* 모바일 헤더 박스 */
      @media (max-width: 800px) {
        position: absolute;
        top: 68px;
        right: 45px;
        /* background-color: map-get($colors, mainBg); */
        backdrop-filter: blur(15px);
        z-index: 10;
        min-width: 150px;
        height: 0;
        overflow: hidden;
        opacity: 0;
        transition: height 0.4s ease-out, opacity 0.4s ease-out,
          transform 0.4s ease-out;

        &.show {
          height: 250px;
          opacity: 1;
        }

        &.show + .header-nav-mobile span {
          &::before,
          &::after {
            width: 24px;
          }
        }

        ul {
          padding: 1.25rem 0;

          li {
            display: block;
            text-align: right;

            a {
              display: inline-block;
            }
          }
        }
      }

      li {
        display: inline;

        a {
          position: relative;
          font-size: 1.2rem;
          margin: 0.875rem;
          text-transform: uppercase;
          transition: all 0.35s;

          &:before {
            content: '';
            position: absolute;
            top: 30px;
            width: 100%;
            height: 1px;
            background-color: map-get($colors, black);
            transform: scaleX(0);
            transition: all 0.35s;
          }

          &:hover {
            transform: translateX(-10px);
          }

          &:hover:before {
            transform: scaleX(1);
          }
        }
      }
    }
    .header-nav-mobile {
      @include button-reset;
      width: 40px;
      height: 40px;
      display: none;

      @media (max-width: 800px) {
        display: block;
      }

      span {
        position: relative;
        display: block;
        width: 40px;
        height: 2px;
        background-color: map-get($colors, black);

        &::before {
          content: '';
          position: absolute;
          top: 6px;
          right: 0;
          width: 40px;
          height: 2px;
          background-color: map-get($colors, black);
          transition: width 0.35s;
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 0;
          width: 40px;
          height: 2px;
          background-color: map-get($colors, black);
          transition: width 0.35s;
        }
      }
    }
  }
}
</style>
