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
@import '@/assets/scss/mixin';

#skill {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .skill-inner {
    @include flex-center;
    flex-direction: column;
    /* width: 1200px; */
    height: 100%;
    margin: 0 auto;
    position: relative;
    gap: 60px;

    @media (max-width: 800px) {
      gap: 20px;
    }

    .develop,
    .design {
      text-align: center;
      h2 {
        @include title-style;
        padding-bottom: 75px;
        @media (max-width: 800px) {
          padding-bottom: 35px;
        }
      }

      ul {
        @include flex-center;
        gap: 40px;

        li {
          img {
            max-width: 100%;
            width: 150px;
            height: auto;
            object-fit: contain;
            @media (max-width: 800px) {
              width: 100px;
              height: 100px;
            }
          }
        }
        @media (max-width: 800px) {
          width: 600px;
          display: grid;
          gap: 30px 10px;
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }
    .develop ul li {
      &:nth-child(4) img {
        width: 150px;
      }
    }
    .design ul li {
      &:nth-child(1) img {
        transform: scale(1.2);
      }
      &:nth-child(6) img {
        transform: scale(1.2);
      }
    }
  }
}
</style>
