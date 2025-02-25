<template>
  <section id="about">
    <div class="about-inner">
      <!-- left -->
      <div class="profile">
        <h2>About Me</h2>
        <img src="" alt="프로필 사진" />
      </div>
      <!--end of left-->

      <!-- right -->
      <div class="overview">
        <ul class="intro">
          <li>
            <h4>이름 :</h4>
            <p>박원지</p>
          </li>
          <li>
            <h4>나이 :</h4>
            <p>27세</p>
          </li>
          <li>
            <h4>학력 :</h4>
            <p>대구가톨릭대학교 작곡실용음악 학과 졸업</p>
          </li>
          <li>
            <h4>수료내역 :</h4>
            <p>
              2022.8 - 2023.2 그린아트컴퓨터학원<br />
              기업요구를 반영한 디지털비즈니스 웹앱(UX)디자인 &amp; 개발자
              양성과정 수료
            </p>
          </li>
        </ul>
        <div class="career">
          <h4>경력사항</h4>
          <ul>
            <li>· 2020.2 - 2021.6 국회사무처 인턴</li>
            · 2023.5 ~ 2023.7 그린아트컴퓨터학원<br />기업요구를 반영한
            디지털비즈니스 웹앱(UX)디자인 &amp; 개발자 양성과정 멘토링 활동
            <li>· 2023.7 ~ 2025.1 E3TS UI/UX 퍼블리셔</li>
          </ul>
        </div>
        <div class="certificate">
          <h4>자격증</h4>
          <ul>
            <li>· GTQ 그래픽기술자격 포토샵 1급 취득</li>
            <li>· GTQi 그래픽기술자격 일러스트 1급 취득</li>
            <li>· GTQid 그래픽기술자격 인디자인 1급 취득</li>
          </ul>
        </div>
        <div class="hash-tag">
          <ul class="">
            <li class="active"><a href="#">#퍼블리셔</a></li>
            <li><a href="#">#UX디자이너</a></li>
            <li><a href="#">#반응형웹</a></li>
            <li><a href="#">#그로스마케팅</a></li>
          </ul>
        </div>
      </div>
      <!--end of right-->
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
#about {
  width: 100%;
  height: 100vh;

  .about-inner {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }
}
</style>
