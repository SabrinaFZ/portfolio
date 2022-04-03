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
      "Responsible for new developments using technologies such as HTML, CSS, Javascript, React.js, Redux, Angularjs, Jest, Enzyme, Sass, PHP, Symfony, SQL, Docker, Git",
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
      "Responsible for new developments using technologies such as Vue, Vuex, CSS, HTML, Javascript, Sass, Git, Azure",
      "Team work using agile methodologies",
      "Application maintenance",
    ],
    date: "04/2020 - 09/2020",
  },
  {
    company: "Amaris",
    role: "Front-end Developer",
    location: "Madrid, Spain",
    responsibilities: [
      "Responsible for new developments using technologies such as Vue, Vuex, Backbone, Marionette, CSS, HTML, Jenkins, Javascript, jQuery, Dust, Stylus, Git, Java, Azure",
      "Unit Testing with Mocha, Chai and Sinon",
      "BDD Testing with Selenium",
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
      "Responsible for implementing their web application using HTML5, CSS3, SASS, AngularJS,Javascript, Jade, Jquery, Coffeescript, Django, Python",
      "Team work using agile methodologies",
      "Application maintenance",
    ],
    date: "04/2020 - 09/2020",
  },
] as Array<WorkExperience>;
