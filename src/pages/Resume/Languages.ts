interface Language {
  language: string;
  level: string;
  certificates?: string;
}

export default [
  {
    language: " Spanish",
    level: "Native Speaker",
  },
  {
    language: "English",
    level: "Advanced Level (C1)",
    certificates:
      "Certificated with Advanced Certificate in English by the Cambridge University",
  },
  {
    language: "German",
    level: "Beginner Level (A2)",
  },
] as Array<Language>;
