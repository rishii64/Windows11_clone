import {
  JavascriptOriginal,
  // PythonOriginal,
  Html5Original,
  Css3Original,
  ExpressOriginal,
  ReactOriginal,
  NextjsOriginal,
  TailwindcssOriginal,
  BootstrapPlain,
  NodejsOriginal,
  MongodbPlain,
  PostmanPlain,
  // CPlain,
  // DjangoPlain,
  // MysqlOriginalWordmark,
  // PostgresqlOriginal,
  // PhotoshopOriginal,
  // FigmaOriginal,
  // BlenderOriginal,
} from "devicons-react";

// Constants
const githubLink = "https://github.com/rishii64";

// Profile Description
export const profileDescription = [
  "Hello, I'm Saptarsi Mitra, a versatile software engineer proficient in both frontend and backend development specializing in creating, maintaining, and optimizing web applications that include everything from the user interface (frontend) to the server, database, and application logic (backend). I build comprehensive, scalable web applications that deliver a seamless user experience while efficiently managing data and server-side processes.",
];

// Work Experience Template
export const workExperienceTemplate = [
  {
    key: 1,
    company: "", // Add company name here
    description: [
      "", // Add description points here
    ],
    duration: "", // Add duration here
    designation: "", // Add designation here
    type: "work",
  },
];

// GitHub Repositories
export const githubRepos = [
  {
    name: "Portfolio",
    techUsed: ["React", "TailwindCSS"],
    description: "Uncover deeper insights into my journey and capabilities.",
    githubLink: `${githubLink}/My_3D_Portfolio`,
    liveURL: "https://saptarsimitra.vercel.app/",
  },
  {
    name: "India Tourism",
    techUsed: ["React", "CSS"],
    description:
      "A tourism website showcasing the best possible ways to entertain yourself, embarking on a virtual odyssey through the enchanting landscapes, rich heritage, and vibrant culture of India.",
    githubLink: `${githubLink}/Emoji-TicTacToe`,
    liveURL: "https://sm-india-tourism.netlify.app/",
  },
  {
    name: "GTA-VI(Early Access)",
    techUsed: ["Python"],
    description:
      "Explore chaos in GTA VI(Early Access), a Python and Ursina-powered open-world adventure. Engage in a gripping narrative, experience dynamic gameplay, and unlock exclusive updates. Navigate the urban jungle and gear up for the thrill!",
    githubLink: `${githubLink}/GTA-VI-Early-Access-`,
    liveURL: `${githubLink}/GTA-VI-Early-Access-`,
  },
  {
    name: "NYX",
    techUsed: ["HTML", "CSS", "JavaScript"],
    description:
      "NYX is a sleek Website Blocker that empowers users to block distracting websites for set durations, promoting productivity and focus.",
    githubLink: `${githubLink}/nyx`,
    liveURL: `${githubLink}/nyx`,
  },
];

// Education Experience
export const educationExperience = [
  {
    key: 1,
    institution: "Supreme Knowledge Foundation Group of Institutions",
    graduation: "May 2023",
    degree: "BTech",
    type: "education",
  },
  {
    key: 2,
    institution: "Gantar B.M High SChool",
    graduation: "Aug 2019",
    degree: "X",
    type: "education",
  },
  // {
  //   key: 3,
  //   institution: "Acme Academy",
  //   graduation: "April 2017",
  //   degree: "X",
  //   type: "education",
  // },
];

const iconSize = 15;
const iconClass = "mx-auto";

export const skills = [
  // {
  //   key: 1,
  //   name: "Python",
  //   type: "language",
  //   icon: PythonOriginal ? (
  //     <PythonOriginal className={iconClass} size={iconSize} />
  //   ) : null,
  // },
  {
    key: 2,
    name: "JavaScript",
    type: "language",
    icon: JavascriptOriginal ? (
      <JavascriptOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 3,
    name: "HTML",
    type: "language",
    icon: Html5Original ? (
      <Html5Original className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 4,
    name: "CSS",
    type: "language",
    icon: Css3Original ? (
      <Css3Original className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 5,
    name: "React",
    type: "framework",
    icon: ReactOriginal ? (
      <ReactOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 6,
    name: "Express",
    type: "framework",
    icon: ExpressOriginal ? (
      <ExpressOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 7,
    name: "TailwindCSS",
    type: "framework",
    icon: TailwindcssOriginal ? (
      <TailwindcssOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 8,
    name: "Bootstrap",
    type: "framework",
    icon: BootstrapPlain ? (
      <BootstrapPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 9,
    name: "Node.JS",
    type: "framework",
    icon: NodejsOriginal ? (
      <NodejsOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 10,
    name: "MongoDB",
    type: "database",
    icon: MongodbPlain ? (
      <MongodbPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 11,
    name: "Postman",
    type: "tool",
    icon: PostmanPlain ? (
      <PostmanPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 13,
    name: "Next.js",
    type: "framework",
    icon: NextjsOriginal ? (
      <NextjsOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  // {
  //   key: 12,
  //   name: "C",
  //   type: "language",
  //   icon: CPlain ? <CPlain className={iconClass} size={iconSize} /> : null,
  // },
  // {
  //   key: 14,
  //   name: "Django",
  //   type: "framework",
  //   icon: DjangoPlain ? (
  //     <DjangoPlain className={iconClass} size={iconSize} />
  //   ) : null,
  // },
  // {
  //   key: 15,
  //   name: "MySQL",
  //   type: "database",
  //   icon: MysqlOriginalWordmark ? (
  //     <MysqlOriginalWordmark className={iconClass} size={iconSize} />
  //   ) : null,
  // },
  // {
  //   key: 16,
  //   name: "PostgreSQL",
  //   type: "database",
  //   icon: PostgresqlOriginal ? (
  //     <PostgresqlOriginal className={iconClass} size={iconSize} />
  //   ) : null,
  // },
  // {
  //   key: 17,
  //   name: "Blender",
  //   type: "tool",
  //   icon: BlenderOriginal ? (
  //     <BlenderOriginal className={iconClass} size={iconSize} />
  //   ) : null,
  // },
  // {
  //   key: 18,
  //   name: "Photoshop",
  //   type: "tool",
  //   icon: PhotoshopOriginal ? (
  //     <PhotoshopOriginal className={iconClass} size={iconSize} />
  //   ) : null,
  // },
  // {
  //   key: 19,
  //   name: "Figma",
  //   type: "tool",
  //   icon: FigmaOriginal ? (
  //     <FigmaOriginal className={iconClass} size={iconSize} />
  //   ) : null,
  // },
];

const appsData = [
  {
    id: 1,
    name: "Google Chrome",
    icon: "/images/apps/chrome.png",
    action: "browser",
    size: "w-18 h-18",
  },
  {
    id: 2,
    name: "About Me",
    icon: "/images/apps/folder.png",
    action: "explorer",
    size: "w-18 h-18",
  },
  {
    id: 3,
    name: "Recycle Bin",
    icon: "/images/apps/recyclebin.png",
    action: "recycle",
    size: "w-14 h-14",
  },
  {
    id: 4,
    name: "Microsoft Edge",
    icon: "/images/apps/edge.png",
    action: "browser",
    size: "w-11 h-11",
  },
  {
    id: 5,
    name: "Calculator",
    icon: "/images/apps/calculator.png",
    action: "calculator",
    size: "w-11 h-11",
  },
  {
    id: 6,
    name: "VS Code",
    icon: "https://laaouatni.github.io/w11CSS/images/vs-code.ico",
    action: "vscode",
    size: "w-8 h-8",
  },
  {
    id: 7,
    name: "Emoji TicTacToe",
    icon: "https://raw.githubusercontent.com/MishanPoudel/Emoji-TicTacToe/main/public/favicon.ico",
    action: "app",
    subAction: "emoji",
    size: "w-10 h-10",
  },
  {
    id: 8,
    name: "Spotify",
    icon: "https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png",
    action: "app",
    subAction: "spotify",
    size: "w-10 h-10",
  },
];

// Export default data
export default appsData;

// Social Media Links
export const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/mishanpoudel/",
  github: githubLink,
};
