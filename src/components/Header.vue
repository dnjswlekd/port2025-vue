<template>
  <header id="header" aria-label="로고">
    <div class="header-inner">
      <h1 class="header-logo">
        <a href="#">portfolio <em>vue.js</em></a>
      </h1>
      <nav class="header-nav" aria-label="메인 메뉴">
        <ul>
          <li><a href="intro"></a> intro</li>
          <li><a href="skill"></a>skill</li>
          <li><a href="site"></a>site</li>
          <li><a href="portfolio"></a>portfolio</li>
          <li><a href="contact"></a>contact</li>
        </ul>
      </nav>
      <button
        id="headerToggle"
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
}
</style>
