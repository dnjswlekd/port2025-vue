<template>
  <section id="contact">
    <div class="contact-inner">
      <div class="content">
        <p>
          "아름답고 화려한 디자인만을 만드는 것이 목표가 아닌,<br />
          <strong>최적의 사용자 경험을 제공하는 것을 목표</strong>로 하는<br />
          <strong>웹 퍼블리셔, 박원지</strong>가 되겠습니다."
        </p>
        <p>연락처 : wj8014@gmail.com, 010 5237 1274</p>

        <span></span>

        <div class="shortcut">
          <a
            v-for="(link, i) in links"
            :key="i"
            :href="link.href"
            :class="['link', link.class]"
            :target="link.target"
            :download="link.download ? 'true' : undefined"
          >
            {{ link.text }}
          </a>
        </div>
      </div>

      <div class="profile">
        <h2>Contact</h2>
        <img :src="profileImg" alt="프로필 사진" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { links } from '@/constants/index';

import profileImg from '@/assets/images/myProfileImg2.jpg';
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin';

#contact {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .contact-inner {
    display: flex;
    justify-content: space-between;
    width: 80%;
    max-width: 1200px;
    padding: 40px;
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    span::before {
      display: block;
      content: '/';
      padding: 20px 0;
      font-weight: 300;
      font-size: 30px;
      color: #425a73;
      opacity: 0.3;
    }

    .content {
      max-width: 600px;
      p {
        font-size: 1.2rem;
        line-height: 1.6;
      }

      .shortcut {
        display: flex;
        gap: 1rem;
        margin-top: 20px;

        .link {
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          font-size: 1rem;
          color: #fff;
          text-align: center;

          &.notion {
            background-color: #7c4dff;
          }

          &.git {
            background-color: #333;
          }

          &.resume {
            background-color: #00aaff;
          }

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }

    .profile {
      h2 {
        @include title-style;
        font-size: 2rem;
        margin-bottom: 20px;
      }
      img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }
}
</style>
