<template>
  <section id="about">
    <div class="about-bg"></div>
    <div class="about-inner">
      <!-- left -->
      <div class="profile">
        <div class="profile-img">
          <h2>About me</h2>
          <img :src="profileImg" alt="프로필 사진" />
        </div>
      </div>
      <!--end of left-->

      <!-- right -->
      <div class="overview">
        <div class="intro">
          <ul>
            <li>
              <span>이름 : </span>
              <p>박원지</p>
            </li>
            <li>
              <span>나이 : </span>
              <p>27세</p>
            </li>
            <li>
              <span>학력 : </span>
              <p>대구가톨릭대학교 작곡실용음악 학과 졸업</p>
            </li>
            <li>
              <span>수료내역 : </span>
              <div>
                <p>2022.8 - 2023.2 그린아트컴퓨터학원<br /></p>
                <p class="desc">
                  기업요구를 반영한 디지털비즈니스 웹앱(UX)디자인 &amp; 개발자
                  양성과정 수료
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="career">
          <span>경력사항 :</span>
          <ul>
            <li>· 2020.2 - 2021.6 국회사무처 인턴</li>
            · 2023.5 ~ 2023.7 기업요구를 반영한 디지털비즈니스 웹앱(UX)디자인
            &amp; 개발자 양성과정 멘토링 활동
            <li>· 2023.7 ~ 2025.1 E3TS UI/UX 퍼블리셔</li>
          </ul>
        </div>
        <div class="certificate">
          <span>자격증 :</span>
          <ul>
            <li>· GTQ 그래픽기술자격 포토샵 1급 취득</li>
            <li>· GTQi 그래픽기술자격 일러스트 1급 취득</li>
            <li>· GTQid 그래픽기술자격 인디자인 1급 취득</li>
          </ul>
        </div>
        <div class="hash-tag">
          <ul>
            <li class="active"><a href="#">#퍼블리싱</a></li>
            <li><a href="#">#UI/UX</a></li>
            <li><a href="#">#반응형웹</a></li>
            <li><a href="#">#VUE</a></li>
            <li><a href="#">#FIGMA</a></li>
          </ul>
        </div>
      </div>
      <!--end of right-->
    </div>
  </section>
</template>

<script setup>
import profileImg from '@/assets/images/myProfileImg.jpg';
</script>

<style lang="scss">
@import '@/assets/scss/mixin';

@import '@/assets/scss/mixin';

#about {
  width: 100%;
  height: 100vh;
  position: relative;

  .about-bg {
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    width: 40%;
    height: 620px;
    background-color: rgba(158, 213, 246, 0.3);
  }

  .about-inner {
    height: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;
  }

  .profile {
    position: relative;
    display: flex;

    .profile-img {
      transform: translate(50px, -100px);

      h2 {
        @include title-style;
      }

      img {
        width: 400px;
        object-fit: contain;
      }
    }
  }

  .overview {
    display: flex;
    flex-flow: column;
    gap: 25px;
    color: map-get($colors, black400);
    font-weight: 600;
    line-height: 1.8;
    margin-left: 30px;

    li {
      display: flex;
      gap: 5px;

      h4 {
        width: 70px;
      }

      .desc {
        text-indent: -73px;
      }
    }

    .hash-tag ul {
      display: flex;
      align-items: center;
      gap: 10px;

      li {
        padding: 0px 15px;
        border-radius: 10px;
        transition: 0.4s;

        a {
          font-size: 1.4rem;
          font-weight: 800;
        }

        &:hover {
          background: map-get($colors, tagBg);
          color: #fff;
          border-radius: 50px;
        }
      }

      li.active {
        background: map-get($colors, tagBg);
        color: #fff;
        border-radius: 50px;
      }
    }
  }

  @include responsive(1024px) {
    .about-inner {
      flex-flow: column;
      justify-content: center;
      gap: 20px;
    }

    .profile-img {
      transform: translate(50px, 68px) !important;

      img {
        width: 300px;
      }
    }

    .profile {
      width: 100%;
      height: 100%;
    }

    .overview {
      margin-left: 0;

      .desc {
        text-indent: 0px;
      }
    }
  }
}
</style>
