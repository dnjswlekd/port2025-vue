<template>
  <section id="skill">
    <div class="skill-inner">
      <div class="develop">
        <h2>I can do</h2>
        <ul>
          <li v-for="skill in developSkills" :key="skill">
            <img :src="getImageUrl(skill)" :alt="skill" />
          </li>
        </ul>
      </div>
      <div class="design">
        <h2>and I can do too</h2>
        <ul>
          <li v-for="skill in designSkills" :key="skill">
            <img :src="getImageUrl(skill)" :alt="skill" />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!--end of skills-->
</template>
<script setup>
import { ref } from 'vue';
import { skills } from '@/constants/index';

const developSkills = ref(skills.develop);
const designSkills = ref(skills.design);

const getImageUrl = (name) => {
  return new URL(`/src/assets/images/${name}-icon.png`, import.meta.url).href;
};
</script>

<style lang="scss">
#skill {
  height: 100vh;
  .skill-inner {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  img {
    width: 30px;
  }
}
</style>
