export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  responsibilities: Array<string>;
  date: string;
}

export default [
  {
    company: "Busuu",
    role: "Full Stack Developer",
    location: "Madrid, Spain",
    responsibilities: [
      "Develop new front-end features with HTML, CSS, Javascript, Typescript, React.js, Redux, Angularjs, Sass and unit tests with Jest and Enzyme",
      "Develop new back-end features with PHP, Symfony, Node, Nest and MySQL and unit and functional tests",
      "Experience in Docker containers and CI/CD with Jenkins",
      "Team work using agile methodologies",
      "Application maintenance",
    ],
    date: "09/2020 - Current",
  },
  {
    company: "Con&Sel15",
    role: "Front-end Developer",
    location: "Madrid, Spain",
    responsibilities: [
      "Develop new front-end features with Vue, Vuex, HTML, Javascript, CSS and Sass",
      "Experience in CI/CD with Azure",
      "Application maintenance",
    ],
    date: "04/2020 - 09/2020",
  },
  {
    company: "Amaris",
    role: "Front-end Developer",
    location: "Madrid, Spain",
    responsibilities: [
      "Develop new front-end features with Vue, Vuex, Sass, Backbone, Marionette, CSS, HTML, Javascript, jQuery, Dust, Stylus, Sass and unit tests with Mocha, Chai and Sinon",
      "Develop new back-end features with Java, Spring and MySQL",
      "BDD Testing with Selenium",
      "Experience in CI/CD with Jenkins",
      "Team work using agile methodologies",
      "Application maintenance",
    ],
    date: "01/2018 - 04/2020",
  },
  {
    company: "Bridge For Billions",
    role: "Front-end Developer Intern",
    location: "Madrid, Spain",
    responsibilities: [
      "Develop new front-end features with HTML5, CSS3, SASS, AngularJS, Javascript, Jade, Jquery, Coffeescript",
      "Develop new back-end features with Django, Python",
      "Team work using agile methodologies",
      "Application maintenance",
    ],
    date: "04/2020 - 09/2020",
  },
] as Array<WorkExperience>;
