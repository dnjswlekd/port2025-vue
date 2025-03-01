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
            <a
              :href="nav.url"
              :class="{ active: isActive(nav.url) }"
              @click.prevent="scrollToSection(nav.url)"
              >{{ nav.title }}</a
            >
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
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { headerNav } from '@/constants/index';

// 상태 변수들
const isNavVisible = ref(false);
const isScrolled = ref(false);
const activeNav = ref('');

// 메뉴 활성화 상태 업데이트 함수
const isActive = (url) => {
  return `#${activeNav.value}` === url; // #을 붙여서 비교
};

// 모바일 네비게이션 메뉴 토글
const toggleMobileMenu = () => {
  isNavVisible.value = !isNavVisible.value;
};

// 스크롤 위치 추적 및 섹션 활성화
const updateActiveSection = () => {
  const sections = document.querySelectorAll('section'); // 모든 섹션을 선택
  let currentSection = '';

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      currentSection = section.id; // 화면 중앙에 위치한 섹션
    }
  });

  activeNav.value = currentSection; // activeNav 업데이트
};

// 섹션으로 스크롤 이동
const scrollToSection = (url) => {
  const targetSection = document.querySelector(url);
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop - 70, // 헤더 높이를 고려하여 스크롤
      behavior: 'smooth',
    });
  }
};

// 스크롤 이벤트 핸들러
const handleScroll = () => {
  if (window.scrollY > 0) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }

  updateActiveSection(); // 스크롤에 따라 활성화된 섹션을 업데이트
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  updateActiveSection(); // 초기 스크롤 위치에서 활성화된 섹션을 확인
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss">
@import '@/assets/scss/mixin';

#header {
  @include position-fixed;
  height: 70px;
  z-index: 100;

  &.scrolled {
    top: 0;
  }

  .header-inner {
    @include flex-between;
    height: 70px;
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
      li {
        display: inline;

        a {
          position: relative;
          font-size: 1.2rem;
          margin: 2rem;
          text-transform: uppercase;
          font-weight: 500;
          transition: all 0.35s;

          &:before {
            content: '';
            position: absolute;
            top: 30px;
            width: 100%;
            height: 2px;
            background-color: map-get($colors, title);
            transform: scaleX(0);
            transition: all 0.35s;
          }

          &:hover {
            transform: translateX(-10px);
          }

          &:hover:before {
            transform: scaleX(1);
          }

          &.active {
            color: map-get($colors, title);
          }

          &.active:before {
            transform: scaleX(1);
          }
        }
      }
    }
    .header-nav-mobile {
      display: none;
    }
  }

  @include responsive(1024px) {
    top: 0;

    .header-inner {
      padding: 1rem 2rem;
      .header-nav {
        position: absolute;
        top: 68px;
        right: 45px;
        backdrop-filter: blur(15px);
        z-index: 10;
        min-width: 150px;
        height: 0;
        overflow: hidden;
        opacity: 0;
        background: #fff;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        transition: height 0.4s ease-out, opacity 0.4s ease-out,
          transform 0.4s ease-out;

        &.show {
          height: 290px;
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
              margin: 0.825rem;
              display: inline-block;
            }
          }
        }
      }

      .header-nav-mobile {
        @include button-reset;
        width: 40px;
        height: 40px;
        display: block;

        span {
          position: relative;
          display: block;
          width: 40px;
          height: 2px;
          background-color: map-get($colors, black);

          &::before,
          &::after {
            content: '';
            position: absolute;
            width: 40px;
            height: 2px;
            background-color: map-get($colors, black);
            transition: width 0.35s;
          }

          &::before {
            top: 6px;
            right: 0;
          }

          &::after {
            bottom: 6px;
            left: 0;
          }
        }
      }
    }
  }
}
</style>
