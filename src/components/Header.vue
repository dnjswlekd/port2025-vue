<template>
  <header id="header" aria-label="로고">
    <div class="header-inner">
      <h1 class="header-logo">
        <a href="#">portfolio <em>vue.js</em></a>
      </h1>
      <nav class="header-nav" aria-label="메인 메뉴">
        <ul>
          <li><a href="intro">intro</a></li>
          <li><a href="skill">skill</a></li>
          <li><a href="site">site</a></li>
          <li><a href="portfolio">portfolio</a></li>
          <li><a href="contact">contact</a></li>
        </ul>
      </nav>
      <button
        id="headerToggle"
        class="header-nav-mobile"
        aria-controls="primary-menu"
        aria-expanded="false"
      >
        <span></span>
      </button>
    </div>
  </header>
</template>
<script setup></script>

<style lang="scss">
@import '@/assets/scss/mixin';

#header {
  @include position-fixed;
  z-index: 10;

  .header-inner {
    @include flex-between;
    background-color: rgba(116, 99, 99, 0.1);
    backdrop-filter: blur(15px);
    padding: 1rem;

    .header-logo {
      font-size: 0.9rem;
      text-align: center;
      text-transform: uppercase;
      line-height: 1;

      em {
        display: block;
        font-size: 0.625rem;
        color: map-get($colors, black200);
      }
    }

    .header-nav {
      @media (max-width: 800px) {
        display: none;

        ul {
          position: absolute;
          top: 68px;
          right: 0;
          background-color: rgba(116, 99, 99, 0.1);
          backdrop-filter: blur(15px);
          z-index: 10;
          min-width: 150px;
          padding: 1.25rem 0;

          li {
            display: block;
            text-align: right;

            a {
              display: inline-block;
              padding: 0.625rem;
            }
          }
        }
      }

      li {
        display: inline;

        a {
          position: relative;
          font-size: 0.875rem;
          margin: 0.875rem;
          text-transform: uppercase;

          &:before {
            content: '';
            position: absolute;
            top: 20px;
            width: 100%;
            height: 1px;
            background-color: map-get($colors, black);
            transform: scaleX(0);
            transition: all 0.35s;
          }

          &:hover:before {
            transform: scaleX(1);
          }
        }
      }
    }
    .header-nav-mobile {
      @include button-reset;
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
