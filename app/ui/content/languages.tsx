"use client";
import { useTranslations } from "next-intl";
import { Badge } from "../badge";
import Image from "next/image";
import Section from "../section";
import LANGUAGES from "@/app/data/languages";
import { buildImageUrl } from "@/app/utils/image";

export default function Languages() {
  const t = useTranslations("Languages");
  return (
    <Section title={t("title")}>
      <section className="flex flex-wrap gap-1">
        {LANGUAGES.map((language) => (
          <Badge
            key={language.name}
            content={
              <>
                <Image
                  className="mr-1"
                  src={buildImageUrl(language.imagePath)}
                  width={25}
                  height={25}
                  alt={t(language.name)}
                />
                <span>
                  {t(language.name)} ({t(`Levels.${language.level}`)})
                </span>
              </>
            }
          />
        ))}
      </section>
    </Section>
  );
}
