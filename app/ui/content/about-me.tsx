"use client";
import { useTranslations } from "next-intl";
import DOMPurify from "isomorphic-dompurify";
import Section from "../section";

export default function AboutMe() {
  const t = useTranslations("AboutMe");

  return (
    <Section title={t("title")}>
      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(t.raw("description")),
        }}
      />
    </Section>
  );
}
