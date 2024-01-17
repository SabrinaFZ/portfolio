"use client";
import { useTranslations } from "next-intl";
import EXPERIENCE from "@/app/data/experience";
import Section from "../section";

export default function Experience() {
  const t = useTranslations("Experience");
  const getTranslation = (key: string, field: string): string => {
    return t(`${key}.${field}`);
  };
  return (
    <Section title={t("title")}>
      {EXPERIENCE.map((experience) => (
        <section
          key={experience.company}
          className="flex flex-col gap-1 mb-4 last:mb-0"
        >
          <h3 className="font-semibold">
            {getTranslation(experience.company, "company")} ·{" "}
            {getTranslation(experience.company, "role")}
          </h3>
          <h4>
            {experience.startDate} -{" "}
            {experience.endDate === "At present"
              ? t("At present")
              : experience.endDate}
          </h4>
        </section>
      ))}
    </Section>
  );
}
