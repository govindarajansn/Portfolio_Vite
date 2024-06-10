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

    "Hi there! I'm Sneha, a tech enthusiast and graduate student pursuing my Master's in Information Systems in the vibrant city of Boston. My passion lies in crafting cutting-edge web applications and constantly exploring the latest technological advancements.",

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "career",
    title: "Career",
  },
];

//  bookStore,
//   carThumbnail,
//   cloudThumbnail,
//   creditCard,
//   foodGramImg,
//   huggyBuddy,
//   musicThmbnail,
//   ticTacToeGame,

const projects = [
  {
    name: "3D Customizable Car",
    description: "Customize your car using three.js and react",
    image: carThumbnail,
    source_code_link: "https://github.com/govindarajansn/car-model-threejs",
    demo_link: "https://car-model-threejs.vercel.app/",
  },
  {
    name: "Pawsitive",
    description:
      "Explore a user-friendly Figma prototype for Pet's Social Gram",
    image: pawsitivePrototype,
    source_code_link:
      "https://www.figma.com/proto/5EfaQhTZ0r1VxAKGC48u9I/Sneha_Govindarajan?page-id=680%3A14&node-id=855-6428&viewport=268%2C728%2C0.09&t=sqUm23IN85gIahRj-1&scaling=scale-down",
    demo_link:
      "https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2",
  },
  {
    name: "FoodGram",
    description: "Get your recipe in one click - Yaaaay :-;",
    image: foodGramImg,
    source_code_link: "https://github.com/govindarajansn/cook-book-mealdb",
    demo_link: "https://cook-book-mealdb.vercel.app/",
  },
  {
    name: "Technochronicle",
    description: "Get all kind of blogs in one place",
    image: teChronicle,
    source_code_link:
      "https://github.com/govindarajansn/techchronicles-backend-express",
    demo_link: "https://github.com/govindarajansn/techchronicles-frontent-nuxt",
  },
  {
    name: "Tic-Tac-Toe 3D",
    description: "Are you Bored! Just click and play",
    image: ticTacToeGame,
    source_code_link: "https://github.com/govindarajansn/Tic-Tac-Toe-3D",
    demo_link: "https://tic-tac-toe-3d-snowy.vercel.app",
  },
  {
    name: "Cloud Deployment",
    description: "AWS CI/CD Web App with React and Node.js",
    image: cloudThumbnail,
    source_code_link: "https://github.com/csye-snehagovindarajan/webapp",
    demo_link: "https://github.com/csye-snehagovindarajan/webapp",
  },
  {
    name: "Happify",
    description: "Music app using spotify API",
    image: musicThmbnail,
    source_code_link: "https://github.com/govindarajansn/Happify",
    demo_link: "https://happify-music-db.vercel.app/",
  },
  {
    name: "Huggy Buddy",
    description: "Using Hugging Face API - Sentiment Analysis App",
    image: huggyBuddy,
    source_code_link: "https://github.com/govindarajansn/HuggyBuddy",
    demo_link: "https://huggy-buddy.vercel.app/",
  },
  {
    name: "Active Pay",
    description: "Re-paying cred card bill and getting return rewards",
    image: creditCard,
    source_code_link:
      "https://github.com/neu-mis-info6150-fall-2022/final-project-quadsquad",
    demo_link: "",
  },
  {
    name: "Travelling Salesman Problem",
    description: "Here's the Optimized Solution for TSP",
    image: tspThumbnail,
    source_code_link: "https://github.com/govindarajansn/FinalProject-INFO6205",
    demo_link: "",
  },
  {
    name: "Online Book Store",
    description:
      "Fetch the Books using isbn, title, author from google books API",
    image: bookStore,
    source_code_link: "https://github.com/govindarajansn/ScanbuyApp",
    demo_link: "",
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
  },
  {
    id: "java",
    title: "Java",
    icon: javaIcon,
    description:
      "I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.",
  },
  {
    id: "aws",
    title: "Amazon Web Services",
    icon: awsIcon,
    description:
      "I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.",
  },
  {
    id: "figma",
    title: "Figma",
    icon: figmaIcon,
    description:
      "In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
  },
  {
    id: "psql",
    title: "Postgresql",
    icon: psqlIcon,
    description:
      "I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.",
  },
  {
    id: "vite",
    title: "Vite",
    icon: viteIcon,
    description:
      "I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.",
  },
  {
    id: "py",
    title: "Python",
    icon: pyIcon,
    description:
      "With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.",
  },
  {
    id: "node",
    title: "Node",
    icon: nodeIcon,
    description:
      "When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
  },
  {
    id: "neo",
    title: "Neo4j",
    icon: neoIcon,
    description:
      "I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.",
  },
  {
    id: "raspi",
    title: "Raspberry Pi",
    icon: raspIcon,
    description:
      "I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.",
  },
  {
    id: "eslint",
    title: "Eslint",
    icon: eslintIcon,
    description:
      "I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
  },
];

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
  projects,
  skills,
  careerData,
};
