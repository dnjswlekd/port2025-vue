<template>
  <section id="contact">
    <div class="contact-inner">
      <div class="content">
        <div>
          <p>
            "아름답고 화려한 디자인만을 만드는 것이 목표가 아닌,<br />
            <b>최적의 사용자 경험을 제공하는 것을 목표</b>로 하는<br />
            <b>웹 퍼블리셔, 박원지</b>가 되겠습니다."
          </p>
        </div>

        <span></span>

        <p>연락처 : wj8014@gmail.com, 010 5237 1274</p>
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

<style lang="scss">
@import '@/assets/scss/mixin';

#contact {
  @include flex-center;
  height: 860px;

  .contact-inner {
    @include flex-center;
    width: 100%;
    position: relative;
    gap: 50px;

    span::before {
      display: block;
      content: '/';
      padding: 20px 0;
      font-weight: 300;
      font-size: 30px;
      color: map-get($colors, title);
      opacity: 0.3;
    }

    .content {
      @include flex-center;
      flex-flow: column;
      max-width: 600px;

      p {
        font-size: 1.1rem;
        line-height: 1.6;
        text-align: center;
        color: map-get($colors, black400);
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
          border: 1px solid map-get($colors, title);
          color: map-get($colors, title);
          text-align: center;
          font-weight: 600;
          transition: 0.35s;
          text-wrap: balance;

          &:hover {
            background-color: map-get($colors, title);
            color: map-get($colors, white);
          }
        }
      }
    }

    .profile {
      h2 {
        @include title-style;
      }
      img {
        width: 450px;
        max-width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
  }
  @include responsive(1024px) {
    .profile img {
      width: 300px !important;
    }
    .contact-inner {
      flex-direction: column-reverse;
      padding: 20px;
    }
  }
}
</style>
