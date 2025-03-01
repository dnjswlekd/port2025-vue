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
  @include flex-center;
  height: 1400px;
  margin: 0 auto;

  .skill-inner {
    @include flex-center;
    flex-direction: column;
    margin: 0 auto;
    position: relative;
    gap: 60px;
    padding: 40px;

    .develop,
    .design {
      text-align: center;
      h2 {
        @include title-style;
        padding-bottom: 75px;
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
          }
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

@include responsive(1024px) {
  #skill .skill-inner {
    gap: 40px;
  }

  .develop,
  .design {
    h2 {
      padding-bottom: 35px;
    }

    ul {
      width: 400px !important;
      flex-wrap: wrap;
    }
  }

  .develop ul li,
  .design ul li {
    img {
      width: 100px !important;
      height: 100px !important;
    }
  }
}
</style>
