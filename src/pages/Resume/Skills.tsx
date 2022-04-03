import { ReactNode } from "react";
import { ReactComponent as HTML5 } from "@/assets/images/icons/html.svg";
import { ReactComponent as CSS3 } from "@/assets/images/icons/css.svg";
import { ReactComponent as Javascript } from "@/assets/images/icons/js.svg";
import { ReactComponent as React } from "@/assets/images/icons/react.svg";
import { ReactComponent as Vue } from "@/assets/images/icons/vuejs.svg";
import { ReactComponent as Angular } from "@/assets/images/icons/angular.svg";
import { ReactComponent as Sass } from "@/assets/images/icons/sass.svg";
import { ReactComponent as Webpack } from "@/assets/images/icons/webpack.svg";
import { ReactComponent as Typescript } from "@/assets/images/icons/ts.svg";
import { ReactComponent as Node } from "@/assets/images/icons/nodejs.svg";
import { ReactComponent as Java } from "@/assets/images/icons/java.svg";
import { ReactComponent as Rest } from "@/assets/images/icons/api.svg";
import { ReactComponent as PHP } from "@/assets/images/icons/php.svg";
import { ReactComponent as SQL } from "@/assets/images/icons/sql.svg";
import { ReactComponent as MYSQL } from "@/assets/images/icons/mysql.svg";
import { ReactComponent as Jest } from "@/assets/images/icons/jest.svg";
import { ReactComponent as Git } from "@/assets/images/icons/git.svg";
import { ReactComponent as Docker } from "@/assets/images/icons/docker.svg";
import { ReactComponent as Github } from "@/assets/images/icons/github.svg";
import { ReactComponent as Jenkins } from "@/assets/images/icons/jenkins.svg";

export interface Technology {
  icon: ReactNode;
  name: string;
}

interface Skill {
  field: string;
  technologies: Array<Technology>;
}

export default [
  {
    field: "Front-end",
    technologies: [
      {
        icon: <HTML5 />,
        name: "HTML",
      },
      {
        icon: <CSS3 />,
        name: "CSS3",
      },
      {
        icon: <Javascript />,
        name: "Javascript",
      },
      {
        icon: <React />,
        name: "React/Redux",
      },
      {
        icon: <Vue />,
        name: "Vue/Vuex",
      },
      {
        icon: <Angular />,
        name: "Angular",
      },
      {
        icon: <Webpack />,
        name: "Webpack",
      },
      {
        icon: <Sass />,
        name: "Sass",
      },
      {
        icon: <Typescript />,
        name: "Typescript",
      },
    ] as Array<Technology>,
  },
  {
    field: "Back-end",
    technologies: [
      {
        icon: <Node />,
        name: "Node/Nest",
      },
      {
        icon: <Java />,
        name: "Java/Spring",
      },
      {
        icon: <PHP />,
        name: "PHP/Symfony",
      },
      {
        icon: <Rest />,
        name: "Rest API",
      },
    ],
  },
  {
    field: "Testing",
    technologies: [
      {
        icon: <Jest />,
        name: "Jest",
      },
    ],
  },
  {
    field: "Databases",
    technologies: [
      {
        icon: <SQL />,
        name: "SQL",
      },
      {
        icon: <MYSQL />,
        name: "MySQL",
      },
    ],
  },
  {
    field: "Version Control",
    technologies: [
      {
        icon: <Git />,
        name: "Git",
      },
    ],
  },
  {
    field: "DevOps",
    technologies: [
      {
        icon: <Docker />,
        name: "Docker",
      },
      {
        icon: <Jenkins />,
        name: "Jenkins",
      },
      {
        icon: <Github />,
        name: "Github Actions",
      },
    ],
  },
] as Array<Skill>;
