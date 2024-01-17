"use client";
import { useTranslations } from "next-intl";
import EDUCATION from "@/app/data/education";
import Section from "../section";

export default function Education() {
  const t = useTranslations("Education");
  const getTranslation = (key: string, field: string): string => {
    return t(`${key}.${field}`);
  };
  return (
    <Section title={t("title")}>
      {EDUCATION.map((education) => (
        <section
          key={education.school}
          className="flex flex-col gap-1 mb-4 last:mb-0"
        >
          <h3 className="font-semibold">
            {getTranslation(education.school, "school")} ·{" "}
            {getTranslation(education.school, "study")}
          </h3>
          <h4>
            {education.startDate} – {education.endDate}
          </h4>
        </section>
      ))}
    </Section>
  );
}
