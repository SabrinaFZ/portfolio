import AboutMe from "./about-me";
import Education from "./education";
import Experience from "./experience";
import Languages from "./languages";
import Skills from "./skills";

export default function Content() {
  return (
    <div className="px-4 md:px-12 flex flex-col gap-12">
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <Languages />
    </div>
  );
}
