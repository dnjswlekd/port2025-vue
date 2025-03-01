<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Skip from '@/components/Skip.vue';
import Header from '@/components/Header.vue';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Skill from '@/components/Skill.vue';
import Port from '@/components/Port.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.utils.toArray('section').forEach((section, index) => {
    if (index === 0) {
      // 첫 번째 섹션은 y 값 변경 없이 처리
      gsap.from(section, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    } else {
      gsap.from(section, {
        opacity: 0,
        y: 50, // 첫 번째 섹션을 제외하고만 적용
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  });
});
</script>

<template>
  <Skip />
  <Header />
  <main id="main" role="main">
    <section><Home /></section>
    <section><About /></section>
    <section><Skill /></section>
    <section><Port /></section>
    <section><Contact /></section>
  </main>
  <Footer />
</template>

<style lang="scss">
@import '@/assets/scss/mixin';
#main {
  width: 100%;

  @include responsive(1024px) {
    padding-top: 80px;
    /* min-width: 1200px; */
  }
}
</style>
