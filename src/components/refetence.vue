<template>
  <!-- modal -->
  <div class="modal">
    <div class="modal-wrap">
      <div class="modal-box modal-front">
        <i class="fas fa-laptop-code"></i>
        <h1>Wonji's Portfolio</h1>
        <h2>
          이 사이트는 포트폴리오용으로 제작되었으며<br />
          리소스는 박원지에게 있습니다.
        </h2>
        <span>본 사이트는 Chrome에 최적화 되어있습니다.</span>
      </div>

      <div class="modal-box modal-back">
        <ul class="modal-list">
          <h3>
            <i class="fas fa-bullhorn"></i> <u>이렇게 제작하였습니다</u> :)
          </h3>
          <li>1. <b>Favicon</b>을 제작하였습니다.</li>
          <li>
            2. UX 편의성을 향상시키기 위해
            <b>스크롤 시 Header 영역을 사용자가 보기 편리한 상단으로 배치</b
            >하였습니다.
          </li>
          <li>
            3. AOS 라이브러리를 사용하여
            <b>스크롤을 내리는 위치에 따라 fade효과되는</b> 기능을
            추가하였습니다.
          </li>
        </ul>
      </div>
      <button class="modal-close"><i class="fas fa-times"></i></button>
      <!-- 모달버튼 하루동안 보지않기 -->
      <!-- <div class="popup_btn">
        <a id="chk_today" href="javascript:closeToday();" class="close_day">하루동안 보지않기</a>
      </div> -->
    </div>
  </div>
  <!-- //modal -->

  <div id="wrap">
    <header class="">
      <div class="container">
        <nav>
          <ul class="gnb clearfix">
            <li class="on"><a href="#">HOME</a></li>
            <li class=""><a href="#aboutme">ABOUT ME</a></li>
            <li class=""><a href="#skills">SKILLS</a></li>
            <li class=""><a href="#portfolio">PORTFOLIO</a></li>
            <li class=""><a href="#experiences">EXPERIENCES</a></li>
            <li class=""><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <hr />

    <section id="home" class="">
      <div class="container">
        <p
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          style="visibility: visible"
        >
          CREATIVE PARK WONJI
        </p>
        <p
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          style="visibility: visible"
        >
          PORTFOLIO<br />VOL.1
        </p>
        <h1
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          style="visibility: visible"
        >
          WEB<br />PUBLISHER<br />
        </h1>
        <p class="des">
          안녕하세요. 신입 웹퍼블리셔 박원지입니다.<br />
          이 포트폴리오에서는 퍼블리셔를 꿈꾸며 준비한,<br />
          저의 노력의 결과인 작업물들을 보실 수 있습니다.🙂
        </p>
      </div>
    </section>
    <!--end of main home-->

    <hr />

    <section
      id="aboutme"
      data-aos="fade-up"
      data-aos-offset="400"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      class="content1 clearfix"
      style="visibility: visible"
    >
      <!-- left -->
      <div class="content1-left">
        <h2>About me</h2>
        <a href="">
          <p class="img">원지 프로필 사진</p>
        </a>
        <div class="about_bg"></div>
      </div>
      <!--end of left-->

      <!-- right -->
      <div class="content1-right">
        <div class="profile">
          <ul class="clearfix">
            <li style="line-height: 170%">
              이름 : 박원지<br />
              나이 : 25세<br />
              학력 : 대구가톨릭대학교 작곡실용음악 학과 졸업<br />
              수료 내역 : 2022.8 - 2023.2 그린아트컴퓨터학원<br />
              기업요구를 반영한 디지털비즈니스 웹앱(UX)디자인 &amp; 개발자
              양성과정 수료<br />
              <br />
              경력 사항 :<br />· 2020.2 - 2021.6 국회사무처 인턴<br />
              · 2023.5 ~ 기업요구를 반영한 디지털비즈니스 웹앱(UX)디자인 &amp;
              개발자 양성과정 멘토링 활동<br />
              <br />
              자격증 :<br />· GTQ 그래픽기술자격 포토샵 1급 취득<br />
              · GTQi 그래픽기술자격 일러스트 1급 취득<br />
              · GTQid 그래픽기술자격 인디자인 1급 취득<br />
              · 웹디자인기능사 필기 취득<br />
              · 정보처리기능사 자격증 취득 예정<br />
            </li>
          </ul>
          <!-- <button class="prev">이전</button>
                    <button class="next on">다음</button> -->
        </div>
        <div class="tag">
          <ul class="clearfix">
            <li class="on"><a href="#">#퍼블리셔</a></li>
            <li><a href="#">#UX디자이너</a></li>
            <li><a href="#">#반응형웹</a></li>
            <li><a href="#">#그로스마케팅</a></li>
          </ul>
        </div>
      </div>
      <!--end of right-->
    </section>
    <!--end of about me-->

    <hr />

    <section
      id="skills"
      data-aos="fade-up"
      data-aos-offset="400"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      class=""
      style="visibility: visible"
    >
      <h2>I can do</h2>

      <ul class="skill clearfix">
        <li>GA4</li>
        <li>TGM</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javscript</li>
        <li>JQuery</li>
        <li>RESTAPI</li>
        <li>Json</li>
      </ul>

      <h2>and I can do too</h2>

      <ul class="tool clearfix">
        <li>Figma</li>
        <li>Photoshop</li>
        <li>Illustrator</li>
        <li>Indesign</li>
      </ul>
    </section>
    <!--end of skills-->

    <hr />

    <section
      id="portfolio"
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

    <hr />

    <!-- <section id="experiences" class="" data-aos="fade-up" data-aos-offset="400" data-aos-easing="ease-out-cubic"
      data-aos-duration="2000" style="visibility: visible; ">
      <h2>Experience</h2>

      <div class="experiences-wrap">
        <div class="box">
          <div class="detail">
            <h3>Lorem ipsum dolorcadi!</h3>
            <span>Lorem ipsum dolor sit amet consectetur <br>adipisicing elit. Deserunt, mollitia? Explicabo
              tenetur natus e</span>
          </div>
        </div>

      </div>

    </section> -->

    <hr />

    <section
      id="contact"
      class=""
      data-aos="fade-up"
      data-aos-offset="400"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      style="visibility: visible"
    >
      <h2>Contact</h2>
      <div class="contact_img"></div>

      <div class="container">
        <p>
          "아름답고 화려한 디자인만을 만드는 것이 목표가 아닌,<br />
          <strong>최적의 사용자 경험을 제공하는 것을 목표</strong>로 하는<br />
          <strong>웹 퍼블리셔, 박원지</strong>가 되겠습니다."
        </p>
        <p>연락처 : wj8014@gmail.com, 010 5275 2671<br /></p>

        <div class="link clearfix">
          <a
            href="https://dnjswlekd.notion.site/c2464a78e9e14ed294996934e8b30878?pvs=4"
            class="notion"
            target="_blank"
            >Notion 바로가기</a
          >
          <a href="https://github.com/dnjswlekd" class="git" target="_blank"
            >GitHub 바로가기</a
          >
          <a href="pdf/resume_final.pdf" download class="resume" target="_blank"
            >이력서 다운받기</a
          >
        </div>
      </div>
    </section>
    <!--end of contact-->

    <hr />

    <footer>
      <address>
        본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.<br />
        © 2023 Park, Won-Ji. All Rights Reserved.
      </address>
    </footer>
  </div>
</template>
