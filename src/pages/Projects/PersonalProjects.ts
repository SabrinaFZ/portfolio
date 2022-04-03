export interface Project {
  title: string;
  description: string;
  url: string;
}

export default [
  {
    title: "portfolio",
    description: "My personal website build with React.js",
    url: "https://github.com/SabrinaFZ/portfolio",
  },
  {
    title: "iwatchseries",
    description:
      "Keep track of your favorite tv series with Nuxt.js and Vue.js",
    url: "https://github.com/SabrinaFZ/iwatchseries",
  },
  {
    title: "iwatchseries-api",
    description: "API for iwatchseries made with Node.js, MongoDB and Docker",
    url: "https://github.com/SabrinaFZ/iwatchseries-api",
  },
  {
    title: "ilovemovies-react",
    description:
      "An app to save and manage your favorite movies based on React.js",
    url: "https://github.com/SabrinaFZ/ilovemovies-react",
  },
  {
    title: "UMadGame",
    description: "A board game with HTML, CSS and Javascript",
    url: "https://sabrinafz.github.io/UMadGame/",
  },
  {
    title: "Final-Year Project",
    description:
      "A cross platform mobile application to sell train tickets with React Native and Redux",
    url: "http://oa.upm.es/49514/1/TFG_SABRINA_FERNANDEZ_ZAMBRANO.pdf",
  },
] as Array<Project>;
