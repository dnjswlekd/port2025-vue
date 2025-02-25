<template>
  <section
    id="port"
    class=""
    data-aos="fade-up"
    data-aos-offset="400"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
  >
    <h2>Portfolio</h2>

    <div class="container">
      <ul class="mnu clearfix">
        <li class="on"><a href="#">노티드</a></li>
        <li class=""><a href="#">이누네코</a></li>
        <li class=""><a href="#">인터파크</a></li>
        <li class=""><a href="#">STX건설</a></li>
      </ul>

      <ul class="view">
        <li>
          <h3>노티드<span> (팀프로젝트용)</span></h3>
          <p>
            기존에 구축된 사이트가 없어 직접 제작해보기로 결정했습니다.<br />
            실제 매장을 방문한 후 매장의 느낌을 차용하여 메인페이지를
            제작하였습니다.
          </p>
          <p>
            사용 툴 : Photoshop, Illustrator, Visual Studio Code<br />
            참여도 : 100%
          </p>
          <a href="https://github.com/dnjswlekd/Knotted" class=""
            >Github 바로가기</a
          >
          <a
            href="https://dnjswlekd.github.io/Knotted/Knotted.html/mainPage.html"
            target="_blank"
            >사이트 바로가기</a
          >
          <div
            class="view_img"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          ></div>
        </li>

        <li>
          <h3>이누네코<span> (팀프로젝트용)</span></h3>
          <p>
            회원가입 시 입력된 정보를 유의미하게 사용할 수 있도록<br />제작해보고
            싶었고, 회원가입, 로그인, 마이페이지를 제작하였습니다.
          </p>
          <p>
            사용 툴 : Figma, Photoshop, Illustrator,<br />
            Visual Studio Code, Github, Notion<br />
            참여도 : 100%
          </p>
          <div class="view_img"></div>
          <a href="https://github.com/dnjswlekd/inuneco" class="viewOpen"
            >Github 바로가기</a
          >
          <a
            href="https://dnjswlekd.github.io/inuneco/sing-up/sign-up.html"
            target="_blank"
            >사이트 바로가기</a
          >
        </li>

        <li style="display: none">
          <h3>인터파크<span> (클론코딩)</span></h3>
          <p>
            기존 사이트에서 불편함 점을 찾아 개선하였고,<br />
            클론코딩으로 제작하였습니다.
          </p>
          <p>
            사용 툴 : Figma, Photoshop, Visual Studio Code<br />
            참여도 : 100%
          </p>
          <div class="view_img"></div>
          <a
            href="https://github.com/dnjswlekd/interpark-clone"
            class="viewOpen"
            >Github 바로가기</a
          >
          <a
            href="https://dnjswlekd.github.io/interpark-clone/index.html"
            target="_blank"
            >사이트 바로가기</a
          >
        </li>

        <li style="display: none">
          <h3>STX 건설<span> (클론코딩)</span></h3>
          <p>기존 사이트를 클론코딩하였습니다.</p>
          <p>
            사용 툴 : Photoshop, Illustrator, Visual Studio Code<br />
            참여도 : 100%
          </p>
          <div class="view_img"></div>
          <a href="https://github.com/dnjswlekd/STX" class="viewOpen"
            >Github 바로가기</a
          >
          <a href="https://dnjswlekd.github.io/STX/index.html" target="_blank"
            >사이트 바로가기</a
          >
        </li>
      </ul>
    </div>
  </section>
  <!--end of portfolio-->
</template>
<script setup></script>

<style lang="scss">
#port {
  height: 100vh;
}
</style>
