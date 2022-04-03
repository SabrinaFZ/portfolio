export interface Education {
  institution: string;
  degree: string;
  date: string;
  location: string;
}

export default [
  {
    institution: "KeepCoding",
    degree: "Full Stack Web Development Bootcamp",
    date: "11/2018 - 10/2019",
    location: "Madrid, Spain",
  },
  {
    institution: "Technical University of Madrid",
    degree: "Bachelor Degree Computer Engineer",
    date: "09/2011 - 01/2018",
    location: "Madrid, Spain",
  },
] as Array<Education>;
