<script setup>
import Skip from '@/components/Skip.vue';
import Header from '@/components/Header.vue';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Skill from '@/components/Skill.vue';
import Port from '@/components/Port.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Skip />
  <Header />
  <main id="main" role="main">
    <Home />
    <About />
    <Skill />
    <Port />
    <Contact />
  </main>
  <Footer />
</template>

<style lang="scss">
#main {
  width: 100%;
  min-width: 1200px;

  @media (max-width: 800px) {
    padding-top: 80px;
  }
}
</style>
