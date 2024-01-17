"use client";
import { useTranslations } from "next-intl";
import { SKILLS } from "@/app/data/skills";
import { Badge } from "../badge";
import Section from "../section";

export default function Skills() {
  const t = useTranslations("Skills");
  return (
    <Section title={t("title")}>
      {SKILLS.map((skill) => (
        <section key={skill.name} className="mt-4">
          <h3 className="font-semibold mb-2">{t(skill.name)}</h3>
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
