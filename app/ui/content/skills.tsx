import { SKILLS } from "@/app/data/skills";
import { Badge } from "../badge";
import Section from "../section";

export default function Skills() {
  return (
    <Section title="Skills">
      {SKILLS.map((skill) => (
        <section key={skill.name} className="mt-4">
          <h3 className="font-semibold mb-2">{skill.name}</h3>
          <div className="flex flex-wrap gap-1">
            {skill.technologies.map((tech) => (
              <Badge key={tech} content={tech} />
            ))}
          </div>
        </section>
      ))}
    </Section>
  );
}
