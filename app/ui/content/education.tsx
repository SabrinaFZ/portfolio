import EDUCATION from "@/app/data/education";
import Section from "../section";

export default function Education() {
  return (
    <Section title="Education">
      {EDUCATION.map((education) => (
        <section
          key={education.study}
          className="flex flex-col gap-1 mb-4 last:mb-0"
        >
          <h3 className="font-semibold">
            {education.school} · {education.study}
          </h3>
          <h4>
            {education.startDate} – {education.endDate}
          </h4>
        </section>
      ))}
    </Section>
  );
}
