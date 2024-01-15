import { Badge } from "../badge";
import Image from "next/image";
import Section from "../section";
import LANGUAGES from "@/app/data/languages";
import { buildImageUrl } from "@/app/utils/image";

export default function Languages() {
  return (
    <Section title="Languages">
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
                  alt={language.name}
                />
                <span>{language.name}</span>
              </>
            }
          />
        ))}
      </section>
    </Section>
  );
}
