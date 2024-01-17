import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import { getConfig } from "../utils/i18n";
import "../globals.css";
import INTERFACE_LANGUAGES from "../data/interface-languages";
import METADATA from "../data/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = METADATA;

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  const config = await getConfig(locale);

  return (
    <html className="scroll-smooth" lang={locale} translate="no">
      <body className={`${inter.className} bg-slate-800 text-white pb-12`}>
        <NextIntlClientProvider {...config}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return INTERFACE_LANGUAGES.map((locale) => ({ locale }));
}
