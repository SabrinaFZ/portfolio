import { getMessages } from "./messages";

export async function getConfig(locale: string) {
  const messages = await getMessages(locale);

  return {
    timeZone: "Europe/Vienna",
    now: new Date(),
    locale: locale,
    messages,
  };
}
