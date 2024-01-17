"use client";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Arrow from "./arrow";
import NavLinks from "./nav-links";
import Avatar from "./avatar";
import LangSwitcher from "./lang-switcher";

export function Header() {
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="text-center mb-10 h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex justify-center items-center flex-col rounded-md p-4">
      <LangSwitcher currentPathame={pathname} />
      <Avatar />
      <h1 className="font-bold">{t("name")}</h1>
      <p className="text-lg font-semibold text-neutral-300">{t("role")}</p>
      <p className="text-lg">📍{t("location")}</p>
      <NavLinks />
      <Arrow />
    </header>
  );
}
