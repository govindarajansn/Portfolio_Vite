import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBagShopping,
  faBars,
  faDiceD6,
  faEnvelope,
  faWindowRestore,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import {
  avatar,
  awsIcon,
  calculator,
  cssIcon,
  eslintIcon,
  figmaIcon,
  gitIcon,
  bookStore,
  carThumbnail,
  cloudThumbnail,
  creditCard,
  teChronicle,
  foodGramImg,
  huggyBuddy,
  musicThmbnail,
  ticTacToeGame,
  githubIcon,
  htmlIcon,
  javaIcon,
  jsIcon,
  tspThumbnail,
  memoryGame,
  neoIcon,
  nodeIcon,
  pawsitivePrototype,
  psqlIcon,
  pyIcon,
  raspIcon,
  reactIcon,
  viteIcon,
  auThumbnail,
  neuThumbnail,
  virtusaThumbnail,
  sapThumbnail,
  web,
  frontend,
  backend,
  angular,
  aws,
  bootstrap,
  cImg,
  cplus,
  css,
  expressjs,
  github,
  html5,
  java,
  javascript,
  jira,
  jquery,
  linux,
  microsoft,
  mongodb,
  mysql,
  nextjs,
  nodejs,
  python,
  saplogo,
  d3,
  oracle,
  react,
  sass,
  spring,
  tailwind,
  vuejs,
  nuxtjs,
  tailwindcss,
  sapbtp,
  sapcap,
  kubernetes,
  docker,
  terraform,
  threejs,
  framermotion,
  figma,
  cloudFoundry,
  postgreSql,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! :)",

    "I'm Sneha, a tech enthusiast and graduate student pursuing my Master's in Information Systems in the vibrant city of Boston. My passion lies in crafting cutting-edge web applications and constantly exploring the latest technological advancements.",

    "When I'm not immersed in coding or brainstorming new ideas, you'll find me dancing my heart out, cuddling with my furry friends, or binge-watching the latest series on Netflix.",

    "I thrive on collaborating with dynamic individuals and teams who share my excitement for creating extraordinary digital experiences. Let's connect and build something amazing together!",
  ],
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "career",
    title: "Career",
  },
];

export const SERVICES = [
  {
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const frontendProjects = [
  {
    name: "3D Customizable Car",
    description: "Customize your car using THREE.JS and REACT",
    image: carThumbnail,
    source_code_link: "https://github.com/govindarajansn/car-model-threejs",
    demo_link: "https://car-model-threejs.vercel.app/",
  },
  {
    name: "PawGram",
    description:
      "Explore a user-friendly FIGMA prototype for Pet's Social Gram",
    image: pawsitivePrototype,
    source_code_link:
      "https://www.figma.com/proto/5EfaQhTZ0r1VxAKGC48u9I/Sneha_Govindarajan?page-id=680%3A14&node-id=855-6428&viewport=268%2C728%2C0.09&t=sqUm23IN85gIahRj-1&scaling=scale-down",
    demo_link:
      "https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2",
  },
  {
    name: "FoodGram",
    description: "Get your recipe in one click using ANGULAR",
    image: foodGramImg,
    source_code_link: "https://github.com/govindarajansn/cook-book-mealdb",
    demo_link: "https://cook-book-mealdb.vercel.app/",
  },
  {
    name: "Tic-Tac-Toe 3D",
    description: "Are you Bored! Just click and play using REACT-THREE-FIBRE",
    image: ticTacToeGame,
    source_code_link: "https://github.com/govindarajansn/Tic-Tac-Toe-3D",
    demo_link: "https://tic-tac-toe-3d-snowy.vercel.app",
  },
  {
    name: "Happify",
    description: "Music app using spotify API using REACT",
    image: musicThmbnail,
    source_code_link: "https://github.com/govindarajansn/Happify",
    demo_link: "https://happify-music-db.vercel.app/",
  },
  {
    name: "Huggy Buddy",
    description: "Using Hugging Face API - Sentiment Analysis App using REACT",
    image: huggyBuddy,
    source_code_link: "https://github.com/govindarajansn/HuggyBuddy",
    demo_link: "https://huggy-buddy.vercel.app/",
  },
];

const fullstackProjects = [
  {
    name: "Technochronicle",
    description:
      "Get all kind of blogs in one place using NUXT.JS & POSTGRE SQL",
    image: teChronicle,
    source_code_link:
      "https://github.com/govindarajansn/techchronicles-backend-express",
    demo_link: "https://github.com/govindarajansn/techchronicles-frontent-nuxt",
  },
  {
    name: "Active Pay",
    description:
      "Re-paying cred card bill and gets rewards using REACT & MYSQL",
    image: creditCard,
    source_code_link:
      "https://github.com/neu-mis-info6150-fall-2022/final-project-quadsquad",
    demo_link: "",
  },
  {
    name: "Online Book Store",
    description:
      "Fetch the Books using isbn, title, author using REACT & SPRING BOOT",
    image: bookStore,
    source_code_link: "https://github.com/govindarajansn/ScanbuyApp",
    demo_link: "",
  },
];

const backendCloud = [
  {
    name: "Travelling Salesman",
    description: "Here's the Optimized Solution for TSP using Algorithms",
    image: tspThumbnail,
    source_code_link: "https://github.com/govindarajansn/FinalProject-INFO6205",
    demo_link: "",
  },
  {
    name: "AWS CI/CD",
    description: "Infrastructure deployment with Terraform and AWS cloud",
    image: cloudThumbnail,
    source_code_link: "https://github.com/csye-snehagovindarajan/webapp",
    demo_link: "https://github.com/csye-snehagovindarajan/webapp",
  },
];

const memoji = {
  image: [avatar],
};

// auThumbnail,
// neuThumbnail,
// virtusaThumbnail,

const careerData = [
  {
    date: "2024 - present",
    title: "SAP America Inc.",
    location: "Newton Square, PA",
    description:
      "Tech enthusiast working with various SAP proprietary technologies to innovate new products for the SAP Software Asset Management Team",
    iconSrc: sapThumbnail,
    iconBg: "rgb(33, 150, 243)",
    iconColor: "#000",
  },
  {
    date: "2022 - present",
    title: "Northeastern University",
    location: "Boston, MA",
    description:
      "Passionate Graduate Student, seeking a challenging internship to apply my theoretical knowledge and contribute to a dynamic work environment",
    iconSrc: neuThumbnail,
    iconBg: "rgb(33, 150, 243)",
    iconColor: "#000",
  },
  {
    date: "2020 - 2022",
    title: "Virtusa",
    subtitle: "Full Stack Developer",
    description:
      "Proficient full-stack developer with a solid understanding of both front-end and back-end technologies. Adept at using modern technologies and frameworks to deliver outstanding user experiences and meet client requirements",
    iconSrc: virtusaThumbnail,
    iconBg: "#fff",
    iconColor: "#fff",
  },
  {
    date: "2020(Jun) - 2020(August)",
    title: "Virtusa",
    subtitle: "Associate Engineer, Intern",
    description:
      "Intensive three months of training and gained experience in a wide range of web development projects",
    iconSrc: virtusaThumbnail,
    iconBg: "#fff",
    iconColor: "#fff",
  },
  {
    date: "2016 - 2020",
    title: "Anna University",
    description:
      "Completed B.Tech in Information Systems with a comprehensive understanding of programming languages, software development methodologies, and database management",
    iconSrc: auThumbnail,
    iconBg: "rgb(33, 150, 243)",
    iconColor: "#fff",
  },
];

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", src: java },
      { name: "JavaScript", src: javascript },
      { name: "HTML5", src: html5 },
      { name: "SCSS", src: sass },
      { name: "CSS", src: css },
      { name: "Python", src: python },
      { name: "JQuery", src: jquery },
    ],
  },
  {
    category: "Frontend Framework",
    skills: [
      { name: "React.js", src: react },
      { name: "Angular", src: angular },
      { name: "SAP UI5", src: saplogo },
      { name: "SAP CAP", src: sapcap },
      { name: "Vue.js", src: vuejs },
      { name: "Nuxt.js", src: nuxtjs },
      {
        name: "Next.js",
        src: nextjs,
        background: "beige",
      },
      { name: "Three.js", src: threejs },
      { name: "Framer", src: framermotion },
      { name: "Bootstrap", src: bootstrap },
      { name: "Tailwind", src: tailwind },
    ],
  },
  {
    category: "Backend Framework and Database",
    skills: [
      { name: "Express.js", src: expressjs },
      { name: "Node.js", src: nodejs },
      { name: "Spring Boot", src: spring },
      { name: "MySQL", src: mysql },
      { name: "postgre SQL", src: postgreSql },
      {
        name: "MongoDB",
        src: mongodb,
        background: "beige",
      },
      { name: "Oracle", src: oracle },
    ],
  },
  {
    category: "Cloud Technology",
    skills: [
      { name: "AWS", src: aws },
      { name: "kubernetes", src: kubernetes },
      { name: "Docker", src: docker },
      { name: "Terraform", src: terraform },
    ],
  },
  {
    category: "Technologies",
    skills: [
      { name: "SAP BTP", src: sapbtp },
      { name: "Figma", src: figma },
      {
        name: "GitHub",
        src: github,
        background: "beige",
      },
      { name: "Jira", src: jira },
    ],
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  icons,
  introduction,
  markerSvg,
  media,
  memoji,
  careerData,
  skillsData,
  frontendProjects,
  fullstackProjects,
  backendCloud,
};
