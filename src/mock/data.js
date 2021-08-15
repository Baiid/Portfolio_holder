import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Martin Jahoda',
  subtitle: 'Front End Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img:'profile-pic.jpg',
  paragraphOne: 'I am self though front-end developer who is passionate about building awesome website’s and application’s! I have currently learned and used HTML, CSS, SCSS and Vanilla Javascript. I am currently learning React and I can’t wait to build a new website’s with it!. On personal level, I am self-driven & hard working, I am able to adapt very quick and overall I am very curious. Also, I am really friendly who can fit in any team. ',
   paragraphTwo: 'My current skills',
   paragraphThree: 'HTML, CSS, BOOTSTRAP, SASS, JAVASCRIPT ',
  resume: 'https://drive.google.com/drive/my-drive', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.png',
    title: 'Mortgage website',
    info: 'First project build using HTML, CSS, Bootstrap & Javascript. I have used simple Javascript building the contact form. Also, I have added some cool animation.',
    // info2: '',
    url: 'https://baiid.github.io/Bridging-loan-website/',
    repo: 'https://github.com/Baiid/Bridging-loan-website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.png',
    title: 'Email Template',
    info: 'First time building email template with tables in HTML, also including inline CSS & MediaQuery',
    // info2: '',
    url: 'https://baiid.github.io/Email-Template/',
    repo: 'https://github.com/Baiid/Email-Template', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3.png',
    title: 'Weather App',
    info: 'This is a responsive weather app made with Javascript using open-weather API. It is my first project using API.I will dive into API more in the future',
    // info2: '',
    url: 'https://baiid.github.io/Weather-app/',
    repo: 'https://github.com/Baiid/Weather-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email: mjahodax@gmail.com',
  email: 'mjahodax@gmail.com',
  btn2:'Phone number: 07859513452',
  tel:'07859513452',
};

// FOOTER DATA
export const footerData = {
  networks: [

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/martin-jahoda-009803219/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Baiid',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
