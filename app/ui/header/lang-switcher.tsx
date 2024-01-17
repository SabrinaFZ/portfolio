"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { buildImageUrl } from "@/app/utils/image";
import LANGUAGES from "@/app/data/languages";

export default function LangSwitcher({
  currentPathame,
}: {
  currentPathame: string;
}) {
  const t = useTranslations("Languages");
  const router = useRouter();
  const changeLocale = (langSelected: string) => {
    router.replace(`/${langSelected}`);
  };

  return (
    <div className="flex gap-8 mb-10">
      {LANGUAGES.map((language) => (
        <Link
          href={`/${language.code}`}
          key={language.code}
          className={
            currentPathame.includes(language.code)
              ? "border-b-2 border-white"
              : ""
          }
        >
          <Image
            className="pb-1"
            src={buildImageUrl(language.imagePath)}
            width={25}
            height={25}
            alt={t(language.name)}
          />
        </Link>
      ))}
    </div>
  );
}
