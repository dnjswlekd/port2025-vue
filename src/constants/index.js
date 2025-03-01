export const headerNav = [
  {
    title: 'home',
    url: '#home',
  },
  {
    title: 'aboutme',
    url: '#about',
  },
  {
    title: 'skills',
    url: '#skill',
  },
  {
    title: 'portfolio',
    url: '#port',
  },
  {
    title: 'contact',
    url: '#contact',
  },
];

export const skills = {
  develop: ['html', 'css', 'js', 'sass', 'jquery', 'vue', 'react'],
  design: [
    'figma',
    'photoshop',
    'illustrator',
    'indesign',
    'notion',
    'git',
    'gitlab',
    'github',
  ],
};

export const links = [
  {
    href: 'https://dnjswlekd.notion.site/c2464a78e9e14ed294996934e8b30878?pvs=4',
    text: 'Notion 바로가기',
    class: 'notion',
    target: '_blank',
    download: false,
  },
  {
    href: 'https://github.com/dnjswlekd',
    text: 'GitHub 바로가기',
    class: 'git',
    target: '_blank',
    download: false,
  },
  {
    href: 'pdf/resume_final.pdf',
    text: '이력서 다운받기',
    class: 'resume',
    target: '_blank',
    download: true,
  },
];

import port01 from '@/assets/images/port-1.png';
import port02 from '@/assets/images/port-2.png';
import port03 from '@/assets/images/port-3.png';

export const portText = [
  {
    num: '01',
    title: '어워드에도 올라간 포트폴리오',
    desc: '라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오입니다. 가로 모드와 세로 모드는 매우 인상적이며 특히 리액트와 비트를 이용하여 제작한 것은 더욱 놀랍습니다. 이 사이트는 awwwards.com에도 인정받아 올라간 포트폴리오입니다. 확실히 그의 뛰어난 디자인 스킬과 기술력이 빛을 발휘한 결과물인 것 같습니다.',
    img: port01,
    code: 'https://github.com/kimsangjunv1/-React-Portfolio',
    view: 'https://portfoliosj-react.netlify.app',
    name: '김상* 포트폴리오',
  },
  {
    num: '02',
    title: '빛나는 밤에 포트폴리오',
    desc: '이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ',
    img: port02,
    code: 'https://github.com/seolhee313/PORTFOLIO-REACT',
    view: 'https://portfolio-313.web.app/',
    name: '천설* 포트폴리오',
  },
  {
    num: '03',
    title: '열정이 넘치는 포트폴리오',
    desc: '이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ',
    img: port03,
    code: 'https://github.com/seolhee313/PORTFOLIO-REACT',
    view: 'https://portfolio-313.web.app/',
    name: '천설* 포트폴리오',
  },
];
